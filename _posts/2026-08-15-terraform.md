---
layout: single
title: "Terraform Associate Certification — Complete Exam Preparation Guide"
date: 2025-08-15 20:00:00 +0530
category: cloud
author: Sarang Deshmukh
featured-image: /assets/images/terraform-certification.png
permalink: /automation/terraform-associate-certification/
---

---
title: "Terraform Associate Certification — An Architect's Field Guide"
subtitle: "Not a cram sheet. A complete mental model for how Terraform actually behaves in production, expanded and distilled for the exam."
category: cloud / infrastructure-as-code
audience: engineers preparing for the HashiCorp Terraform Associate exam
---

> **A note before you start.** I've run Terraform in production for years — multi-account AWS and GCP estates, shared state backends, postmortems where the root cause was a single misunderstood flag. The exam tests a narrow slice of that experience, but it tests the *right* slice: the conceptual boundaries that, when fuzzy, cause real incidents. This guide is long on purpose. I'm not handing you a cheat sheet — I'm walking you through the same mental model I'd build in a senior engineer joining my team, with the production context that makes each rule stick instead of just being another fact to forget in three weeks. Read it in order the first time. Use the reference tables at the end for revision.

---

# Part I — Foundations

## 1. The Model You Need Before Anything Else

Everything in Terraform reduces to three things being compared against each other, continuously:

```text
Configuration  →  what you WANT       (your .tf files)
State          →  what Terraform THINKS exists   (terraform.tfstate)
Real world     →  what ACTUALLY exists   (the provider/API — AWS, Azure, GCP…)
```

Terraform's entire job, every single command, is reconciling these three things:

```text
        Configuration
             │
          Terraform
             │
           State  ←──────→  Real Infrastructure
```

- `terraform plan` diffs configuration against state, and (by default) refreshes against the real world first, so the diff you see reflects current reality.
- `terraform apply` executes that diff and updates state to match.
- `terraform apply -refresh-only` updates state to match the real world *without* touching configuration-driven changes.
- `terraform import` wires an already-existing real-world object into state.
- `terraform state rm` removes Terraform's *record* of an object from state, without touching the real world at all.

Almost every exam question — and almost every production incident I've been paged for — traces back to one of these three getting out of sync with the others, and someone reaching for the wrong tool to fix it. If you take away nothing else from this entire guide, take away this triangle. I'd bet a third of the exam is, underneath the specific wording, testing whether you know which corner of this triangle a given command touches.

**Why this matters beyond the exam:** the day someone on your team runs `terraform apply` from a stale branch against production state, this is the model that lets you reason calmly about what actually happened and how to recover, instead of panicking and running more commands that make it worse.

---

## 2. Declarative, Not Scripted

Terraform is declarative infrastructure-as-code: you specify the *end state*, and Terraform computes the delta and the execution order required to get there. You are never telling Terraform "do this, then this, then this." You're telling it "this is what the world should look like when you're done."

```hcl
resource "aws_instance" "web" {
  ami           = "ami-xxxxxxxx"
  instance_type = "t3.micro"
}
```

Contrast that with an imperative runbook:

```text
1. Create VPC
2. Create subnet
3. Create route table
4. Attach route table to subnet
5. Launch EC2 instance
```

Terraform doesn't want the steps; it wants the shape. It figures out the steps itself by building a dependency graph from the references in your configuration — which is exactly why `terraform graph` exists, and why correct ordering "just works" in the vast majority of configurations without you ever specifying it manually.

**Architect's note:** this is the single biggest mindset shift for engineers coming from shell scripts, Ansible playbooks, or hand-run AWS CLI commands. Fighting the declarative model — trying to force step-by-step ordering, trying to make Terraform "do a thing" rather than "reach a state," writing configuration that only makes sense if applied in a specific sequence by a specific person — is where most early Terraform pain in a new team comes from. The people who struggle longest with Terraform are usually the strongest imperative scripters, because they keep instinctively reaching for "and then do X" instead of "and X should exist."

---

## 3. Terraform in One Sentence, Expanded

Terraform is a declarative Infrastructure as Code tool that defines, provisions, and manages infrastructure across one or more providers by comparing desired configuration against recorded state and computing the minimal set of API calls needed to reconcile them.

Every word in that sentence maps to something concrete you'll be tested on:

| Phrase | Maps to |
|---|---|
| "declarative" | you write the end state, not the steps |
| "defines, provisions, manages" | `resource` blocks, the full `init → plan → apply` lifecycle |
| "across one or more providers" | multi-provider configs, provider aliasing |
| "comparing... against recorded state" | the `plan` diff engine |
| "minimal set of API calls" | Terraform doesn't recreate what hasn't changed |

---

# Part II — The Core Workflow

## 4. The Standard Lifecycle

```text
terraform init
      ↓
terraform validate
      ↓
terraform plan
      ↓
terraform apply
```

And, when infrastructure is being decommissioned entirely:

```text
terraform destroy
```

I treat this as a strict pipeline in CI — no stage is optional, and no stage is skippable "because we're in a hurry." Every production incident I've seen from a rushed apply traces back to someone skipping `plan` review or applying an unreviewed diff.

## 5. terraform init — In Depth

`terraform init` initializes a Terraform working directory. Concretely, it:

- Downloads and installs the required provider plugins (per `required_providers`)
- Initializes and downloads any referenced modules (local or remote)
- Configures and connects to the configured backend
- Creates the `.terraform/` working directory and writes/updates `.terraform.lock.hcl`

```bash
terraform init
```

If provider or module version requirements have changed since the last init:

```bash
terraform init -upgrade
```

**Exam point, stated plainly:** `terraform init` never creates, modifies, or destroys infrastructure. It is entirely a local bootstrapping operation. If a question describes any change to real infrastructure as a result of `init`, that answer is wrong by definition.

**Production note:** `init` is also where backend migrations happen — if you change your `backend` block (say, moving from local state to an S3 backend), running `init` again is what prompts Terraform to offer to copy existing state into the new backend. This is a moment I always do by hand, carefully, with a state backup taken first — it's one of the few places a routine command can silently orphan your state if you answer the migration prompt wrong.

## 6. terraform validate

Checks whether the configuration is syntactically valid and internally consistent — references resolve, types line up, required arguments are present.

```bash
terraform validate
```

Think of it as: *"Is my configuration well-formed?"* It does **not** check the configuration against real infrastructure, and it does **not** require valid provider credentials to run (in most cases) — it's a local, offline-ish sanity check, not a plan.

## 7. terraform plan — In Depth

Shows what Terraform intends to do to reconcile configuration with (refreshed) state and reality, without doing it.

```bash
terraform plan
```

Symbol vocabulary you need to read at a glance, under exam time pressure:

| Symbol | Meaning |
|---|---|
| `+` | create |
| `~` | modify in place |
| `-` | destroy |
| `-/+` | destroy and recreate (replace) |

Saving a plan for later, exact execution:

```bash
terraform plan -out=tfplan
terraform apply tfplan
```

**Why I insist on this pattern for anything touching shared or production infrastructure:** a saved plan file is a binary snapshot of the exact diff a human reviewed. Without it, the state could drift *between* your `plan` and your `apply` — someone else applies in the meantime, a scheduled scaling event fires, whatever — and the `apply` you run is silently different from the `plan` you approved. In any regulated or high-stakes environment, "plan reviewed in PR, exact same plan file applied in CI" is table stakes, not a nice-to-have.

Previewing a full teardown before committing to it:

```bash
terraform plan -destroy
```

## 8. terraform apply — In Depth

```bash
terraform apply
```

Under the hood, on every apply Terraform:

1. Evaluates the configuration
2. Refreshes state against real infrastructure (unless disabled)
3. Compares desired state (config) against current state
4. Builds an execution plan
5. Prompts for approval (unless auto-approved)
6. Applies the approved changes via provider API calls, in dependency order
7. Updates state to reflect the new reality

```bash
terraform apply -auto-approve
```

I use `-auto-approve` only inside CI pipelines where a human has already approved a saved plan artifact upstream — never as a habit on a local terminal. Auto-approving a fresh, unreviewed plan against anything that matters is how "just a config typo" becomes an outage.

## 9. terraform destroy

```bash
terraform destroy
```

Destroys every resource tracked in the current state. Always preview first:

```bash
terraform plan -destroy
```

Remember the distinction, because it's tested directly and it's operationally critical:

```text
plan -destroy  = preview only, nothing happens
destroy        = executes, infrastructure is gone
```

I've seen `destroy` run against the wrong workspace exactly once on a team I was on, early in my career, before we had `prevent_destroy` guardrails everywhere that mattered. It's the reason `lifecycle { prevent_destroy = true }` exists on every production database block I write today — see §21.

---

# Part III — Configuration Anatomy

## 10. Configuration Files

Terraform configuration files use the `.tf` extension. A typical project layout:

```text
main.tf
variables.tf
outputs.tf
providers.tf
terraform.tf
```

Terraform loads **all** `.tf` files in the working directory as a single merged configuration — filenames are a human organizational convention, not a Terraform requirement. I've worked in codebases with one giant `main.tf` and codebases split into a dozen files by resource domain; Terraform treats them identically. The split exists purely for the humans reading the diff in a pull request.

## 11. Providers

Providers are what let Terraform talk to external APIs — AWS, Azure, GCP, Kubernetes, GitHub, Cloudflare, Datadog, and hundreds more. Think of a provider as a plugin that translates your declarative resource blocks into that platform's specific API calls.

```hcl
provider "aws" {
  region = "ap-south-1"
}
```

You can declare multiple provider configurations of the same type using aliases — common in multi-region or multi-account setups:

```hcl
provider "aws" {
  alias  = "us_east"
  region = "us-east-1"
}

resource "aws_instance" "backup" {
  provider = aws.us_east
  # ...
}
```

**Production pattern I use constantly:** aliased providers for cross-region DR resources or cross-account resource sharing, so a single root module can provision into more than one account/region without duplicating the entire configuration tree.

## 12. required_providers

Provider dependencies are declared in the `terraform` block:

```hcl
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }
}
```

This specifies the provider's registry source address, and the allowed version range. Without a `source`, Terraform can't reliably resolve which provider you mean (there have historically been multiple providers with overlapping short names).

## 13. required_version vs. required_providers — the First Real Exam Trap

One of the most consistently confused pairs on both the exam and in real engineering conversations.

**`required_version`** controls the Terraform **CLI/engine** version:

```hcl
terraform {
  required_version = ">= 1.5.0"
}
```

**`required_providers`** controls **provider plugin** dependencies:

```hcl
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 6.0"
    }
  }
}
```

| Concept | Governs |
|---|---|
| `required_version` | The Terraform binary itself |
| `required_providers` | The plugins that binary loads |

**Why I care about this operationally, not just for the exam:** in a large org running many modules across many teams, mismatched CLI versions between a developer's laptop and CI are a constant, quiet source of "works on my machine." Pinning `required_version` in every root module — and failing CI loudly if it doesn't match — has saved my teams from more than one confusing afternoon.

## 14. Provider Version Constraints, in Full

```text
>= 1.0     at least 1.0
> 1.0      strictly greater than 1.0
< 2.0      strictly less than 2.0
<= 2.0     at most 2.0
= 1.5.0    exactly 1.5.0
~> 1.5     pessimistic constraint
```

The `~>` operator — the **pessimistic constraint operator** — is the one that trips people up, so let's be precise about it:

```text
~> 1.5     → allows any 1.x release starting at 1.5 (1.5.0, 1.6.0, 1.9.0…), but never 2.0
~> 1.5.2   → allows patch releases only (1.5.3, 1.5.4…), but never 1.6.0
```

The rule: the operator locks everything to the *left* of the rightmost specified version segment, and allows drift only in the *rightmost* segment. This is the single most exam-tested version-constraint fact — memorize it by working the two examples above until they're automatic, not by memorizing the sentence.

## 15. .terraform.lock.hcl

Terraform uses `.terraform.lock.hcl` to record the exact provider versions and cryptographic checksums selected during `init`.

Benefits:

- Consistent provider versions across every machine and CI runner that runs `init`
- Repeatable deployments — the same provider binary, byte for byte, every time
- Protection against a compromised or altered provider package (checksum verification)

It should generally be committed to version control, the same way a `package-lock.json` or `Gemfile.lock` would be.

**Do not confuse this with Terraform state** — this is one of the exam's favorite pairs to test, and one of the pairs I most often see confused by engineers new to Terraform:

```text
.terraform.lock.hcl  →  provider dependency information (safe, non-sensitive, commit it)
terraform.tfstate    →  infrastructure state (can be sensitive, protect it)
```

---

# Part IV — Resources, Data, and State

## 16. Resources

Resources are the core building block — they represent actual infrastructure objects Terraform creates and manages.

```hcl
resource "aws_instance" "web" {
  ami           = "ami-123456"
  instance_type = "t3.micro"
}
```

Structure:

```text
resource "<TYPE>" "<NAME>"
```

Referenced elsewhere in configuration as:

```text
aws_instance.web
```

## 17. Data Sources

Data sources read existing information — from a provider API, without creating or managing anything.

```hcl
data "aws_vpc" "default" {
  default = true
}
```

| Resource | Data Source |
|---|---|
| Creates and manages infrastructure | Reads existing information only |
| Appears in `terraform state list` as a managed object | Is *not* something Terraform "owns" or will destroy |

I reach for data sources constantly when a module needs to reference infrastructure it doesn't own — a shared VPC managed by a platform team, an existing AMI, an account's default security group. It's the clean way to consume infrastructure without taking on responsibility (or blast radius) for it.

## 18. Terraform State, In Depth

State tracks the relationship between your configuration and real infrastructure.

```text
Configuration
     ↓
Terraform
     ↓
State
     ↓
Real Infrastructure
```

State lets Terraform understand, without querying every API on every run:

- What resources it manages
- Their real-world resource IDs
- Their current attribute values
- Their dependency relationships

## 19. terraform.tfstate

The default local state file:

```text
terraform.tfstate
```

It may contain resource IDs, full attribute sets (including anything marked `sensitive`), dependency metadata — essentially a complete snapshot of everything Terraform knows about your infrastructure.

> **Never treat Terraform state as harmless text.** I say this to every engineer who joins a team I lead. A `terraform.tfstate` file is frequently the single most sensitive artifact in an infrastructure repo, because it can contain database passwords, private keys, and other secrets in plaintext, regardless of whether the originating variable was marked `sensitive`.

## 20. Remote State

Instead of local state (a single file on one machine — a single point of failure and a coordination nightmare the moment more than one person touches the config), teams use remote backends.

Benefits:

- Centralized, shared source of truth
- Real collaboration without emailing state files around (yes, I've seen this happen)
- State locking (see §23)
- Better access control — who can read/write state is a separate, auditable permission
- Simpler, more reliable team workflows generally

Common backend targets:

- Amazon S3 (often paired with DynamoDB, or native S3 locking on newer Terraform versions)
- Azure Storage
- Google Cloud Storage
- Terraform Cloud / HCP Terraform
- Consul

**My default recommendation for any team past a single engineer:** remote state from day one. The cost of setting up an S3 bucket and lock table is a rounding error compared to the cost of the first "who has the current state file" conversation.

## 21. State Locking

State locking prevents multiple Terraform operations from modifying shared state simultaneously.

```text
Developer A
    ↓
Lock state
    ↓
Run Terraform (plan/apply)
    ↓
Unlock
```

While a lock is held, a second operation against the same state cannot proceed safely — it'll either wait, or (depending on backend and flags) fail with a clear locking error rather than silently corrupting state.

### Important distinction — state locking is not provider version locking

These two "locking" concepts share a word and nothing else:

```text
State locking          →  protects shared Terraform state from concurrent writes
.terraform.lock.hcl    →  locks provider dependency version selections
```

I've watched engineers debug a locking error by re-running `terraform init -upgrade` — completely the wrong tool, because that error had nothing to do with provider versions. Knowing which "lock" a given error message is about will save you real debugging time, not just exam points.

## 22. S3 Backend and DynamoDB Locking

For AWS-based Terraform setups, S3 remains the most common remote state target.

```text
S3         →  remote state storage
DynamoDB   →  state locking (classic pattern; newer Terraform versions also support native S3-based locking)
```

Older exam material (and a lot of production configs still in the wild) pairs S3 with a DynamoDB table purely for locking. Be careful with questions that separate **state storage** from **state locking** — they're conceptually distinct even when implemented by two AWS services working together.

## 23. Backend Credentials — Do This Right

Never hard-code credentials inside Terraform configuration:

```hcl
# Bad practice — never do this
backend "s3" {
  access_key = "AKIA..."
  secret_key = "secret"
}
```

Prefer secure, ambient authentication mechanisms:

- Environment variables
- Standard AWS credential chain (profiles, SSO)
- IAM roles (instance profiles, ECS task roles)
- OIDC / workload identity federation (my default recommendation for CI runners today — no long-lived secrets sitting in a pipeline at all)

> **Never commit cloud credentials to source control.** This isn't Terraform-specific advice, but Terraform configs are exactly where I most often see it violated, because a backend block or provider block feels like "just config."

## 24. terraform state Commands, In Depth

```bash
terraform state list                    # everything currently tracked
terraform state show aws_instance.web   # full attribute detail for one resource
terraform state rm aws_instance.web     # stop tracking — see below
```

### The critical difference

`terraform state rm` does **not** destroy the real infrastructure. It removes Terraform's management record for that object — the resource keeps running exactly as it was, Terraform simply forgets about it.

**Real use case I reach for this for:** handing a resource off between two Terraform configurations (splitting a monolithic root module, transferring ownership of a resource to another team's repo) — `state rm` on one side, `import` on the other, and the running infrastructure never blinks.

## 25. Terraform Import

Import brings existing, out-of-band infrastructure under Terraform's management.

```text
Existing EC2
     ↓
terraform import
     ↓
Terraform State
```

```bash
terraform import aws_instance.web i-0123456789
```

**Import does not automatically create a complete Terraform configuration.** This is the exam trap, and it's also the operational trap: you still need to hand-write a `.tf` resource block whose arguments accurately reflect the real object's current attributes. Get that wrong, and your very next `terraform plan` will show a wall of unexpected diffs as Terraform tries to reconcile your (incorrect) desired config against the real attributes it just discovered.

### Import — the exam trap stated directly

```text
AWS EC2 instance
   ↓
terraform import
   ↓
Terraform state
   ↓
✗ NOT a perfect .tf configuration automatically generated
```

The key concept, worth memorizing verbatim: **import connects existing infrastructure to Terraform state — it does not generate configuration for you.** (Newer Terraform versions do offer `-generate-config-out` tooling to *assist* with this, but even that output is a starting draft you're expected to review and correct, not a guarantee.)

## 26. Drift

Suppose Terraform created:

```text
instance_type = t3.micro
```

Someone then manually changes it in the AWS console to:

```text
instance_type = t3.small
```

Your Terraform configuration still says `t3.micro`. This mismatch — reality diverging from what Terraform's state (and config) believe — is called **drift**. Terraform detects it by comparing configuration, state, and real infrastructure on your next `plan` or `refresh`.

**Where I see this bite teams most often:** anything with an auto-scaling group, a Kubernetes operator, or another automated system that legitimately modifies attributes Terraform also thinks it owns. This is exactly the scenario `ignore_changes` (§30) exists to solve.

## 27. terraform apply -refresh-only

```bash
terraform apply -refresh-only
```

Updates Terraform state to reflect the current state of real infrastructure, **without** applying any normal configuration-driven changes. It's the deliberate, reviewable way to reconcile drift into state.

Do not confuse it with a plain:

```bash
terraform apply
```

which evaluates your configuration and *can* push new changes out to infrastructure. `-refresh-only` only pulls information in; it never pushes configuration out.

## 28. terraform taint and -replace

Older Terraform workflows used:

```bash
terraform taint aws_instance.web
```

to mark a resource for forced replacement on the next apply. `taint` is effectively deprecated in modern Terraform in favor of an explicit, plan-time flag:

```bash
terraform apply -replace="aws_instance.web"
# or, to preview first:
terraform plan -replace="aws_instance.web"
```

```text
-replace  →  force replacement of a specific resource on next apply
```

**Why the newer approach is better, operationally:** `-replace` is explicit at plan time and shows up in the reviewable diff, whereas `taint` silently mutated state ahead of time in a way that was easy to lose track of across a team. This is a small API design change that meaningfully reduced a whole class of "wait, why is this resource being destroyed?" surprises.

---

# Part V — Outputs, Locals, and Expressions

## 29. Outputs

Outputs expose useful values from a configuration — to a human running `terraform output`, or to a parent module.

```hcl
output "instance_ip" {
  value = aws_instance.web.public_ip
}
```

```bash
terraform output                # all outputs
terraform output instance_ip    # one specific output
```

## 30. Variables vs. Outputs — the Direction Rule

```text
Variable  →  Input
Output    →  Exposed result
```

For modules specifically:

```text
Parent
   ↓
Input Variable
   ↓
Child Module
```

```text
Child Module
   ↓
Output
   ↓
Parent
```

### Memorize this exactly — it answers a huge share of module questions on the exam

```text
Parent → Child = Input Variables
Child → Parent = Outputs
```

## 31. Locals

Locals define reusable, internally-computed expressions within a module — values you don't want to hardcode repeatedly, but that aren't meant to be configured from outside the module.

```hcl
locals {
  environment = "production"

  common_tags = {
    Environment = "production"
    ManagedBy   = "Terraform"
  }
}
```

Referenced as:

```text
local.environment
```

| Variable | Local |
|---|---|
| Input from outside the module | Internal, reusable, computed value |

**Pattern I use in almost every root module:** a single `locals` block computing merged tag maps (base tags + environment-specific tags + team-specific tags) once, then referencing `local.common_tags` on every resource — instead of repeating tag logic across dozens of resource blocks.

## 32. Terraform Functions

Terraform ships with a large standard library of built-in functions. A representative sample:

```hcl
length(var.names)
join(",", var.names)
lookup(var.map, "key", "default")
element(var.list, 0)
toset(var.list)
```

For the exam, understand what the *categories* of common functions do (string manipulation, collection manipulation, type conversion, numeric operations) rather than trying to memorize the entire function reference. In real work I look up exact function signatures constantly — nobody has the full standard library memorized, and the exam knows that; it tests conceptual usage, not recall of every function's exact argument order.

## 33. Expressions

Terraform expressions let values be computed rather than hardcoded.

```hcl
instance_type = var.environment == "prod" ? "t3.large" : "t3.micro"
```

This is a conditional expression:

```text
condition ? true_value : false_value
```

I use this pattern constantly for environment-driven sizing — one module, environment-aware behavior, no duplicated resource blocks per environment.

---

# Part VI — Modules

## 34. Modules

Modules let Terraform configuration be organized and reused. A module can contain resources, variables, outputs, providers, and any other valid Terraform configuration.

```hcl
module "network" {
  source = "./modules/network"
}
```

The configuration calling the module is the **parent/root module**. The referenced module is the **child module**.

## 35. Root Module vs. Child Module

```text
project/
├── main.tf
├── variables.tf
└── modules/
    └── network/
        ├── main.tf
        ├── variables.tf
        └── outputs.tf
```

The top-level project configuration is the root module. `modules/network` is a child module.

## 36. Passing Values to Modules

Parent:

```hcl
module "network" {
  source   = "./modules/network"
  vpc_cidr = "10.0.0.0/16"
}
```

Child:

```hcl
variable "vpc_cidr" {
  type = string
}
```

```text
Parent → Child = Input Variable
```

## 37. Returning Values from Modules

Child:

```hcl
output "vpc_id" {
  value = aws_vpc.main.id
}
```

Parent, referencing it:

```text
module.network.vpc_id
```

```text
Child → Parent = Output
```

## 38. Module Versions

For registry modules, always pin a version for predictable, repeatable deployments:

```hcl
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "x.x.x"
}
```

Don't confuse this strong best practice with a mandatory Terraform syntax requirement — Terraform will happily run without a pinned module version, right up until an upstream module release quietly changes behavior underneath you in production. I treat unpinned registry modules the same way I'd treat an unpinned npm dependency in a production build: a ticking time bomb, not a style preference.

## 39. Resource vs. Module

```text
Resource → a single infrastructure object
Module   → a reusable group of Terraform configuration, potentially containing many resources
```

```hcl
resource "aws_instance" "web" {}

module "application" {
  source = "./modules/application"
}
```

**Design principle I hold my teams to:** a module should represent one coherent unit of infrastructure with a clean input/output contract — not just "a folder I put some resources in." If a module's variable list has grown past 15–20 inputs, that's usually a sign it's doing too much and should be split.

---

# Part VII — count, for_each, and Dynamic Blocks

## 40. count

`count` creates multiple instances of a resource based on a number.

```hcl
resource "aws_instance" "web" {
  count = 3

  ami           = "ami-123456"
  instance_type = "t3.micro"
}
```

Resources become:

```text
aws_instance.web[0]
aws_instance.web[1]
aws_instance.web[2]
```

Use `count` when instances are naturally represented by a numeric quantity and don't have individually meaningful identities.

## 41. for_each

`for_each` creates instances from a map or set — each with a stable, meaningful key.

```hcl
resource "aws_instance" "web" {
  for_each = toset(["web", "api", "worker"])

  ami           = "ami-123456"
  instance_type = "t3.micro"

  tags = {
    Name = each.key
  }
}
```

Resources are addressed by key:

```text
aws_instance.web["web"]
aws_instance.web["api"]
aws_instance.web["worker"]
```

## 42. count vs. for_each — the Rule and the War Story

```text
count      → numeric/index-based    → [0], [1], [2]
for_each   → key-based, named       → ["web"], ["api"], ["worker"]
```

If each instance has a meaningful identity, `for_each` is the better conceptual fit — and, from real experience, it's often the operationally *safer* choice too. Here's why: with `count`, removing or reordering an item in the middle of a source list re-indexes everything after it, and Terraform will plan to destroy and recreate resources that, from a human's perspective, didn't actually change. I've had to explain exactly this in a postmortem — a list reorder in a variables file triggered a cascade of unplanned resource replacements downstream. Switching that pattern to `for_each` made removals and reorders touch only the specific item that actually changed.

## 43. Dynamic Blocks

Dynamic blocks generate repeated nested configuration blocks within a single resource — different from `for_each` on an entire resource, which generates multiple *whole resources*.

```hcl
dynamic "ingress" {
  for_each = var.rules

  content {
    from_port = ingress.value.from_port
    to_port   = ingress.value.to_port
  }
}
```

Think: *dynamic blocks generate repeated nested blocks inside one resource.* `for_each` on a resource generates multiple independent resource instances. Don't conflate the two just because both use `for_each` syntax under the hood — the scope of what's being repeated is completely different.

---

# Part VIII — Dependencies and Lifecycle

## 44. depends_on

Terraform normally builds its dependency graph automatically from references in configuration.

```hcl
resource "aws_instance" "web" {
  subnet_id = aws_subnet.public.id
}
```

Terraform infers:

```text
Subnet → Instance
```

Sometimes a real dependency exists that isn't visible through any attribute reference — an IAM policy attachment that must complete before a role can be assumed, for instance, where nothing in the dependent resource's arguments actually references the policy. In those cases:

```hcl
depends_on = [
  aws_iam_role_policy.example
]
```

## 45. Implicit vs. Explicit Dependencies

**Implicit** — created automatically through attribute references:

```hcl
vpc_id = aws_vpc.main.id
```

**Explicit** — declared manually:

```hcl
depends_on = [
  aws_iam_role_policy.example
]
```

**Exam rule, and my rule for code review:** prefer implicit dependencies wherever Terraform can naturally infer them from your configuration. Reach for `depends_on` only when Terraform genuinely cannot infer the relationship. Overusing `depends_on` is a code smell I flag in every review — it usually means the configuration isn't expressing the actual data relationship between two resources, and it tends to survive refactors badly: someone later removes what looks like a redundant `depends_on`, not realizing it was load-bearing, and breaks the apply order in production.

## 46. lifecycle

Lifecycle meta-arguments control resource behavior around create/update/destroy operations.

```hcl
lifecycle {
  create_before_destroy = true
  prevent_destroy        = true
  ignore_changes          = [tags]
}
```

## 47. create_before_destroy

By default, Terraform may destroy an old resource before creating its replacement when a change forces recreation. With this flag:

```hcl
lifecycle {
  create_before_destroy = true
}
```

Terraform instead attempts:

```text
Create new
     ↓
Replacement available
     ↓
Destroy old
```

This can reduce or eliminate downtime during replacement, where supported by the resource type and provider (not every resource type supports this cleanly — check provider docs, especially for anything with naming uniqueness constraints).

## 48. prevent_destroy

```hcl
lifecycle {
  prevent_destroy = true
}
```

Prevents Terraform from destroying the resource through normal operations — attempting to do so produces a hard error instead of proceeding.

Typical use: a production database, a stateful resource with data that can't be trivially recreated, anything where an accidental `destroy` would be a genuine incident. I put this flag on every production data store I write configuration for, without exception, as a standing team policy — it's cheap insurance against exactly the kind of "wrong workspace" mistake described in §9.

## 49. ignore_changes

```hcl
lifecycle {
  ignore_changes = [
    tags
  ]
}
```

Tells Terraform to ignore changes to the listed attributes when determining whether the resource needs updating — useful when another system (an autoscaler, a config-management tool, a platform-team automation) legitimately manages part of a resource that Terraform also declares.

**Where I've used this for real:** an autoscaling group whose desired capacity is managed by a scaling policy outside Terraform. Without `ignore_changes = [desired_capacity]`, every `plan` would show Terraform wanting to fight the autoscaler back to whatever number was last in configuration — a constant, noisy, false diff.

---

# Part IX — Sensitive Data and Security Posture

## 50. Sensitive Variables

```hcl
variable "database_password" {
  type      = string
  sensitive = true
}
```

Sensitive values are hidden from normal CLI output — `plan` and `apply` won't print them to your terminal or CI logs.

> **Sensitive does not mean encrypted state.** This is, in my experience, the single most operationally dangerous misunderstanding new Terraform users carry. Sensitive values may still exist in plaintext in Terraform state.

## 51. State Security

To restate it directly, because it's worth repeating in its own section:

```text
sensitive  ≠  encrypted
```

A variable flagged `sensitive = true` is hidden from CLI output. Terraform state itself is not automatically encrypted as a consequence of that flag — the value can sit in plaintext inside `terraform.tfstate` regardless. This means:

- Your **state backend** needs encryption at rest (S3 with SSE, GCS with CMEK, etc.)
- Your **state backend access control** needs to be as tight as access to a secrets manager
- `sensitive = true` is a CLI-output UX feature, not a security boundary

**The rule I give every team:** treat your state backend with the same access-control rigor as your actual secrets manager, because functionally, for anything holding a `sensitive` variable, that's exactly what it's become.

## 52. Authentication Patterns

Terraform providers need authentication to communicate with cloud platforms. For AWS, in order of what I actually recommend today:

1. OIDC / workload identity federation for CI (no long-lived credentials at all — my strong default for any new pipeline)
2. IAM roles / instance profiles for anything running on AWS compute already
3. Standard AWS CLI credential chain / SSO for local developer use
4. Environment variables, as a fallback, rotated regularly

Avoid hard-coded credentials in Terraform files under all circumstances — this bears repeating a second time in this guide because it's the single most common real-world security finding I've seen in Terraform audits.

---

# Part X — Workspaces and Terraform Cloud

## 53. Terraform CLI / OSS Workspaces

Used to manage multiple named state instances within the *same* configuration.

```bash
terraform workspace list
terraform workspace show
terraform workspace new dev
terraform workspace select dev
terraform workspace delete dev
```

```text
Same configuration + Different state = CLI workspace
```

I use CLI workspaces sparingly in practice — they're a reasonable fit for genuinely parallel, structurally identical environments (say, ephemeral per-PR preview environments), but for permanent environments like dev/staging/prod I generally prefer entirely separate root module invocations with separate backend state paths. The blast radius of a workspace mix-up (running `apply` in the wrong workspace) is a risk I'd rather design away than manage carefully every time.

## 54. Terraform Cloud Workspaces

Terraform Cloud workspaces are a broader, different concept than CLI workspaces — same word, considerably more scope.

A Terraform Cloud workspace can manage:

- Configuration (via VCS connection or CLI/API-driven runs)
- Variables (including sensitive ones, stored centrally)
- State
- Runs (plan/apply history, approvals)
- Execution settings (remote execution environment)
- Team access (RBAC per workspace)

Do not automatically assume:

```text
Terraform OSS workspace  =  Terraform Cloud workspace
```

They're related in name and in the general idea of "isolated state," but not identical in scope. Read exam questions carefully for context: mentions of runs, teams, or policy controls point to Terraform Cloud; mentions of switching local state instances point to CLI workspaces.

## 55. Terraform Cloud / HCP Terraform, at the Architect Level

HCP Terraform (formerly Terraform Cloud) provides team-oriented capabilities beyond what the open-source CLI offers alone:

- Remote state with built-in locking
- Remote, consistent run execution environments
- Collaboration workflows (VCS-driven plans, PR comments with plan output)
- Access control and team permissions
- Policy-as-code controls (Sentinel/OPA) — guardrails that can block an apply that violates org policy, before it ever reaches infrastructure
- Centralized variable management
- Full run history and audit trail

I reach for a platform like this (or an equivalent — Atlantis and Spacelift are common alternatives layered over a plain S3 backend) the moment more than one team is applying against shared infrastructure. The run history and locking alone prevent an entire category of "who applied what, when, and why did production change" incidents that otherwise eat hours of investigation.

## 56. Terraform Cloud Variables

Terraform Cloud can manage variables separately from local `.tf` and `.tfvars` files, with sensitive values stored centrally rather than hardcoded anywhere in the repo. This avoids secrets in source control entirely.

> Sensitive variables in Terraform Cloud should not be confused with state encryption — the same distinction from §50–51 still applies. Centralized secret storage is a meaningfully better security posture than plaintext `.tfvars`, but it doesn't retroactively make everything in your state file safe by itself.

---

# Part XI — Variables, in Full

## 57. Variables

Input variables let values be passed into configuration from outside.

```hcl
variable "instance_type" {
  type    = string
  default = "t3.micro"
}
```

```hcl
resource "aws_instance" "web" {
  instance_type = var.instance_type
}
```

## 58. Variable Values and Precedence

Common sources, from lowest to highest precedence:

- Default values (defined in the `variable` block itself)
- `terraform.tfvars`
- `*.auto.tfvars` (loaded automatically, alphabetically)
- Environment variables (`TF_VAR_*`)
- Command-line flags (`-var`, `-var-file`) — highest precedence

More specific assignments override less specific ones. For exam questions describing a value set in multiple places, don't guess — trace exactly where each candidate value comes from and apply this ordering carefully; that's almost always the entire trick of the question.

## 59. Environment Variables

Terraform recognizes the `TF_VAR_<name>` convention:

```bash
export TF_VAR_region="ap-south-1"
```

This supplies the value for:

```hcl
variable "region" {
  type = string
}
```

## 60. Terraform's Own Environment Variables

Beyond `TF_VAR_*`, Terraform itself reads operational environment variables such as `TF_LOG`:

```bash
export TF_LOG=DEBUG
```

## 61. Terraform Logging

Supported logging levels:

```text
TRACE
DEBUG
INFO
WARN
ERROR
```

`TF_LOG=DEBUG` (or `TRACE` for maximum verbosity) is the first thing I reach for when a provider is behaving unexpectedly and the plan output alone doesn't explain why — it shows the actual API requests and responses Terraform is making under the hood.

## 62. terraform.tfvars and *.auto.tfvars

```hcl
instance_type = "t3.micro"
region        = "ap-south-1"
```

Terraform automatically loads `terraform.tfvars` and any file matching `*.auto.tfvars`, without needing an explicit `-var-file` flag.

## 63. .tfvars vs. .tf

```text
.tf      → Terraform configuration (resources, variables, providers, etc.)
.tfvars  → variable values only
```

```hcl
# variables.tf
variable "region" {
  type = string
}
```

```hcl
# terraform.tfvars
region = "ap-south-1"
```

**Pattern I enforce on every team:** one `.tfvars` (or `*.auto.tfvars`) per environment, never hand-editing shared variable defaults for a one-off deploy. It keeps environment differences explicit, diffable, and reviewable in a pull request, rather than living in someone's head or terminal history.

---

# Part XII — Everyday CLI Tooling

## 64. terraform fmt

```bash
terraform fmt
terraform fmt -recursive
```

Canonicalizes formatting across a configuration tree. I run this as a mandatory pre-commit hook and a CI gate on every repo — it eliminates an entire category of noisy, whitespace-only PR diffs and keeps code review focused on substance.

## 65. terraform show

```bash
terraform show
terraform show tfplan
```

Human-readable dump of the current state, or of a saved plan file.

## 66. terraform console

```bash
terraform console
```

An interactive REPL for testing Terraform expressions and functions against your current configuration and state — genuinely one of my most-used debugging tools when I'm not sure exactly what a function call or interpolation will evaluate to.

```text
> 1 + 2
3
```

## 67. terraform providers

```bash
terraform providers
```

Shows the full tree of provider requirements across the root module and every child module it references — useful for auditing exactly what's being pulled in before you trust a module.

## 68. terraform graph

```bash
terraform graph
```

Generates a dependency graph representing relationships between resources (often piped into Graphviz for visualization).

> The important concept, worth stating plainly: Terraform builds a dependency graph to determine the correct order of operations — creation order, update order, and (in reverse) destruction order.

## 69. Resource Addressing, in Full

```text
aws_instance.web                    simple resource
aws_instance.web[0]                 count-based instance
aws_instance.web["api"]             for_each-based instance
module.network                      a module
module.network.aws_vpc.main         a resource nested inside a module
```

Understanding addressing precisely matters for:

```bash
terraform state show <address>
terraform state rm <address>
terraform apply -replace="<address>"
terraform import <address> <id>
```

Get the address wrong on any of these and you either target the wrong object or get a clean error — either way, address syntax is worth being fluent in cold, not something to reconstruct under exam pressure.

---

# Part XIII — Configuration vs. State vs. Reality, Revisited

## 70. The Three Things Restated

## Configuration

What you want:

```text
Desired state
```

## State

What Terraform currently knows about managed infrastructure:

```text
Recorded infrastructure state
```

## Real Infrastructure

What actually exists in AWS, Azure, GCP, or wherever:

```text
        Configuration
             ↓
        Desired state
             ↓
          Terraform
             ↕
           State
             ↕
    Real Infrastructure
```

## 71. Three Questions to Ask on Every Hard Question

Many Terraform questions — and, frankly, many real production debugging sessions — become far easier when you explicitly ask, in order:

**What does the configuration say?**

```text
Desired state
```

**What does state say?**

```text
Terraform's recorded knowledge
```

**What does the provider/API say?**

```text
Real infrastructure
```

Terraform compares these three to determine every action it takes. I still run through this three-question checklist out loud in real incidents — it's not just an exam mnemonic, it's genuinely how I debug a confusing `plan` output at 2am.

## 72. Resource vs. Data Source, Restated

| Concept | Purpose |
|---|---|
| Resource | Create/manage infrastructure |
| Data source | Read existing information |

```hcl
resource "aws_vpc" "main" {}   # creates/manages a VPC

data "aws_vpc" "existing" {}   # reads an existing VPC
```

## 73. Variable vs. Local vs. Output, Restated

| Concept | Purpose |
|---|---|
| Variable | Input |
| Local | Internal reusable value |
| Output | Expose result |

```text
Variable = outside → Terraform
Local    = inside Terraform
Output   = Terraform → outside
```

## 74. count vs. for_each, Final Revision

```text
count     → numeric instances    → [0], [1], [2]
for_each  → named/keyed instances → ["web"], ["api"], ["db"]
```

## 75. Lifecycle, Quick Revision

```text
create_before_destroy  → new first, old later
prevent_destroy        → protect from destruction
ignore_changes          → ignore selected attribute changes
```

## 76. Backend vs. Provider, Restated

**Provider** — communicates with APIs:

```text
Terraform → AWS Provider → AWS API
```

**Backend** — stores Terraform state:

```text
Terraform → Backend → State
```

```text
Provider = Infrastructure API
Backend  = State storage
```

## 77. Provider Lock File vs. State File, Restated

**`.terraform.lock.hcl`** — provider versions and checksums.

**`terraform.tfstate`** — Terraform's recorded infrastructure state.

```text
.lock.hcl  → Provider dependency
.tfstate   → Infrastructure state
```

---

# Part XIV — Project Layout and File Conventions

## 78. Terraform Files — Quick Revision

Typical project:

```text
terraform/
├── main.tf
├── variables.tf
├── outputs.tf
├── providers.tf
├── terraform.tf
├── terraform.tfvars
├── .terraform.lock.hcl
└── terraform.tfstate
```

Not every file here is mandatory — Terraform simply loads all `.tf` files present in the working directory. The specific split (`main.tf` vs. `variables.tf` vs. `outputs.tf`) is a team convention, and a good one; I'd flag a PR that dumped everything into a single 2,000-line `main.tf` the same way I'd flag a single 2,000-line function in application code.

---

# Part XV — Modules, What to Actually Remember

## 79. Modules — What to Remember

- Root module vs. child module
- Module source (local path, registry, git, etc.)
- Module version pinning
- Input variables
- Outputs
- Module Registry
- Local modules vs. remote modules

Above all:

```text
Parent → Child = Variables
Child → Parent = Outputs
```

## 80. Providers — What to Remember

- Provider block and aliasing
- `required_providers`
- Provider source
- Provider version constraints (`~>` and friends)
- Authentication mechanisms
- Provider plugins and how `init` fetches them
- `.terraform.lock.hcl`

## 81. State — What to Remember

- Local state vs. remote state
- State locking
- Backends
- Sensitive information in state (and its limits)
- State commands (`list`, `show`, `rm`)
- Drift
- Import
- General state manipulation and hygiene

State is, in my direct experience running production Terraform, the single highest-value topic for both the exam and real engineering competence. Get state wrong and everything downstream — every plan, every apply, every teammate's confidence in what's actually running — gets shaky.

---

# Part XVI — Full CLI Cheat Sheet

```bash
terraform init                        # initialize working directory
terraform init -upgrade               # upgrade provider/module dependencies
terraform validate                    # validate configuration
terraform fmt                         # format configuration
terraform fmt -recursive              # format recursively across subdirectories
terraform plan                        # preview changes
terraform plan -out=tfplan            # save plan
terraform plan -destroy               # preview destruction
terraform apply                       # apply changes
terraform apply tfplan                # apply a saved plan
terraform apply -auto-approve         # apply without interactive confirmation
terraform apply -refresh-only         # sync state to real infra, no config-driven changes
terraform apply -replace="<address>"  # force replacement of one resource
terraform destroy                     # destroy managed infrastructure
terraform output                      # show outputs
terraform output <name>               # show a specific output
terraform show                        # show state/plan information
terraform show tfplan                 # inspect a saved plan file
terraform state list                  # list state resources
terraform state show <address>        # show a resource's recorded state
terraform state rm <address>          # remove a resource from state (does not destroy it)
terraform import <address> <id>       # import existing infrastructure
terraform workspace list              # list CLI workspaces
terraform workspace show              # show current workspace
terraform workspace new <name>        # create a workspace
terraform workspace select <name>     # switch workspace
terraform workspace delete <name>     # delete a workspace
terraform console                     # interactive expression REPL
terraform providers                   # inspect provider requirements
terraform graph                       # generate dependency graph
```

## 82. The Most Important Terraform Command Differences

| Command | Main Purpose |
|---|---|
| `terraform init` | Initialize Terraform |
| `terraform init -upgrade` | Upgrade dependencies |
| `terraform validate` | Validate configuration |
| `terraform fmt` | Format configuration |
| `terraform plan` | Preview changes |
| `terraform plan -out` | Save plan |
| `terraform plan -destroy` | Preview destruction |
| `terraform apply` | Apply changes |
| `terraform apply -refresh-only` | Update state from remote infrastructure |
| `terraform apply -replace` | Replace selected resource |
| `terraform destroy` | Destroy infrastructure |
| `terraform state list` | List state resources |
| `terraform state show` | Show state resource |
| `terraform state rm` | Remove object from state |
| `terraform import` | Import existing infrastructure |
| `terraform output` | Display outputs |
| `terraform show` | Display state/plan |
| `terraform console` | Test expressions |
| `terraform providers` | Show provider requirements |
| `terraform graph` | Show dependency graph |

---

# Part XVII — The "Do Not Confuse These" List

If you remember nothing else before walking into the exam, revise this section last, out loud, until every pairing is instant.

```text
required_version            ≠  required_providers
resource                    ≠  data source
variable                    ≠  local
variable                    ≠  output
count                       ≠  for_each
provider                    ≠  backend
state                       ≠  configuration
terraform state rm          ≠  terraform destroy
terraform import            ≠  generating a full resource config
terraform plan               ≠  terraform apply
terraform plan -destroy     ≠  terraform destroy
apply -refresh-only          ≠  a normal apply
sensitive = true             ≠  encrypted state
Terraform OSS workspace      ≠  Terraform Cloud workspace
.terraform.lock.hcl          ≠  terraform.tfstate
taint / -replace              ≠  a resource being deleted permanently from config
dynamic block                ≠  for_each on a whole resource
```

Every single one of these has caused a real production mistake somewhere, in my experience or on a team I've worked with directly — this isn't an abstract list of trivia, it's a list of postmortem root causes with the specifics filed off.

---

# Part XVIII — Common Exam Traps, Worked as Q&A

## 83. Trap: Sensitive

**Question:** Does `sensitive = true` encrypt a value in Terraform state?

**Answer:** No. It primarily controls display suppression of the value in Terraform's CLI output. The state backend still needs its own protection (encryption at rest, access control).

## 84. Trap: Import

**Question:** Does `terraform import` generate the complete Terraform configuration for the imported resource?

**Answer:** No. The key concept: import connects existing infrastructure into Terraform *state*. You still need to write (or carefully generate and review) configuration that accurately describes the resource.

## 85. Trap: state rm

**Question:** What happens when `terraform state rm` is executed?

**Answer:** Terraform removes the resource from its state. It does not destroy the remote object — the real infrastructure is untouched and keeps running.

## 86. Trap: Refresh-Only

**Question:** Which command updates Terraform state to reflect remote changes without making normal configuration-driven changes?

**Answer:**

```bash
terraform apply -refresh-only
```

## 87. Trap: Version Constraints

**Question:** What's the difference between `required_version` and `required_providers`, and what does `~>` mean?

**Answer:** `required_version` constrains the Terraform CLI. `required_providers` constrains provider plugins. `~>` is the pessimistic constraint operator — it allows upgrades within the rightmost specified version segment only.

## 88. Trap: Workspaces

**Question:** A question mentions "Terraform CLI workspace" — what should you think of?

**Answer:**

```bash
terraform workspace ...
```

— multiple named state instances for a single configuration.

**Question:** A question mentions "Terraform Cloud workspace" — what should you think of?

**Answer:** The broader concept: remote workspace, runs, centrally managed variables, state, and team collaboration. Don't automatically treat the two as identical just because they share a name.

## 89. Trap: Module Communication

**Question:** How do a parent and child module exchange data?

**Answer, exactly:**

```text
Parent → Child = Input Variable
Child → Parent = Output
```

This simple diagram answers the majority of module-related questions on the exam.

## 90. Trap: State Locking

**Question:** What prevents concurrent Terraform operations from modifying shared state simultaneously?

**Answer:** State locking.

**Question:** What records provider versions and checksums?

**Answer:** `.terraform.lock.hcl`.

Do not mix these two up — they're both called "locking" but they lock entirely different things.

## 91. Trap: Backend

**Question:** Where is Terraform state stored?

**Answer:** The backend.

**Question:** How does Terraform communicate with AWS to create resources?

**Answer:** The provider.

## 92. Trap: Data Sources

**Question:** A question describes retrieving information about an existing resource without managing it.

**Answer:** `data` block.

**Question:** A question describes creating or managing a resource.

**Answer:** `resource` block.

## 93. Trap: count and for_each

**Question:** Resources are described as `0`, `1`, `2` — numeric, positional.

**Answer:** `count`.

**Question:** Resources are described as `web`, `api`, `worker` — named, meaningful identities.

**Answer:** `for_each`.

## 94. Trap: Lifecycle

```text
create_before_destroy  → new first, old later
prevent_destroy         → do not allow destruction
ignore_changes           → ignore selected changes
```

---

# Part XIX — How I'd Actually Prepare

## 95. My Own Preparation Method

My preparation followed four steps, and it's the same method I hand to anyone I'm mentoring toward this exam:

1. Understand the concepts — not commands in isolation, the model in §1 and §70–71.
2. Get hands-on. Read-only understanding of Terraform is thin understanding; run `init`, `plan`, `apply`, `destroy` against real (disposable, sandboxed) infrastructure until the workflow is muscle memory.
3. Work through practice tests.
4. Write notes only for what you got wrong or found genuinely confusing — not a re-transcription of the whole syllabus.

After every practice question missed, don't just note the correct letter. Write the underlying concept in your own words. For example, instead of:

```text
Answer = B
```

write:

```text
terraform state rm removes a resource from Terraform state.
It does not destroy the real infrastructure.
```

This is the single highest-leverage habit in exam prep. A memorized letter answer dies the moment the question is reworded. A written-out concept survives any rewording, because you now understand *why* B was correct, not just *that* it was.

## 96. Practice-Test Strategy

The biggest lesson from working through many practice tests: **do not repeatedly memorize the same practice questions.** The exam question bank is large and the real exam will rephrase concepts in ways rote memorization won't survive.

Instead, after each test:

```text
Take test
   ↓
Review incorrect answers
   ↓
Identify the underlying concept
   ↓
Understand why the right answer is right (and why the others are wrong)
   ↓
Write a short note in your own words
   ↓
Move on
```

## 97. What My Notes Actually Focused On

Notes should focus on mistakes and genuinely confusing concepts — not become a second copy of the documentation. The highest-value areas, by category:

**State**
```text
state, remote state, locking, backends, state commands, import, drift, refresh-only
```

**Providers**
```text
required_providers, provider versions, provider source, lock file, authentication
```

**Variables**
```text
input variables, variable precedence, TF_VAR_, sensitive
```

**Modules**
```text
root module, child module, variables, outputs, module versions
```

**Meta-Arguments**
```text
count, for_each, depends_on, lifecycle
```

**CLI**
```text
init, plan, apply, destroy, import, state, workspace, refresh-only, replace
```

**Terraform Cloud**
```text
workspaces, remote state, runs, variables, collaboration
```

## 98. One-Page Mental Model of Terraform

Before the exam, visualize the whole system like this:

```text
                    TERRAFORM
                        |
          +-------------+-------------+
          |             |             |
       Providers      Modules       Backend
          |             |             |
       APIs         Reusable        State
          |          config           |
          |             |             |
          +-------------+-------------+
                        |
                     State
                        |
                Dependency Graph
                        |
                   Plan / Apply
                        |
                Real Infrastructure
```

And the surrounding conceptual vocabulary:

```text
Variables    → Inputs
Locals       → Internal values
Outputs      → Results
Resources    → Managed infrastructure
Data Sources → Read existing information
State        → Terraform's recorded knowledge
Backend      → State storage
Provider     → API communication
Module       → Reusable configuration
Workspace    → Separate execution/state context
```

## 99. Final 30 Things I Would Memorize, Verbatim

```text
1. Terraform is declarative IaC.
2. terraform init initializes the working directory.
3. terraform validate validates configuration.
4. terraform fmt formats Terraform code.
5. terraform plan previews changes.
6. terraform apply executes changes.
7. terraform destroy destroys managed infrastructure.
8. terraform plan -destroy previews destruction.
9. terraform plan -out saves an execution plan.
10. terraform apply -refresh-only updates state from remote infrastructure.
11. -replace forces resource replacement.
12. Resource manages infrastructure.
13. Data source reads existing information.
14. Variable is an input.
15. Local is an internal reusable value.
16. Output exposes a result.
17. Parent → Child uses variables.
18. Child → Parent uses outputs.
19. count uses numeric indexes.
20. for_each uses keys.
21. depends_on creates explicit dependencies.
22. lifecycle controls resource behavior.
23. Backend stores state.
24. Provider communicates with APIs.
25. .terraform.lock.hcl records provider selections/checksums.
26. terraform.tfstate stores infrastructure state.
27. terraform state rm does not destroy infrastructure.
28. terraform import imports existing infrastructure into state.
29. sensitive does not automatically encrypt state.
30. required_version is for Terraform; required_providers is for providers.
```

## 100. Last-Day Preparation Strategy

If your exam is tomorrow, do not try to learn Terraform from scratch. Follow this order.

**First revision — the core mental model**
```text
State
↓
Providers
↓
Variables
↓
Modules
↓
count / for_each
↓
lifecycle
```

**Second revision — the tooling layer**
```text
CLI commands
↓
Workspaces
↓
Import
↓
Refresh-only
↓
State commands
↓
Version constraints
```

**Final revision — read only these two sections**
```text
Part XVII — Do Not Confuse These
Part XIX §99 — Final 30 Things I Would Memorize
```

Then solve one final practice test, review only what you missed, and stop. Cramming further than that produces diminishing returns and adds noise right before the exam.

## 101. How to Know You Are Ready

Don't judge readiness by a single practice-test score. A far better signal is whether you can explain concepts cold, without looking at the answer key. Try these out loud:

**Q: What does `terraform state rm` do?**
A: It removes the resource from Terraform state. It does not destroy the real infrastructure.

**Q: How does a parent module pass information to a child?**
A: Through the child module's input variables.

**Q: How does a child module expose information to its parent?**
A: Through outputs.

**Q: What's the difference between `required_version` and `required_providers`?**
A: `required_version` constrains Terraform CLI versions. `required_providers` defines provider dependencies and their versions.

**Q: What prevents concurrent Terraform operations from modifying shared state?**
A: State locking.

**Q: Does `sensitive = true` protect a value inside the state file itself?**
A: No — it only suppresses display in CLI output; the state backend needs its own protection.

If you can answer all six without hesitating, in your own words, you're ready.

## 102. Final Exam Mindset

The Terraform Associate exam is not simply a test of whether you've memorized commands. It tests whether you understand **how Terraform actually works** underneath those commands.

When you see a question, first identify which conceptual area it belongs to:

```text
State?
Provider?
Module?
Variable?
CLI?
Workspace?
Lifecycle?
Resource?
Data source?
Version constraint?
```

Then eliminate answers that belong to a different concept entirely — most wrong answers on this exam aren't wrong because they're nonsensical, they're wrong because they correctly describe a *different* Terraform concept than the one being asked about. Recognizing that pattern is most of the battle.

```text
Question about state           → Think state, backend, locking, import, drift.
Question about provider version → Think required_providers / lock file.
Question about Terraform CLI version → Think required_version.
Question about existing infrastructure → Think import / data source, depending on context.
Question about state removal    → Think terraform state rm.
Question about destruction      → Think destroy / plan -destroy / lifecycle.
```

---

# Closing

If I had to reduce this entire guide into one sentence:

> **Don't memorize the answer — understand why the other answers are wrong.**

That was the biggest difference, in my own preparation, between simply grinding practice tests and actually becoming comfortable with Terraform as a working tool. The practice tests are good for identifying weak areas; the real learning happens when you convert each mistake into a small, precise conceptual note in your own words.

Once state, providers, modules, variables, workspaces, lifecycle, version constraints, and the CLI become genuinely clear — not memorized, *clear* — most apparently difficult exam questions collapse into straightforward elimination exercises.

But the certification is a checkpoint, not the destination. The real test comes later — when your state file is locked because someone's laptop died mid-apply, when a `for_each`-to-`count` refactor threatens to replace half your fleet, when a teammate asks you why `sensitive = true` didn't actually protect a credential sitting in state. Understand the model in this guide well enough to reason through those moments calmly, and both the exam and the job that follows it get a lot easier.

---

## Quick Reference Card

```text
┌───────────────────────────────────────────────────────────┐
│                   TERRAFORM CHEAT SHEET                   │
├───────────────────────────────────────────────────────────┤
│ Terraform → Declarative IaC                                │
│ Provider  → Talks to API                                   │
│ Backend   → Stores state                                   │
│ State     → Terraform's recorded infrastructure            │
│ Resource  → Manages infrastructure                         │
│ Data      → Reads existing information                     │
│ Variable  → Input                                           │
│ Local     → Internal value                                  │
│ Output    → Exposes value                                   │
│ Module    → Reusable configuration                          │
├───────────────────────────────────────────────────────────┤
│ Parent → Child = Variables                                  │
│ Child → Parent = Outputs                                    │
├───────────────────────────────────────────────────────────┤
│ count     → Numeric indexes                                 │
│ for_each  → Keys                                             │
│ depends_on → Explicit dependency                             │
├───────────────────────────────────────────────────────────┤
│ required_version    → Terraform version                     │
│ required_providers  → Provider requirements                 │
│ .terraform.lock.hcl → Provider selections/checksums          │
│ terraform.tfstate   → Infrastructure state                   │
├───────────────────────────────────────────────────────────┤
│ plan            → Preview                                    │
│ apply           → Execute                                    │
│ plan -destroy   → Preview destruction                        │
│ destroy         → Destroy                                    │
│ state rm        → Remove from state (not the real resource)  │
│ import          → Existing infrastructure → state            │
│ refresh-only    → Update state from remote                   │
│ -replace        → Force replacement                          │
└───────────────────────────────────────────────────────────┘
```

**Good luck — and don't underestimate the small differences between similar Terraform concepts. Those are exactly where both the exam and production try to catch you.**

