# SPCBM Sprint Rulebook

Version: 1.0

---

# 1. Purpose

This document defines the engineering workflow used throughout SPCBM development.

Every sprint follows these rules regardless of feature size.

The objective is to maximize architectural stability while minimizing regressions.

---

# 2. Sprint Lifecycle

Every sprint follows the same sequence.

Idea

↓

Architecture Review

↓

Sprint Planning

↓

Commit Planning

↓

Implementation

↓

Verification

↓

Stable Checkpoint

↓

Documentation

↓

Next Sprint

No stage should be skipped.

---

# 3. Sprint Roles

Product Owner

Defines product vision.

Approves architecture.

Performs acceptance testing.

---

Chief Architect

Designs architecture.

Reviews repository state.

Creates sprint plans.

Reviews implementation.

Owns technical documentation.

---

Senior Software Engineer

Implements approved architecture.

Produces repository changes.

Explains implementation.

Reports regression risks.

---

Junior Engineer

Provides implementation assistance.

Generates repetitive code.

Assists local development.

---

# 4. Commit Philosophy

Each commit must solve one engineering problem.

Commits should be:

Small

Independent

Reviewable

Reversible

Testable

Avoid combining unrelated objectives.

---

# 5. Patch Philosophy

Large changes should be divided into multiple patches.

Preferred pattern:

PATCH-1

Introduce

PATCH-2

Integrate

PATCH-3

Cleanup

Every patch should leave the repository buildable.

---

# 6. Stable Checkpoints

Every completed sprint establishes a Stable Checkpoint.

A Stable Checkpoint must satisfy:

Repository builds successfully.

Core functionality verified.

No known regressions.

Documentation updated.

Future work begins only from Stable Checkpoints.

---

# 7. Regression Policy

When a regression occurs:

Stop feature development.

Identify the last Stable Checkpoint.

Determine root cause.

Implement the smallest corrective change.

Re-verify existing functionality.

Resume development only after stability has been restored.

---

# 8. Review Gates

Every non-trivial change requires review.

Minimum review:

Architecture

Repository impact

Regression risk

Verification plan

Acceptance criteria

Implementation should never proceed without understanding repository impact.

---

# 9. AI Workflow

AI assistance follows a layered responsibility model.

Product Owner

↓

Chief Architect

↓

Senior Software Engineer

↓

Junior Engineer

↓

Repository

Every AI recommendation should preserve existing architectural decisions.

---

# 10. Prompt Structure

Implementation prompts should contain:

Repository Context

Architectural Invariants

Objective

Scope

Constraints

Implementation Tasks

Verification Checklist

Avoid implementation-only prompts.

---

# 11. Acceptance Criteria

A sprint is complete only when:

Objectives satisfied.

Repository verified.

Regression testing complete.

Stable Checkpoint created.

Documentation updated.

Acceptance confirmed by Product Owner.

---

# 12. Continuous Improvement

Every completed sprint should leave SPCBM stronger than before.

Examples:

Improved architecture.

Improved documentation.

Improved repository structure.

Improved AI guidance.

Improved engineering workflow.

Development success is measured by maintainability rather than feature count.

---

End of Document