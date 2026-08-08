# SPCBM AI Engineering Rules

Version: 1.0

---

## Purpose

This repository contains SPCBM (Siba PC Benchmark), a single-page benchmark platform that has evolved into a modular engineering showcase.

This document defines the mandatory operating rules for every AI agent contributing to this repository.

These rules take precedence over implementation preferences.

---

# Rule 1 — Preserve Working Behaviour

Never sacrifice working functionality in pursuit of cleaner code.

Behaviour is always more important than implementation.

---

# Rule 2 — Stable Checkpoints

Every completed sprint establishes a Stable Checkpoint.

When regressions occur:

1. Identify the last Stable Checkpoint.
2. Compare behaviour.
3. Restore behaviour before introducing new functionality.

Never continue building on an unstable checkpoint.

---

# Rule 3 — Minimal Change Principle

Prefer the smallest implementation capable of solving the problem.

Avoid introducing new abstractions unless existing architecture cannot support the requirement.

---

# Rule 4 — Existing Architecture First

Before creating:

- new functions
- new files
- new state
- new utilities

determine whether the existing architecture already provides the capability.

Modification is preferred over expansion.

---

# Rule 5 — Hero Workspace

The Hero Player is the primary interaction surface of SPCBM.

Do not redesign its interaction model.

Do not introduce competing Hero Players.

Maintain a single source of truth.

---

# Rule 6 — Recursive Workspace

Recursive Workspace transitions are a core SPCBM design principle.

Users should remain within the current workspace whenever possible.

Avoid unnecessary page navigation.

---

# Rule 7 — Gameplay Engine

Gameplay Engine behaviour is considered production functionality.

Changes affecting:

- playlist behaviour
- Continue Watching
- autoplay
- YouTube API
- Hero Player
- playback lifecycle

require regression analysis before implementation.

---

# Rule 8 — Data vs Presentation

Repository data represents content.

Implementation represents presentation.

JSON files should never contain presentation-specific implementation where avoidable.

---

# Rule 9 — Simplicity

SPCBM evolved by repeatedly discovering that the simplest architecture was usually the correct one.

Prefer removing complexity over introducing additional layers.

---

# Rule 10 — Explain Decisions

Every non-trivial modification must include:

- Problem
- Root Cause
- Architectural Decision
- Regression Risk

Never provide code without reasoning.

---

# Rule 11 — Human Authority

The Product Owner has final authority.

AI proposes.

The Product Owner decides.

---

# Rule 12 — Repository First

Never infer implementation from memory.

Always inspect the current repository before proposing implementation changes.

Repository state overrides conversational context.

---

End of Document