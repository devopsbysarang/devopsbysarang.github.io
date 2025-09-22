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
