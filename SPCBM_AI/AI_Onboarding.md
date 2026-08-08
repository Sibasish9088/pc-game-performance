# SPCBM AI Onboarding Guide

Version: 1.0

---

# Welcome

You are joining the SPCBM (Siba PC Benchmark) engineering team.

SPCBM is not simply a website.

It is an engineering project demonstrating software architecture, UX engineering, modular front-end development and AI-assisted software engineering.

Your responsibility is not to generate code.

Your responsibility is to preserve and evolve the engineering quality of the repository.

---

# Before You Do Anything

Do not write code.

Do not suggest refactoring.

Do not propose new architecture.

First understand the repository.

---

# Repository Philosophy

SPCBM values:

• Behaviour over implementation

• Stability over speed

• Architecture over convenience

• Simplicity over cleverness

• Engineering discipline over feature count

Every recommendation must respect these principles.

---

# Mandatory Reading Order

Read every document in the following sequence.

Do not skip steps.

---

Step 1

Foundation

• AGENTS.md

Purpose

Understand repository rules.

---

Step 2

Engineering_Manual.md

Purpose

Understand engineering philosophy.

---

Step 3

Architecture.md

Purpose

Understand system architecture.

---

Step 4

Glossary.md

Purpose

Understand SPCBM terminology.

Never assume terminology.

---

Step 5

GameplayEngine.md

Purpose

Understand Hero Workspace ownership.

Gameplay lifecycle.

Player ownership.

Playlist behaviour.

Continue Watching.

Auto progression.

---

Step 6

JSONContract.md

Purpose

Understand repository data contracts.

Never violate data contracts.

---

Step 7

CodingStandards.md

Purpose

Understand repository implementation conventions.

---

Step 8

StableCheckpoints.md

Purpose

Understand repository stability philosophy.

---

Step 9

SprintRulebook.md

Purpose

Understand development workflow.

---

Step 10

DecisionLog.md

Purpose

Understand why architectural decisions were made.

Do not repeat previously rejected ideas.

---

Step 11

LessonsLearned.md

Purpose

Learn engineering principles discovered during development.

---

Step 12

Roadmap.md

Purpose

Understand future direction.

Avoid implementing future work unintentionally.

---

Step 13

ReleaseNotes.md

Purpose

Understand repository evolution.

---

# Repository Analysis

After completing onboarding:

Read the repository.

Do not modify anything.

Produce:

• Repository Summary

• Current Architecture

• Current Sprint

• Active Risks

• Questions

Implementation is not yet permitted.

---

# Before Every Implementation

Verify:

Repository builds.

Architecture understood.

Relevant documents reviewed.

Current Sprint identified.

Stable Checkpoint identified.

Only then begin implementation.

---

# During Implementation

Prefer:

Small commits.

Minimal change.

Existing architecture.

Behaviour preservation.

Repository consistency.

Avoid:

Large refactoring.

Architectural replacement.

Parallel implementations.

Unnecessary abstractions.

---

# If A Regression Is Found

Immediately stop implementation.

Do not continue feature development.

Read:

StableCheckpoints.md

GameplayEngine.md (if applicable)

DecisionLog.md

LessonsLearned.md

Identify:

Last Stable Checkpoint.

Root cause.

Minimal corrective action.

Resume implementation only after stability has been restored.

---

# Engineering Review Checklist

Before recommending a solution ask:

Does it preserve behaviour?

Does it preserve architecture?

Does it introduce duplicate state?

Does it increase complexity?

Can the existing implementation solve this instead?

If any answer is uncertain:

Investigate further before proposing changes.

---

# Engineering Mindset

Every contribution should leave SPCBM stronger than before.

Not merely larger.

The goal is not to write more code.

The goal is to improve the engineering quality of the repository.

---

# Final Rule

Repository state always overrides conversational memory.

Repository documentation always overrides assumptions.

When uncertainty exists:

Read.

Analyze.

Then implement.

Never the reverse.

---

End of Document