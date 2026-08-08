# SPCBM Engineering Manual

Version: 1.0

---

# 1. Introduction

SPCBM (Siba PC Benchmark) is a single-page benchmark platform designed to present gaming benchmarks, gameplay captures and PC hardware through a unified user experience.

The project has evolved from a benchmark website into an engineering showcase demonstrating:

- User Experience Design
- Modular Front-End Architecture
- Data Driven Rendering
- State Based Workspace Management
- AI Assisted Software Engineering

The repository intentionally favours architectural consistency over rapid feature expansion.

---

# 2. Engineering Philosophy

SPCBM is guided by a small number of engineering principles.

## Preserve Behaviour

Working functionality is more valuable than cleaner implementation.

Users experience behaviour.

Developers maintain implementation.

Behaviour therefore has higher priority.

---

## Simplicity Wins

The project repeatedly demonstrated that the simplest solution was usually discovered after more complicated alternatives had been explored.

Whenever possible:

Remove complexity.

Do not relocate it.

---

## Reuse Existing Systems

New features should reuse existing architecture.

Avoid creating parallel implementations.

If an existing engine can support the new requirement, extend it.

---

## Stable Before New

Every feature begins from a Stable Checkpoint.

Regression fixes always take priority over feature development.

---

# 3. Repository Structure

The repository is organised around responsibility.

assets/

Static content.

Game JSON files.

Images.

Videos.

Configuration data.

---

js/

Application orchestration.

Homepage state.

Workspace transitions.

Interaction logic.

Application flow.

---

utility/

Reusable implementation utilities.

Rendering helpers.

Media helpers.

Shared logic.

---

SPCBM_AI/

Engineering documentation.

Architecture specifications.

AI operating rules.

Repository conventions.

---

# 4. Architectural Layers

SPCBM separates responsibilities into distinct layers.

Presentation Layer

HTML

CSS

Animations

Workspace rendering

↓

Interaction Layer

Homepage logic

Workspace transitions

User interaction

↓

Application Layer

State management

Gameplay Engine

Navigation

↓

Data Layer

Game JSON

Benchmark data

Media metadata

---

Each layer should remain independent whenever practical.

---

# 5. Development Workflow

Every sprint follows the same lifecycle.

Problem

↓

Architecture

↓

Implementation

↓

Verification

↓

Stable Checkpoint

↓

Documentation

Never bypass verification.

Never continue development from an unstable implementation.

---

# 6. Commit Philosophy

Every commit should satisfy a single engineering objective.

Good commits are:

Small

Reviewable

Reversible

Testable

Avoid combining unrelated architectural changes into the same commit.

---

# 7. AI Development Workflow

Responsibilities are intentionally separated.

Product Owner

Owns product direction.

Chief Architect

Defines architecture.

Reviews implementation.

Senior Engineer

Implements repository changes.

Junior Engineer

Provides implementation assistance.

Testing remains a human responsibility.

---

# 8. Documentation Philosophy

Documentation records engineering decisions.

Documentation is not marketing.

Documentation should explain:

Problem

Decision

Reason

Trade-offs

Consequences

Whenever possible, documentation should describe why a solution exists rather than simply describing what it does.

---

# 9. Future Evolution

SPCBM should continue evolving through architectural refinement rather than uncontrolled feature expansion.

Every new feature should answer three questions.

Does it simplify the product?

Does it reuse existing systems?

Can it be maintained five versions from now?

If the answer is "No", reconsider the design before implementation.

---

End of Document