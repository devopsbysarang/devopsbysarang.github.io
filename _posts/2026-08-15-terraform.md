---
layout: single
title: "Terraform Associate Certification — Complete Exam Preparation Guide"
date: 2026-08-15 20:00:00 +0530
category: terraform
author: Sarang Deshmukh
featured-image: /assets/images/terraform-certification.png
permalink: /automation/terraform-associate-certification/
learning-challenge: true
---

This article is a complete Terraform Associate certification preparation guide based on my own preparation journey, personal notes, hands-on practice, and **multiple practice tests**.

I cleared the HashiCorp Terraform Associate certification after consistently performing well on practice exams and focusing heavily on understanding the concepts behind each question.

Instead of memorizing questions, I focused on understanding the concepts behind them. This guide consolidates the topics that repeatedly appeared during my preparation and the areas where candidates most commonly confuse similar Terraform concepts.

> **The goal of this guide is simple: understand the concepts, learn the exam traps, and be able to answer the question even when the wording changes.**

---

# 1. How I Prepared

My preparation followed four steps:

1. Understand Terraform concepts.
2. Practice Terraform hands-on.
3. Solve practice tests.
4. Create notes only for concepts I got wrong or found confusing.

I completed **multiple practice tests**.

After every test, I did not simply note the correct answer. Instead, I identified the underlying concept.

For example, instead of writing:

```text
Answer = B
```

I wrote:

```text
terraform state rm removes a resource from Terraform state.
It does not destroy the real infrastructure.
```

This approach made the knowledge reusable even when the question wording changed.

---

# 2. Terraform in One Sentence

Terraform is a **declarative Infrastructure as Code (IaC)** tool that defines, provisions, and manages infrastructure using configuration files.

Instead of manually creating resources through a cloud console, Terraform lets you describe the desired infrastructure and calculates what needs to be created, changed, or destroyed.

Example:

```hcl
resource "aws_instance" "web" {
  ami           = "ami-xxxxxxxx"
  instance_type = "t3.micro"
}
```

---

# 3. Declarative vs Imperative

## Imperative

You describe **how** to perform the task.

Example:

```text
Create VPC
Create subnet
Create route table
Attach route table
Create EC2 instance
```

## Declarative

You describe **what the final infrastructure should look like**.

Terraform determines how to achieve that desired state.

This is one of the fundamental concepts behind Infrastructure as Code.

---

# 4. Terraform Core Workflow

The standard Terraform workflow is:

```text
terraform init
      ↓
terraform validate
      ↓
terraform plan
      ↓
terraform apply
```

When infrastructure is no longer needed:

```text
terraform destroy
```

---

# 5. terraform init

Initializes a Terraform working directory.

It performs tasks such as:

- Downloading providers
- Initializing modules
- Configuring the backend
- Preparing the working directory

```bash
terraform init
```

If provider or module requirements change:

```bash
terraform init -upgrade
```

**Exam point:** `terraform init` does not create infrastructure.

---

# 6. terraform validate

Checks whether the Terraform configuration is syntactically valid and internally consistent.

```bash
terraform validate
```

Think:

> Is my configuration valid?

It does not modify infrastructure.

---

# 7. terraform plan

Shows what Terraform intends to do.

```bash
terraform plan
```

Typical symbols:

| Symbol | Meaning |
|---|---|
| `+` | Create |
| `~` | Modify |
| `-` | Destroy |
| `-/+` | Replace |

Save a plan:

```bash
terraform plan -out=tfplan
```

Apply the saved plan:

```bash
terraform apply tfplan
```

---

# 8. terraform apply

Applies the planned changes.

```bash
terraform apply
```

Terraform:

1. Evaluates the configuration.
2. Compares desired state with current state.
3. Creates a plan.
4. Applies approved changes.
5. Updates the state.

Automatically approve:

```bash
terraform apply -auto-approve
```

---

# 9. terraform destroy

Destroys infrastructure managed by Terraform.

```bash
terraform destroy
```

Preview destruction first:

```bash
terraform plan -destroy
```

Remember:

- `plan -destroy` = preview.
- `destroy` = execute.

---

# 10. Terraform Configuration Files

Terraform configuration files normally use the `.tf` extension.

Typical project:

```text
main.tf
variables.tf
outputs.tf
providers.tf
terraform.tf
```

Terraform loads all `.tf` files in the working directory.

The filenames are mainly for organization.

---

# 11. Providers

Providers allow Terraform to communicate with external APIs.

Examples:

- AWS
- Azure
- Google Cloud
- Kubernetes
- GitHub
- Cloudflare

Example:

```hcl
provider "aws" {
  region = "ap-south-1"
}
```

Think of a provider as the plugin that knows how to communicate with a specific platform.

---

# 12. required_providers

Provider dependencies are defined in the `terraform` block.

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

This specifies:

- Provider name
- Provider source
- Allowed provider versions

---

# 13. required_version vs required_providers

One of the most common exam traps.

## required_version

Controls the **Terraform CLI version**.

```hcl
terraform {
  required_version = ">= 1.5.0"
}
```

## required_providers

Controls provider dependencies.

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

### Remember

| Concept | Controls |
|---|---|
| `required_version` | Terraform CLI |
| `required_providers` | Provider plugins |

---

# 14. Provider Version Constraints

Terraform supports version constraints such as:

```text
>= 1.0
> 1.0
< 2.0
<= 2.0
= 1.5.0
~> 1.5
```

The `~>` operator is the **pessimistic constraint operator**.

For example:

```text
~> 1.5
```

allows versions within the compatible `1.x` range starting at `1.5`, but not `2.0`.

A more specific constraint:

```text
~> 1.5.2
```

allows compatible patch releases such as:

```text
1.5.3
1.5.4
```

but not:

```text
1.6.0
```

---

# 15. .terraform.lock.hcl

Terraform uses `.terraform.lock.hcl` to record selected provider versions and checksums.

Benefits:

- Consistent provider versions
- Repeatable deployments
- Provider dependency integrity

It should generally be committed to version control.

Do not confuse this with Terraform state.

```text
.terraform.lock.hcl
        ↓
Provider dependency information

terraform.tfstate
        ↓
Infrastructure state
```

---

# 16. Resources

Resources represent infrastructure Terraform manages.

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

Reference:

```text
aws_instance.web
```

---

# 17. Data Sources

Data sources read existing information.

```hcl
data "aws_vpc" "default" {
  default = true
}
```

Difference:

| Resource | Data Source |
|---|---|
| Creates/manages infrastructure | Reads existing information |

This distinction appears frequently in the exam.

---

# 18. Variables

Input variables allow values to be passed into Terraform configurations.

```hcl
variable "instance_type" {
  type    = string
  default = "t3.micro"
}
```

Use it:

```hcl
resource "aws_instance" "web" {
  instance_type = var.instance_type
}
```

---

# 19. Variable Values and Precedence

Common variable sources include:

- Default values
- `terraform.tfvars`
- `*.auto.tfvars`
- Environment variables
- Command-line variables

More specific variable assignments override lower-precedence values.

For exam questions, carefully identify **where the value is coming from** before choosing an answer.

---

# 20. Environment Variables

Terraform recognizes:

```text
TF_VAR_<variable_name>
```

Example:

```bash
export TF_VAR_region="ap-south-1"
```

This can provide the value for:

```hcl
variable "region" {
  type = string
}
```

---

# 21. Sensitive Variables

```hcl
variable "database_password" {
  type      = string
  sensitive = true
}
```

Sensitive values are hidden from normal CLI output.

However:

> **Sensitive does not mean encrypted state.**

Sensitive values may still exist in Terraform state.

This is one of the most important exam concepts.

---

# 22. Terraform State

Terraform state tracks the relationship between configuration and real infrastructure.

Conceptually:

```text
Configuration
     ↓
Terraform
     ↓
State
     ↓
Real Infrastructure
```

State helps Terraform understand:

- What resources it manages
- Resource IDs
- Current attributes
- Dependencies

---

# 23. terraform.tfstate

The default local state file is:

```text
terraform.tfstate
```

It may contain:

- Resource IDs
- Attributes
- Dependency information
- Sensitive values

State should be protected appropriately.

> Never treat Terraform state as harmless text.

---

# 24. Remote State

Instead of local state, teams often use remote backends.

Benefits include:

- Centralized state
- Collaboration
- State locking
- Better access control
- Easier team workflows

Examples include:

- Amazon S3
- Azure Storage
- Google Cloud Storage
- Terraform Cloud
- Consul

---

# 25. State Locking

State locking prevents multiple Terraform operations from modifying shared state simultaneously.

Conceptually:

```text
Developer A
    ↓
Lock state
    ↓
Run Terraform
    ↓
Unlock
```

While the lock is held, another operation cannot safely modify the same state.

### Important distinction

State locking is completely different from provider version locking.

```text
State locking
    ↓
Protects shared Terraform state

.terraform.lock.hcl
    ↓
Locks provider dependency selections
```

---

# 26. S3 Backend and Locking

For AWS-based Terraform setups, S3 is commonly used for remote state.

Older Terraform exam material may also refer to DynamoDB for state locking with S3.

The important concept is:

```text
S3
 ↓
Remote state

DynamoDB
 ↓
State locking
```

Be careful with questions that distinguish **state storage** from **state locking**.

---

# 27. Backend Credentials

Do not hard-code credentials inside Terraform configuration.

Bad practice:

```hcl
backend "s3" {
  access_key = "AKIA..."
  secret_key = "secret"
}
```

Prefer secure authentication mechanisms such as:

- Environment variables
- AWS credential configuration
- IAM roles
- Workload identity mechanisms

General rule:

> **Never commit cloud credentials to source control.**

---

# 28. terraform state Commands

List resources:

```bash
terraform state list
```

Show details:

```bash
terraform state show aws_instance.web
```

Remove from state:

```bash
terraform state rm aws_instance.web
```

### Critical difference

`terraform state rm` does **not** destroy the real infrastructure.

It removes Terraform's management record for that object.

---

# 29. Terraform Import

Import existing infrastructure into Terraform state.

Conceptually:

```text
Existing EC2
     ↓
terraform import
     ↓
Terraform State
```

Import does not automatically create a complete Terraform configuration.

You still need suitable configuration to manage the resource properly.

---

# 30. Import — Exam Trap

If an EC2 instance already exists:

```text
AWS EC2
   ↓
terraform import
   ↓
Terraform state
```

Do not assume:

```text
AWS EC2
   ↓
terraform import
   ↓
Perfect .tf configuration automatically generated
```

The key concept is:

> **Import connects existing infrastructure to Terraform state.**

---

# 31. Drift

Suppose Terraform created:

```text
instance_type = t3.micro
```

Someone manually changes it in AWS to:

```text
instance_type = t3.small
```

Terraform configuration still says:

```text
t3.micro
```

This difference is called **drift**.

Terraform can compare:

```text
Configuration
State
Real infrastructure
```

to determine what has changed.

---

# 32. terraform apply -refresh-only

Use:

```bash
terraform apply -refresh-only
```

to update Terraform state based on the current remote infrastructure without applying normal configuration-driven changes.

This is useful when dealing with infrastructure drift.

Do not confuse it with:

```bash
terraform apply
```

which can make infrastructure changes.

---

# 33. terraform taint and -replace

Older Terraform workflows used:

```bash
terraform taint
```

to mark a resource for replacement.

Modern Terraform uses:

```bash
terraform apply -replace="aws_instance.web"
```

or:

```bash
terraform plan -replace="aws_instance.web"
```

Think:

```text
-replace
   ↓
Force replacement of resource
```

---

# 34. Outputs

Outputs expose useful information.

```hcl
output "instance_ip" {
  value = aws_instance.web.public_ip
}
```

Display them:

```bash
terraform output
```

Specific output:

```bash
terraform output instance_ip
```

---

# 35. Variables vs Outputs

Remember:

```text
Variable
    ↓
Input
```

```text
Output
    ↓
Expose result
```

For modules:

```text
Parent
   ↓
Input Variable
   ↓
Child Module
```

and:

```text
Child Module
   ↓
Output
   ↓
Parent
```

### Memorize this

```text
Parent → Child = Input Variables

Child → Parent = Outputs
```

---

# 36. Locals

Locals define reusable expressions within a module.

```hcl
locals {
  environment = "production"

  common_tags = {
    Environment = "production"
    ManagedBy   = "Terraform"
  }
}
```

Reference:

```text
local.environment
```

Difference:

| Variable | Local |
|---|---|
| Input from outside | Internal reusable value |

---

# 37. Modules

Modules allow Terraform configurations to be organized and reused.

A module can contain:

- Resources
- Variables
- Outputs
- Providers
- Other Terraform configuration

Example:

```hcl
module "network" {
  source = "./modules/network"
}
```

The configuration calling the module is the **parent/root module**.

The referenced module is the **child module**.

---

# 38. Root Module vs Child Module

Example:

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

The project configuration is the root module.

The network module is a child module.

---

# 39. Passing Values to Modules

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

Direction:

```text
Parent → Child
       ↓
Input Variable
```

---

# 40. Returning Values from Modules

Child:

```hcl
output "vpc_id" {
  value = aws_vpc.main.id
}
```

Parent:

```text
module.network.vpc_id
```

Direction:

```text
Child → Parent
       ↓
Output
```

---

# 41. Module Versions

For registry modules, specifying a version is strongly recommended for predictable deployments.

Example:

```hcl
module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "x.x.x"
}
```

Do not confuse recommended best practices with mandatory Terraform syntax requirements.

---

# 42. count

`count` creates multiple instances based on a number.

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

Use `count` when resources are naturally represented by a numeric quantity.

---

# 43. for_each

`for_each` creates instances from a map or set.

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

Resources are addressed using keys:

```text
aws_instance.web["web"]
aws_instance.web["api"]
aws_instance.web["worker"]
```

---

# 44. count vs for_each

Remember:

```text
count
  ↓
number/index
  ↓
[0], [1], [2]
```

```text
for_each
  ↓
keys / map / set
  ↓
["web"], ["api"], ["worker"]
```

If each instance has a meaningful identity, `for_each` is usually the better conceptual fit.

---

# 45. depends_on

Terraform normally builds a dependency graph automatically when one resource references another.

Example:

```hcl
resource "aws_instance" "web" {
  subnet_id = aws_subnet.public.id
}
```

Terraform understands:

```text
Subnet
  ↓
Instance
```

Sometimes the dependency is not directly visible.

Then:

```hcl
depends_on = [
  aws_iam_role_policy.example
]
```

can explicitly specify it.

---

# 46. Implicit vs Explicit Dependencies

## Implicit

Created automatically through references.

```hcl
vpc_id = aws_vpc.main.id
```

## Explicit

Defined manually:

```hcl
depends_on = [
  aws_iam_role_policy.example
]
```

Exam rule:

> Prefer implicit dependencies when Terraform can naturally infer them. Use `depends_on` when Terraform cannot infer the dependency.

---

# 47. lifecycle

Terraform lifecycle meta-arguments control resource behavior.

Common arguments:

```hcl
lifecycle {
  create_before_destroy = true

  prevent_destroy = true

  ignore_changes = [
    tags
  ]
}
```

---

# 48. create_before_destroy

Normally Terraform may destroy an old resource before creating its replacement.

With:

```hcl
lifecycle {
  create_before_destroy = true
}
```

Terraform attempts to:

```text
Create new
     ↓
Replacement available
     ↓
Destroy old
```

This can reduce downtime where supported by the resource/provider.

---

# 49. prevent_destroy

```hcl
lifecycle {
  prevent_destroy = true
}
```

This prevents Terraform from destroying the resource through normal Terraform operations.

Typical use:

```text
Production database
```

If Terraform attempts to destroy it, Terraform produces an error rather than proceeding normally.

---

# 50. ignore_changes

Example:

```hcl
lifecycle {
  ignore_changes = [
    tags
  ]
}
```

This tells Terraform to ignore changes to selected attributes when determining whether the resource should be updated.

Useful when another system legitimately manages part of a resource.

---

# 51. Dynamic Blocks

Dynamic blocks can generate repeated nested blocks.

Example:

```hcl
dynamic "ingress" {
  for_each = var.rules

  content {
    from_port = ingress.value.from_port
    to_port   = ingress.value.to_port
  }
}
```

Think:

> Dynamic blocks generate repeated nested configuration blocks.

Do not confuse dynamic blocks with `for_each` on an entire resource.

---

# 52. Terraform Functions

Terraform has many built-in functions.

Examples:

```hcl
length(var.names)
```

```hcl
join(",", var.names)
```

```hcl
lookup(var.map, "key", "default")
```

```hcl
element(var.list, 0)
```

```hcl
toset(var.list)
```

For the exam, understand what common functions do rather than trying to memorize every Terraform function.

---

# 53. Expressions

Terraform expressions allow values to be calculated.

Example:

```hcl
instance_type = var.environment == "prod"
  ? "t3.large"
  : "t3.micro"
```

This uses a conditional expression.

Structure:

```text
condition ? true_value : false_value
```

---

# 54. Terraform Workspaces

This is another major exam trap.

Terraform has two related but different workspace concepts.

## Terraform CLI / OSS Workspaces

Used to manage multiple state instances within the same configuration.

Commands:

```bash
terraform workspace list
terraform workspace show
terraform workspace new dev
terraform workspace select dev
terraform workspace delete dev
```

Think:

```text
Same configuration
+
Different state
```

---

# 55. Terraform Cloud Workspaces

Terraform Cloud workspaces are broader than the CLI workspace concept.

A Terraform Cloud workspace can manage things such as:

- Configuration
- Variables
- State
- Runs
- Execution settings
- Team access

Do not automatically assume:

```text
Terraform OSS workspace
=
Terraform Cloud workspace
```

They are related concepts but not identical.

---

# 56. Terraform Cloud / HCP Terraform

Terraform Cloud / HCP Terraform provides capabilities for teams, including:

- Remote state
- Remote runs
- Collaboration
- Access control
- Policy controls
- Variable management
- Run history

The exam may ask which capability belongs to Terraform Cloud rather than Terraform CLI itself.

---

# 57. Terraform Cloud Variables

Terraform Cloud can manage variables separately from local `.tf` files.

Sensitive values can be stored as sensitive variables.

This avoids hard-coding secrets in Terraform configuration.

However:

> Sensitive variables should not be confused with state encryption.

---

# 58. Authentication

Terraform providers need authentication to communicate with cloud platforms.

For AWS, common approaches include:

- AWS CLI credentials
- Environment variables
- IAM roles
- Instance roles
- OIDC/workload identity mechanisms

Avoid hard-coded credentials in Terraform files.

---

# 59. State Security

A variable can be:

```hcl
sensitive = true
```

and Terraform will hide it from normal CLI output.

But:

```text
sensitive
    ≠
encrypted state
```

State may still contain the sensitive value.

Therefore, protect the state backend.

---

# 60. Terraform Registry

The Terraform Registry provides reusable:

- Providers
- Modules

Example:

```hcl
module "vpc" {
  source = "terraform-aws-modules/vpc/aws"
}
```

Registry modules can significantly reduce duplicated Terraform code.

---

# 61. Terraform Initialization and Modules

When a configuration uses modules:

```bash
terraform init
```

downloads/initializes the required modules and providers.

If dependencies need to be updated:

```bash
terraform init -upgrade
```

---

# 62. terraform fmt

Formats Terraform configuration.

```bash
terraform fmt
```

To recursively format subdirectories:

```bash
terraform fmt -recursive
```

---

# 63. terraform show

Displays human-readable output from a state or plan.

```bash
terraform show
```

A saved plan can also be inspected:

```bash
terraform show tfplan
```

---

# 64. terraform output

Displays output values:

```bash
terraform output
```

Specific output:

```bash
terraform output instance_ip
```

---

# 65. terraform console

Useful for experimenting with Terraform expressions.

```bash
terraform console
```

Example:

```text
> 1 + 2
3
```

It is useful for testing expressions and functions.

---

# 66. terraform providers

You can inspect provider requirements with:

```bash
terraform providers
```

This helps show provider dependencies in the configuration/module tree.

---

# 67. terraform graph

Terraform can generate a dependency graph:

```bash
terraform graph
```

This represents relationships between resources.

The important concept is:

> Terraform builds a dependency graph to determine the order of operations.

---

# 68. Resource Addressing

A simple resource:

```text
aws_instance.web
```

A resource using `count`:

```text
aws_instance.web[0]
```

A resource using `for_each`:

```text
aws_instance.web["api"]
```

A module:

```text
module.network
```

A resource inside a module:

```text
module.network.aws_vpc.main
```

Understanding addresses is important for commands such as:

```bash
terraform state show
terraform state rm
terraform apply -replace
```

---

# 69. Terraform Dependency Graph

Terraform automatically determines dependencies.

Example:

```hcl
resource "aws_subnet" "public" {
  vpc_id = aws_vpc.main.id
}
```

Terraform sees:

```text
VPC
 ↓
Subnet
```

The reference:

```hcl
aws_vpc.main.id
```

creates an implicit dependency.

---

# 70. Terraform State and Configuration Are Different

This distinction is critical.

## Configuration

What you want.

```text
Desired state
```

## State

What Terraform currently knows about managed infrastructure.

```text
Recorded infrastructure state
```

## Real Infrastructure

What actually exists in AWS, Azure, GCP, etc.

Think:

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

---

# 71. Three Things You Must Understand

Many Terraform questions become easier if you ask:

### What does the configuration say?

```text
Desired state
```

### What does state say?

```text
Terraform's recorded knowledge
```

### What does the provider/API say?

```text
Real infrastructure
```

Terraform compares these pieces of information to determine actions.

---

# 72. Resource vs Data Source

| Concept | Purpose |
|---|---|
| Resource | Create/manage infrastructure |
| Data source | Read existing information |

Example:

```hcl
resource "aws_vpc" "main" {
}
```

creates/manages a VPC.

Whereas:

```hcl
data "aws_vpc" "existing" {
}
```

reads an existing VPC.

---

# 73. Variable vs Local vs Output

| Concept | Purpose |
|---|---|
| Variable | Input |
| Local | Internal reusable value |
| Output | Expose result |

Memory:

```text
Variable = outside → Terraform

Local = inside Terraform

Output = Terraform → outside
```

---

# 74. Resource vs Module

A resource represents an infrastructure object.

```hcl
resource "aws_instance" "web" {}
```

A module is a collection of Terraform configuration that can contain multiple resources.

```hcl
module "application" {
  source = "./modules/application"
}
```

Think:

```text
Resource
    ↓
Infrastructure object

Module
    ↓
Reusable group of Terraform configuration
```

---

# 75. count vs for_each — Final Revision

```text
count
  ↓
numeric instances
  ↓
[0], [1], [2]
```

```text
for_each
  ↓
named/keyed instances
  ↓
["web"], ["api"], ["db"]
```

---

# 76. Lifecycle Quick Revision

```text
create_before_destroy
        ↓
new first, old later
```

```text
prevent_destroy
        ↓
protect from destruction
```

```text
ignore_changes
        ↓
ignore selected attribute changes
```

---

# 77. Backend vs Provider

## Provider

Communicates with APIs.

```text
Terraform
   ↓
AWS Provider
   ↓
AWS API
```

## Backend

Stores Terraform state.

```text
Terraform
   ↓
Backend
   ↓
State
```

Memory:

```text
Provider = Infrastructure API

Backend = State storage
```

---

# 78. Provider Lock File vs State File

### .terraform.lock.hcl

Stores information related to selected provider versions and checksums.

### terraform.tfstate

Stores Terraform's state information about managed infrastructure.

Remember:

```text
.lock.hcl
    ↓
Provider dependency

.tfstate
    ↓
Infrastructure state
```

---

# 79. Terraform Files — Quick Revision

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

Not every file is mandatory.

Terraform loads `.tf` configuration files from the working directory.

---

# 80. terraform.tfvars

Example:

```hcl
instance_type = "t3.micro"
region        = "ap-south-1"
```

Terraform automatically loads:

```text
terraform.tfvars
```

and files matching:

```text
*.auto.tfvars
```

---

# 81. .tfvars vs .tf

`.tf`:

```text
Terraform configuration
```

`.tfvars`:

```text
Variable values
```

Example:

```hcl
# variables.tf

variable "region" {
  type = string
}
```

Then:

```hcl
# terraform.tfvars

region = "ap-south-1"
```

---

# 82. Terraform Environment Variables

Terraform itself uses environment variables such as:

```text
TF_LOG
TF_VAR_name
```

For example:

```bash
export TF_LOG=DEBUG
```

can enable Terraform logging.

Variable values can be provided using:

```bash
export TF_VAR_region="ap-south-1"
```

---

# 83. Terraform Logging

Terraform supports logging levels such as:

```text
TRACE
DEBUG
INFO
WARN
ERROR
```

A common environment variable:

```bash
TF_LOG=DEBUG
```

controls Terraform logging.

---

# 84. Modules — What to Remember

Know:

- Root module
- Child module
- Module source
- Module version
- Input variables
- Outputs
- Module Registry
- Local modules
- Remote modules

Most importantly:

```text
Parent → Child = Variables

Child → Parent = Outputs
```

---

# 85. Providers — What to Remember

Know:

- Provider block
- `required_providers`
- Provider source
- Provider version constraints
- Provider aliases
- Authentication
- Provider plugins
- `.terraform.lock.hcl`

---

# 86. State — What to Remember

Know:

- Local state
- Remote state
- State locking
- Backend
- Sensitive information in state
- State commands
- State drift
- Import
- State manipulation

State is one of the highest-value topics for exam preparation.

---

# 87. Terraform CLI Cheat Sheet

```bash
terraform init
```

Initialize working directory.

```bash
terraform init -upgrade
```

Upgrade provider/module dependencies.

```bash
terraform validate
```

Validate configuration.

```bash
terraform fmt
```

Format configuration.

```bash
terraform plan
```

Preview changes.

```bash
terraform plan -out=tfplan
```

Save plan.

```bash
terraform apply
```

Apply changes.

```bash
terraform apply tfplan
```

Apply saved plan.

```bash
terraform plan -destroy
```

Preview destruction.

```bash
terraform destroy
```

Destroy infrastructure.

```bash
terraform output
```

Show outputs.

```bash
terraform show
```

Show state/plan information.

```bash
terraform state list
```

List state resources.

```bash
terraform state show <address>
```

Show resource state.

```bash
terraform state rm <address>
```

Remove resource from state.

```bash
terraform import <address> <id>
```

Import existing infrastructure.

```bash
terraform workspace list
```

List CLI workspaces.

```bash
terraform workspace show
```

Show current workspace.

```bash
terraform workspace new <name>
```

Create workspace.

```bash
terraform workspace select <name>
```

Switch workspace.

```bash
terraform apply -refresh-only
```

Refresh state without normal configuration changes.

```bash
terraform apply -replace="<address>"
```

Force resource replacement.

---

# 88. The Most Important Terraform Command Differences

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

# 89. The Most Important "Do Not Confuse These" List

If you remember nothing else before the exam, revise this section.

```text
required_version
        ≠
required_providers
```

```text
resource
        ≠
data source
```

```text
variable
        ≠
local
```

```text
variable
        ≠
output
```

```text
count
        ≠
for_each
```

```text
provider
        ≠
backend
```

```text
state
        ≠
configuration
```

```text
state rm
        ≠
destroy
```

```text
import
        ≠
create resource
```

```text
plan
        ≠
apply
```

```text
plan -destroy
        ≠
destroy
```

```text
refresh-only
        ≠
normal apply
```

```text
sensitive
        ≠
encrypted
```

```text
Terraform OSS workspace
        ≠
Terraform Cloud workspace
```

```text
.terraform.lock.hcl
        ≠
terraform.tfstate
```

---

# 90. Common Exam Trap: Sensitive

Question:

> Does `sensitive = true` encrypt a value in Terraform state?

Answer:

```text
No.
```

It primarily controls display of sensitive values in Terraform output.

State still needs appropriate protection.

---

# 91. Common Exam Trap: Import

Question:

> Does terraform import generate the complete Terraform configuration?

Answer:

```text
No.
```

The key concept is:

```text
Import existing infrastructure into Terraform state.
```

You still need suitable configuration to manage the resource.

---

# 92. Common Exam Trap: state rm

Question:

> What happens when terraform state rm is executed?

Answer:

```text
Terraform removes the resource from its state.
```

It does not destroy the remote object.

---

# 93. Common Exam Trap: Refresh-Only

Question:

> Which command can update Terraform state to reflect remote changes without making normal configuration changes?

Think:

```bash
terraform apply -refresh-only
```

---

# 94. Common Exam Trap: Version Constraints

Remember:

```text
required_version
```

is for Terraform.

```text
required_providers
```

is for providers.

And the pessimistic constraint operator is:

```text
~>
```

---

# 95. Common Exam Trap: Workspaces

When a question says:

> Terraform CLI workspace

think:

```bash
terraform workspace ...
```

and multiple state instances.

When it discusses:

> Terraform Cloud workspace

think:

```text
Remote workspace
Runs
Variables
State
Team collaboration
```

Do not automatically treat the two as identical.

---

# 96. Common Exam Trap: Module Communication

Remember this exactly:

```text
Parent
  ↓
Child
  = Input Variable
```

```text
Child
  ↓
Parent
  = Output
```

This simple diagram can answer several module questions.

---

# 97. Common Exam Trap: State Locking

If the question asks:

> What prevents concurrent Terraform operations from modifying shared state?

Think:

```text
State locking
```

If it asks:

> What records provider versions/checksums?

Think:

```text
.terraform.lock.hcl
```

Do not mix them.

---

# 98. Common Exam Trap: Backend

If the question asks:

> Where is Terraform state stored?

Think:

```text
Backend
```

If it asks:

> How does Terraform communicate with AWS?

Think:

```text
Provider
```

---

# 99. Common Exam Trap: Data Sources

If the question says:

> Retrieve information about an existing resource

think:

```hcl
data
```

If the question says:

> Create/manage a resource

think:

```hcl
resource
```

---

# 100. Common Exam Trap: count and for_each

If resources are:

```text
0
1
2
```

think:

```text
count
```

If resources are:

```text
web
api
worker
```

think:

```text
for_each
```

---

# 101. Common Exam Trap: Lifecycle

```text
create_before_destroy
```

means:

```text
new first
old later
```

```text
prevent_destroy
```

means:

```text
do not allow destruction
```

```text
ignore_changes
```

means:

```text
ignore selected changes
```

---

# 102. Practice-Test Strategy

I completed **multiple practice tests**.

The biggest lesson was:

> **Do not repeatedly memorize the same practice questions.**

Instead, after each test:

```text
Take test
   ↓
Review incorrect answers
   ↓
Identify concept
   ↓
Understand why
   ↓
Write short note
   ↓
Move on
```

For example, if a question about:

```text
terraform state rm
```

was answered incorrectly, do not simply memorize the option.

Understand:

```text
state rm removes an object from Terraform state.
It does not destroy the remote infrastructure.
```

That concept will remain useful even if the exam asks the same thing in completely different wording.

---

# 103. What My Notes Focused On

My personal notes focused on **mistakes and confusing concepts**, rather than becoming another Terraform textbook.

The highest-value areas were:

## State

```text
state
remote state
locking
backends
state commands
import
drift
refresh-only
```

## Providers

```text
required_providers
provider versions
provider source
lock file
authentication
```

## Variables

```text
input variables
variable precedence
TF_VAR_
sensitive
```

## Modules

```text
root module
child module
variables
outputs
module versions
```

## Meta-Arguments

```text
count
for_each
depends_on
lifecycle
```

## CLI

```text
init
plan
apply
destroy
import
state
workspace
refresh-only
replace
```

## Terraform Cloud

```text
workspaces
remote state
runs
variables
collaboration
```

---

# 104. One-Page Mental Model of Terraform

Before the exam, visualize Terraform like this:

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

And around Terraform:

```text
Variables → Inputs

Locals → Internal values

Outputs → Results

Resources → Managed infrastructure

Data Sources → Read existing information

State → Terraform's recorded knowledge

Backend → State storage

Provider → API communication

Module → Reusable configuration

Workspace → Separate execution/state context
```

---

# 105. Final 30 Things I Would Memorize

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

---

# 106. Last-Day Preparation Strategy

If your exam is tomorrow, do not try to learn Terraform from scratch.

Use this order.

## First Revision

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

## Second Revision

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

## Final Revision

Read only:

```text
Do Not Confuse These
```

and:

```text
Final 30 Things I Would Memorize
```

Then solve one final practice test.

---

# 107. How to Know You Are Ready

Do not judge readiness only by one practice-test score.

A better indicator is whether you can explain concepts without looking at the answer.

For example:

### Question

What does `terraform state rm` do?

### Answer

It removes the resource from Terraform state. It does not destroy the real infrastructure.

---

### Question

How does a parent module pass information to a child?

### Answer

Through child module input variables.

---

### Question

How does a child module expose information to its parent?

### Answer

Through outputs.

---

### Question

What is the difference between `required_version` and `required_providers`?

### Answer

`required_version` constrains Terraform CLI versions, while `required_providers` defines provider dependencies and their versions.

---

### Question

What prevents concurrent Terraform operations from modifying shared state?

### Answer

State locking.

---

# 108. Final Exam Mindset

The Terraform Associate exam is not simply a test of whether you have memorized Terraform commands.

It tests whether you understand **how Terraform works**.

When you see a question, first identify which area it belongs to:

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

Then eliminate answers that belong to a different concept.

For example:

```text
Question about state
        ↓
Think state, backend, locking, import, drift.

Question about provider version
        ↓
Think required_providers / lock file.

Question about Terraform CLI version
        ↓
Think required_version.

Question about existing infrastructure
        ↓
Think import / data source depending on context.

Question about state removal
        ↓
Think terraform state rm.

Question about destruction
        ↓
Think destroy / plan -destroy / lifecycle.
```

---

# 109. Final Advice

If I had to reduce my entire preparation into one sentence:

> **Don't memorize the answer — understand why the other answers are wrong.**

That was the biggest difference between simply taking practice tests and actually becoming comfortable with Terraform.

The multiple practice tests helped identify weak areas, but the real preparation came from converting those mistakes into **small conceptual notes**.

Once concepts such as state, providers, modules, variables, workspaces, lifecycle, version constraints, and Terraform CLI commands become clear, many apparently difficult questions become straightforward elimination questions.

That is the approach I used to clear the Terraform Associate certification, and it is the approach I recommend to anyone preparing for the exam.

---

# Quick Reference Card

```text
┌─────────────────────────────────────────────────────┐
│                 TERRAFORM CHEAT SHEET               │
├─────────────────────────────────────────────────────┤
│ Terraform → Declarative IaC                         │
│ Provider → Talks to API                             │
│ Backend → Stores state                              │
│ State → Terraform's recorded infrastructure        │
│ Resource → Manages infrastructure                  │
│ Data → Reads existing information                   │
│ Variable → Input                                    │
│ Local → Internal value                              │
│ Output → Exposes value                              │
│ Module → Reusable configuration                     │
├─────────────────────────────────────────────────────┤
│ Parent → Child = Variables                          │
│ Child → Parent = Outputs                            │
├─────────────────────────────────────────────────────┤
│ count → Numeric indexes                             │
│ for_each → Keys                                     │
│ depends_on → Explicit dependency                    │
├─────────────────────────────────────────────────────┤
│ required_version → Terraform version                │
│ required_providers → Provider requirements          │
│ .terraform.lock.hcl → Provider selections/checksum │
│ terraform.tfstate → Infrastructure state            │
├─────────────────────────────────────────────────────┤
│ plan → Preview                                      │
│ apply → Execute                                     │
│ plan -destroy → Preview destruction                │
│ destroy → Destroy                                   │
│ state rm → Remove from state                        │
│ import → Existing infrastructure → state           │
│ refresh-only → Update state from remote             │
│ -replace → Force replacement                        │
└─────────────────────────────────────────────────────┘
```

---

# Conclusion

Terraform becomes much easier once the concepts are connected rather than memorized independently.

My preparation followed a simple cycle:

```text
Learn
  ↓
Practice
  ↓
Make mistakes
  ↓
Understand the concept
  ↓
Create notes
  ↓
Practice again
  ↓
Revise weak areas
  ↓
Take the exam
```

I completed extensive practice tests and used them primarily as a way to discover what I did not understand.

The goal was not to remember multiple practice tests.

The goal was to reach the point where, even if the exam changed the wording of the question, I could still identify the underlying Terraform concept.

That is the approach I recommend to anyone preparing for the Terraform Associate certification.

**Good luck — and don't underestimate the small differences between similar Terraform concepts. Those are often where the exam tries to catch you.**
