---
layout: single
title: "Black-Friday Resilient Architectures: Defence-in-Depth for E-Commerce on AWS"
date: 2025-09-04 20:00:00 +0530
category: cloud
author: Sarang Deshmukh
featured-image: /assets/images/sd.png
---

## 1 — Quick Summary
E-commerce platforms hold PII, payment flows, and inventory logic — making them high-value targets.  

**Defence-in-depth** means layering protections at the edge, network, platform, application, and data layers while designing for **least privilege, zero-trust, and operational observability**.  

The most technical, high-impact components that separate advanced designs from beginner ones are:  
- **mTLS** for east-west trust between services (service identity)  
- **Security Group chaining** for micro-segmentation  
- **WAF tuning** at CloudFront edge (not just default rules)  
- **Shield Advanced** for flash sale / DDoS resilience  
- **IRSA (IAM Roles for Service Accounts)** to give Kubernetes pods least privilege AWS access  
- **Supply-chain controls** (image signing, admission controllers, SCA/SAST)  

---

## 2 — Before and After Security Layer

### Before
```text
[Internet]
  │
[CloudFront/ALB]  (sg_alb)  --> inbound 0.0.0.0/0:443
  │
  +-- sg_alb (Ingress: 0.0.0.0/0:443)  --> accepts any IP
  │
[VPC]
   ├─ EKS Worker Nodes / EC2 (sg_node)
   │     ├─ Pods --> (no IRSA, use node role)
   │     └─ sg_node --> (Ingress: 0.0.0.0/0:22, 0.0.0.0/0:443, Egress: 0.0.0.0/0:*)
   │
   ├─ RDS (sg_rds)
   │     └─ sg_rds --> (Ingress: 0.0.0.0/0:3306) <-- DB widely open
   │
   ├─ ElastiCache (sg_cache)
   │     └─ sg_cache --> (Ingress: 0.0.0.0/0:6379)
   │
   └─ Kafka (sg_kafka)
         └─ sg_kafka --> (Ingress: 0.0.0.0/0:9092)
```

### After

```text
[Internet]
 │
[CloudFront + WAF + Shield]  --> only CloudFront IPs / WAF validated requests
 │
[ALB / API Gateway] (sg_alb)
 ├─  Ingress --> CloudFront only (or ALB origin: CF signature header) | Only allow 443
 │
[VPC (10.0.0.0/16)]
 ├─ Public Subnets
 │    ├─ ALB (sg_alb)       --> Ingress: CloudFront
 │    └─ NAT (for egress)   --> (managed)
 │
 └─ Private Subnets (per AZ)
      ├─ EKS Worker Nodes (sg_node)   --> Ingress: sg_alb (443) via node ports only
      │     └─ Pods --> (networkPolicy + per-service SG-model or node SG + strict NP)
      │          - svc-orders (sg_orders)       --> IRSA: OrdersRole
      │          - svc-payments (sg_payments)   --> IRSA: PaymentsRole
      │          - svc-search  (sg_search)      --> IRSA: SearchRole
      │          - envoy sidecars (mTLS enforced)
      │
      └─ Private DB Subnets
           ├─ RDS Aurora (sg_db)     --> Ingress: sg_app (3306/5432) only
           ├─ ElastiCache (sg_cache) --> Ingress: sg_app (6379) only
           └─ Kafka (sg_kafka)       --> Ingress: sg_app (9092) only

```

## 3 — Security Overview of Small-Scale Platform: ShopNow
**ShopNow** is a mid-stage e-commerce startup.  

🔎 **Audit findings**:  
- Shared node IAM roles  
- Plaintext east-west traffic  
- SGs with wide CIDRs  
- Minimally tuned WAF  

🚀 **Phased security program executed**:
1. **Edge first** — CloudFront + WAF tuned + Shield Advanced.  
   → Immediately reduced malicious bots and offered DDoS response.  
2. **Network segmentation** — SG chaining + SSM (no SSH).  
   → Stopped direct DB reachability.  
3. **IRSA roll-out** — pod-level AWS permissions, tight trust policies, CloudTrail monitoring of role usage.  
4. **mTLS deployment** — App Mesh with Envoy for payments & orders first, certs via ACM PCA, then full mesh.  
5. **Supply chain** — ECR scanning, image signing (cosign), OPA Gatekeeper admission control, CI OIDC federation.  

📈 **Outcome**:  
- MTTD reduced from **days to <1 hour**  
- Phishing/data exfil prevented  
- Zero-trust posture established for production  

---

## 4 — Deep Dives (the hard, interview-relevant parts)

### 4.1 TLS vs mTLS — Why and How (Advanced)

#### TLS (client → server)
- Protects client → edge communications.  
- Use ACM for browser/mobile certificates.  
- TLS 1.2+ or 1.3, secure ciphers, HSTS.  

#### mTLS (mutual TLS — east-west)
- **Both parties present and validate certs**.  
- Creates **service identity**, not just network identity.  
- Prevents **internal impersonation**: compromised pod cannot claim identity of `payments-service` without its cert.  

#### How to implement at scale
- **Service mesh**: Istio or AWS App Mesh + Envoy sidecars. Sidecar handles mTLS, cert rotation and telemetry.  
- **Certificate authority**: ACM Private CA or Vault PKI. Use **short TTLs (days)** and auto-rotation.  
- **Policy enforcement**: Deny plaintext by default. Enforce mTLS via mesh PeerAuthentication & DestinationRule equivalents.  
- **Observability**: Integrate Envoy metrics + OpenTelemetry traces. Since payloads are encrypted, sidecar telemetry is essential.  

---

#### 🔐 Flow: mTLS in App Mesh
1. Pod spins up (e.g., `payments-service`).  
2. Envoy sidecar requests a cert from **ACM PCA** (via App Mesh integration).  
3. Cert is mounted into Envoy → Envoy advertises identity `spiffe://payments`.  
4. When `orders` calls `payments`:  
   - Orders Envoy presents its cert (`spiffe://orders`).  
   - Payments Envoy validates it against ACM PCA trust bundle.  
   - Both sides verify each other (mutual TLS).  
5. If cert check fails (wrong service, expired cert, revoked cert), **traffic is dropped**.  

---

#### Visual

Without mTLS (flat trust)
```text
 orders -----> payments
    (any pod in VPC can spoof calls)
```

With mTLS 
```text
   [orders pod]--[Envoy] <==TLS+cert==> [Envoy]--[payments pod]
      |                                     |
   Cert (orders)                        Cert (payments)
   issued by ACM PCA                   issued by ACM PCA
```
### ⚠️ Operational Pitfalls & Mitigations (mTLS)
- **Pitfall: Certificate expiry causing outages**  
  → **Mitigation**: Stagger rollouts, automated rotation, readiness checks.  

- **Pitfall: Debugging complexity**  
  → **Mitigation**: Sidecar debug tooling, mutual TLS verification endpoints, and strong logging (Envoy + X-Ray/OpenTelemetry).  

---

### 4.2 IRSA (IAM Roles for Service Accounts) — Deep Technical Notes

#### Problem IRSA Solves
Without IRSA, pods inherit **node IAM roles**.  
- This leads to **over-privilege** (every pod on the node can use the same role).  
- Increases **lateral movement risk** if a pod is compromised.  

---

#### How IRSA Works
1. EKS cluster has an **OIDC provider** (cluster OIDC).  
2. A Kubernetes **ServiceAccount** is annotated with an **IAM Role ARN**.  
3. Pod uses a **web identity token** → AWS STS issues **temporary credentials** for that role.  

---

#### Best Practices
- **Scope trust policy**: Restrict `sts:AssumeRoleWithWebIdentity` Condition to:
  - `aud` = cluster OIDC audience  
  - `sub` = exact ServiceAccount ARN or namespace  
- **Least privilege IAM**: One role per ServiceAccount with minimal permissions.  
- **Tag sessions**: Require `iam:TagSession` → add environment tags (e.g., `env=prod`) for conditional permissions.  
- **Monitor**: Use CloudTrail + Insights to detect abnormal role usage (frequency, geolocation).  
- **Rotate**: Review roles/policies in CI/CD pipelines; enforce automated linters (`policy-sentry`, `terraform-compliance`).  

---

#### Example Trust Policy (Conceptual)
```json
{
  "Effect": "Allow",
  "Principal": {
    "Federated": "arn:aws:iam::111111111111:oidc-provider/oidc.eks.region.amazonaws.com/id/CLUSTER_ID"
  },
  "Action": "sts:AssumeRoleWithWebIdentity",
  "Condition": {
    "StringEquals": {
      "oidc.eks.region.amazonaws.com/id/CLUSTER_ID:sub": "system:serviceaccount:orders-ns:orders-sa",
      "oidc.eks.region.amazonaws.com/id/CLUSTER_ID:aud": "sts.amazonaws.com"
    }
  }
}
```

#### Common Failure Modes
- Wrong OIDC URL or audience → Pods cannot assume role.
- Trust too broad (wildcard sub) → Risk of impersonation.

# 4.3 Security Groups (SG) — Advanced Patterns & Egress Control

## Principles
- **SG-to-SG referencing** over CIDR → more dynamic, reduces hardcoding of IPs.  
- **Principle of least privilege**: minimal ports, minimal sources.  
  - Example:  
    - ALB → App: allow **443** only  
    - App → DB: allow **DB port** only  
- **Egress deny-by-default**:  
  - Allow only explicitly required external endpoints:  
    - VPC Endpoints for **S3, ECR, KMS**  
    - Blocks arbitrary internet exfiltration  

## Example Topology
- **sg_alb**  
  - Ingress: CloudFront IP space (or 0.0.0.0/0 if behind CF)  
  - Prefer **WAF header verification** over raw IP restrictions  
- **sg_app**  
  - Ingress: from `sg_alb`  
  - Egress: to `sg_db`, `sg_cache`  
- **sg_db**  
  - Ingress: from `sg_app` only  
- **sg_management**  
  - Egress: AWS SSM endpoints  
  - Admin access via **SSM Session Manager**, not open SSH  

## Automation & Drift
- **AWS Config rules** → detect overly permissive/public SGs  
- **IaC GitOps** (Terraform, CDK) → source of truth  
- **Policy guardrails** → OPA/Sentinel to prevent `0.0.0.0/0` drift  
- **Nightly drift detection** → reconcile SG state with IaC  

---

# 4.4 WAF (CloudFront Edge) — Advanced Tuning

## Why CloudFront + WAF
- Stops malicious traffic **before** it reaches ALB/API Gateway  
- Protects **origin cost, performance, and blast radius**  

## Advanced Controls
- **Managed rulesets** (AWS / 3rd-party) → OWASP protection  
- **Rate limiting**: fine-grained thresholds (e.g., `/checkout` stricter than `/home`)  
- **Geo + bot filtering**:  
  - Block scrapers / bad UAs  
  - Allowlist trusted marketplaces  
- **Header & cookie validation**:  
  - Enforce presence of custom app headers  
  - Block invalid mobile signatures  
- **Progressive challenges**:  
  - CAPTCHA or JavaScript challenge for signup / forgot password endpoints  

## Rollout Strategy
- Use **COUNT mode** first to measure false positives  
- Switch to **BLOCK** after validation in staging/prod  
- **Canary rollout**: staged CloudFront distributions with updated WAF  

---

# 4.5 Shield Advanced — Justification & Playbook

## When to Use
- High-value events (Black Friday, seasonal spikes)  
- When scaling costs from attacks could be **financially damaging**  
- Need **AWS DDoS Response Team (DRT)** involvement  

## Features
- **DDoS cost protection** (credits for scale-up during attack)  
- **DRT integration** with custom WAF rulesets  
- **Global dashboards** with real-time threat intelligence  

## Integration
- Combine Shield Advanced + **Route 53 health checks**  
- Failover routing to backup region during multi-region attack  
- Layer with WAF → block malicious sources early  

---

# 4.6 Use SSM over SSH for Bastion Host

## 🔑 SSH (Legacy)
- Works via **key pair / password** on port 22  
- Security surface:  
  - Requires **port 22 open** (brute-force + scanning risk)  
  - Keys/passwords are **long-lived secrets** → leak/rotation risks  
  - Manual `.ssh/authorized_keys` management  
  - Weak audit — no native per-command logs  
  - Bastion compromise = high lateral movement risk  

## 🔒 SSM (AWS Systems Manager Session Manager)
- Works via **AWS API (HTTPS 443)**, no inbound ports  
- Security surface:  
  - No **port 22 exposure** → closed SG  
  - No keys → IAM role-based auth  
  - Strong audit: sessions logged to **CloudTrail, CloudWatch Logs, S3**  
  - Enforce **MFA** on IAM before sessions allowed  
  - **Just-in-time**: temporary session permissions (e.g., 1 hour)  
  - Reduced lateral movement → IAM boundaries + scoped access  

# 5 — Supply Chain, CI/CD & Runtime Controls

## CI/CD Identity Hardening with OIDC
- **Problem**: Long-lived IAM keys in CI/CD pipelines → high theft/exfiltration risk.  
- **Solution**: Use **OIDC federation** for ephemeral credentials.  
  - GitHub Actions, GitLab CI, or AWS CodeBuild runners request OIDC tokens.  
  - IAM trust policies validate repo/branch and issue **short-lived STS creds**.  
  - No static AWS keys stored in pipeline secrets.

## OIDC Flow for GitHub Actions → AWS

```text
[GitHub Actions Runner]
   │ (1) Requests OIDC token
   ▼
[GitHub OIDC Provider]
   │ (2) Issues signed OIDC token (short-lived)
   ▼
[AWS IAM OIDC Federation Trust]
   │ (3) Validates token (aud, repo, branch, etc.)
   ▼
[AWS STS]
   │ (4) Issues temporary credentials
   ▼
[Deploy Role in AWS Account]
   Permissions:
     - eks:UpdateCluster
     - s3:PutObject
     - cloudformation:DeployStack
```

- **Image scanning & signing**: ECR scan on push + sign images with cosign. Admission controllers enforce signature presence.
- **SAST/SCA**: integrate Snyk/Trivy/Sonar in CI gates (blocking release on critical CVEs).
- **Admission controllers**: OPA/Gatekeeper or Kyverno for policies (no hostPath, required resource limits, required image registry signed).
- **Runtime detection**: Falco / Sysdig for suspicious syscalls, detect container escapes, file changes.
- **Immutable infra**: Replace AMIs via image pipelines; use managed node groups and node image rotation.

# 6. Data Protection and PII / Payments

- **Encryption at rest**: RDS/Aurora, EBS, S3, ElastiCache with CMK (customer-managed) and rotation policy.  
- **Encryption in transit**: TLS everywhere, mTLS for services. Use KMS for envelope encryption.  
- **S3 hardening**: Block public access, bucket policies, Access Points, S3 Object Lock for critical buckets, Macie for PII detection.  
- **Payment data**: Don’t store card PANs — tokenize via PCI-certified provider. If processing requires in-scope infra, isolate payment service in a dedicated VPC/subnet with strict logging and controls.  
- **PII**: Data classification, retention/erase workflows (GDPR SARs) and attribute-level encryption when needed.  

---

# 7. Threat Model (Top Threats + Mitigations)

### 1. Account takeover / credential theft  
**Mitigations**: Enforce MFA, strong password policy, monitoring for abnormal console/API access, short-lived tokens.  

### 2. Lateral movement from compromised pod  
**Mitigations**: IRSA, SG chaining, network policies, mTLS, runtime detection (Falco).  

### 3. Data exfiltration from S3/RDS  
**Mitigations**: Block public access, Macie, VPC endpoints, KMS key policy restricting deletion, Egress deny lists.  

### 4. Supply chain compromise (CI/CD)  
**Mitigations**: OIDC federation, artifact signing, SCA/SAST, admission controller.  

### 5. DDoS / Flash sale disruption  
**Mitigations**: CloudFront + WAF, Shield Advanced, Route 53 failover.  

### 6. Ransomware / snapshot deletion  
**Mitigations**: Immutable backups, cross-region replication, restricted KMS keys, MFA Delete on S3.  

---

# 8. Compliance Checklist (PCI / GDPR / HIPAA Highlights)

### PCI DSS (if handling card data)  
- Segregated network for payment stack.  
- Strict logging/monitoring; retain logs per PCI.  
- Third-party PCI-certified processor preferred; if in scope, implement cardholder data environment (CDE) controls, encryption, access logs.  

### GDPR  
- Data minimization, subject access/deletion workflows, data mapping, DPIAs for new features.  
- Data residency controls via region selection and cross-region replication policies.  
- Data processing agreements and breach notification timelines.  

### HIPAA (if handling PHI)  
- BAA with AWS + any third parties.  
- Encryption at rest/in transit, strict access controls, audit logging, and disaster recovery.  

---

# 9. Prioritized Rollout Plan (Practical, with Tasks)

### Quick wins (days → 2 weeks)  
- Enforce MFA + disable root/long-lived API keys.  
- Enable multi-region CloudTrail + centralized encrypted S3 bucket for logs.  
- Block public S3 access; run Macie initial scan.  
- Replace SSH bastions with SSM Session Manager; delete public SSH keys.  
- Attach AWS WAF at CloudFront with managed OWASP rules + rate limiting (COUNT → BLOCK).  
- Enable GuardDuty.  

### Mid-term (2–8 weeks)  
- Implement IRSA for all EKS services (create per-svc roles, trust policies).  
- Rework Security Groups into SG-to-SG chains; deny broad AWS SGs/CIDRs.  
- ECR scanning + sign images (cosign); add CI checks to fail on critical CVEs.  
- Deploy OPA/Gatekeeper admission controller policies (disallow privileged containers, require signed images).  
- Configure Security Hub and SIEM ingestion (Security Lake / Splunk / Elastic).  

### Long-term (2–6 months)  
- Deploy full mTLS service mesh (App Mesh / Istio), start with critical services (payments, orders), then full rollout.  
- Onboard Shield Advanced and multi-region failover for SLAs around flash sales.  
- Build full supply chain: signed artifacts, provenance, automated policy gates, SBOM generation.  
- Run continuous red/purple team exercises and chaos security testing.  
- Establish continuous drift detection & automatic remediation for SGs/IAM via GitOps.  

---

# 10. Operational Rules, KPIs & Runbook Snippet

### Policies to Codify  
- IAM least privilege, role review cadence.  
- Secret rotation policy (Secrets Manager / Vault).  
- Logging retention policy and access controls.  
- Incident response SLAs & notification matrices.  

### KPIs / SLOs  
- **Mean Time to Detect (MTTD)** target: < 60 minutes (goal: < 15 minutes).  
- **Mean Time to Remediate (MTTR)** target: < 4 hours for critical incidents.  
- **% of production images scanned & passing**: > 99%.  
- **Number of high-severity CVEs open**: target 0.  
- **Successful DR restore time**: target < RTO.  

### Runbook Snippet — Suspicious S3 Exfil Detection  

1. **Trigger**: Macie or GuardDuty flags large GETs from unusual IP + CloudTrail shows new role assumption.  
2. **Contain**:  
   - Immediately add Deny policy to suspected role (using `aws iam put-role-policy` or via AWS Organizations SCP).  
   - Add WAF rule to block the source/gateway IPs or rate limit.  
3. **Collect**:  
   - Preserve CloudTrail logs, S3 access logs, VPC Flow Logs; create forensic snapshot of involved EC2/EKS nodes.  
4. **Eradicate & Recover**:  
   - Rotate affected secrets, invalidate session tokens, restore compromised objects from last known good backups.  
5. **Post-Mortem**:  
   - Root cause analysis, remediation of the XSS/bug/exposed credentials, update WAF rules, notify legal/CISO if PII affected.  

---

# 11. Final Thoughts & Recommended Next Steps

This merged, advanced guide shifts the focus from *“add services”* to *how you use them correctly*:  

- **mTLS** establishes service identity and prevents internal impersonation. Operationalize it with a mesh.  
- **IRSA** turns pod compromise from catastrophic into survivable by scoping role permissions.  
- **Security Groups** are not a minor detail — they’re the last network fence and must be designed as SG-to-SG chains with egress controls.  
- **WAF and Shield** are resilience layers — tune WAF at edge, use Shield Advanced for critical events.  
- **Supply chain and CI/CD** changes are as important as runtime changes; enforce signing, scanning, and policy gates.  
