---
layout: single
title: "15-Day Deep Dive Plan: Networking & Security Foundations"
date: 2025-09-04 20:00:00 +0530
category: cloud
author: Sarang Deshmukh
featured-image: /assets/images/k8gke.png
---

### 📅 Plan Overview
- **Phase 1 (Days 1–5):** Networking Foundations  
- **Phase 2 (Days 6–10):** Security Deep Dive  
- **Phase 3 (Days 11–15):** Cloud Infra, DevOps, and Resilience  

**Each Day**  
- **Study** → Core topic (theory + references)  
- **Practice** → Hands-on (tools, cloud, labs)  
- **Draft** → Add notes/diagrams to final blog  

---

## Phase 1 – Networking Core (Day 1–5)

### Day 1: DNS & GeoDNS
- **Core:** DNS internals, GeoDNS  
- **Hands-on:** `dig`, `nslookup`, tracing resolution  
- **GCP Angle:** Cloud DNS (public/private zones, policy-based routing)  

### Day 2: TLS Handshake & Certificates
- **Core:** TLS 1.3 handshake, PKI, cert trust  
- **Hands-on:** Wireshark + OpenSSL demo  
- **GCP Angle:** Cloud Load Balancer with SSL policies, Certificate Manager  

### Day 3: Load Balancing
- **Core:** L4 vs L7, health checks  
- **Hands-on:** Nginx demo  
- **GCP Angle:** Global HTTP(S) LB, TCP/UDP Proxy, Internal LB  

### Day 4: CDN & HTTP3/QUIC
- **Core:** CDN fundamentals, QUIC protocol  
- **Hands-on:** `curl -I` header inspection  
- **GCP Angle:** Cloud CDN, Cloud Armor for DDoS/edge protection  

### Day 5: End-to-End Packet Flow
- **Core:** TCP/UDP journey (client → app → storage)  
- **Hands-on:** Wireshark trace of file upload  
- **GCP Angle:** VPC Flow Logs, Packet Mirroring  

---

## Phase 2 – Security Deep Dive (Day 6–10)

### Day 6: Authentication
- **Core:** OAuth2, OIDC, JWT  
- **Hands-on:** Demo with Auth0 or Firebase Auth  
- **GCP Angle:** Identity Platform, Workload Identity Federation  

### Day 7: Authorization
- **Core:** RBAC, IAM least privilege  
- **Hands-on:** Kubernetes RBAC demo  
- **GCP Angle:** IAM Roles, Service Accounts, Org Policy Constraints  

### Day 8: Encryption
- **Core:** At rest, in transit, client-side  
- **Hands-on:** KMS + GPG file encryption  
- **GCP Angle:** Cloud KMS, CMEK vs CSEK, Secret Manager  

### Day 9: Network Security
- **Core:** VPC design, SG vs NACL, zero trust  
- **Hands-on:** Secure subnet design in AWS/GCP  
- **GCP Angle:** VPC Service Controls, Private Google Access, BeyondCorp Zero Trust  

### Day 10: Compliance & Logging
- **Core:** GDPR, audit trails, SIEM basics  
- **Hands-on:** Syslog → Elastic/Graylog  
- **GCP Angle:** Cloud Audit Logs, Security Command Center, Forseti  

---

## Phase 3 – Cloud Infra & DevOps Angle (Day 11–15)

### Day 11: Object Storage Internals
- **Core:** Consistency, durability, versioning  
- **Hands-on:** S3 + lifecycle policies  
- **GCP Angle:** Cloud Storage (multi-region buckets, Object Lock, Signed URLs)  

### Day 12: Multi-Region Deployment
- **Core:** Active-active vs passive failover  
- **Hands-on:** Route53 failover demo  
- **GCP Angle:** Cloud Spanner, Cloud SQL HA, Traffic Director, Global Load Balancing  

### Day 13: Observability & Resilience
- **Core:** Rate limiting, tracing, chaos testing  
- **Hands-on:** Jaeger tracing demo  
- **GCP Angle:** Cloud Monitoring, Cloud Trace, Error Reporting, Service Mesh (Anthos/ASM)  

### Day 14: DevSecOps Automation
- **Core:** IaC + security scanning  
- **Hands-on:** Terraform + tfsec + Trivy  
- **GCP Angle:** Terraform GCP provider, Binary Authorization, Artifact Registry + scanning  

### Day 15: CAP Theorem & Trade-offs
- **Core:** Consistency vs availability vs partition tolerance  
- **Hands-on:** Simulate DB failover  
- **GCP Angle:** Bigtable (CP), Spanner (strong consistency), Firestore (eventual) — trade-off examples  

---

## ✅ Final Deliverable
At the end of 15 days, you will have:  
- A **deep understanding** of networking & security fundamentals in cloud context  
- A **comprehensive blog** → *Designing a Secure Global File Sharing System on Cloud*  
- **Hands-on demos, notes, and diagrams** to back your learning  
- **Architecture design** covering AWS + GCP equivalents  

---
