# SPCBM Coding Standards

Version: 1.0

---

# 1. Purpose

This document defines the coding conventions used throughout SPCBM.

Consistency is preferred over individual coding style.

All contributors should follow these standards.

---

# 2. Engineering Principles

Implementation should always prioritize:

Correctness

Readability

Maintainability

Architectural consistency

Avoid clever implementations that reduce readability.

---

# 3. File Responsibilities

Every file should have one primary responsibility.

Examples

main.js

Application orchestration

Homepage state

Workspace transitions

---

gameData.js

Game data loading

Repository interaction

---

utility/

Reusable helper functions

Rendering utilities

Shared logic

Avoid placing unrelated responsibilities inside the same file.

---

# 4. Function Design

Functions should perform one logical task.

Prefer:

Small

Focused

Predictable

Reusable

Avoid functions that simultaneously:

Load data

Modify DOM

Update state

Trigger navigation

These responsibilities should remain separate whenever practical.

---

# 5. Naming Conventions

Variables

Use descriptive camelCase.

Example

currentGame

selectedPlaylistItem

heroPlayer

Avoid abbreviations unless universally understood.

---

Functions

Function names should describe behaviour.

Examples

loadHomepagePreview()

updateGameplayPlaylist()

renderBenchmarkTable()

Avoid ambiguous names.

---

Constants

Use UPPER_SNAKE_CASE.

Example

DEFAULT_PLAYBACK_SPEED

MAX_PLAYLIST_ITEMS

---

# 6. State Management

Application state should exist in one place.

Avoid duplicated state.

When possible:

Read once.

Update once.

Render many.

Presentation components should consume state.

They should not own state.

---

# 7. DOM Manipulation

Locate DOM elements once whenever practical.

Avoid repeated DOM queries inside loops.

Group DOM updates to reduce unnecessary rendering.

Prefer updating existing elements over recreating them.

---

# 8. JSON Usage

JSON represents data.

JavaScript represents behaviour.

Do not store:

Application state

Rendering logic

Temporary values

Debug information

inside JSON.

---

# 9. Utility Design

Utility functions should remain stateless.

Utilities should:

Receive input.

Produce output.

Avoid modifying unrelated application state.

Avoid hidden side effects.

---

# 10. Error Handling

Fail predictably.

Validate inputs.

Handle missing data gracefully.

Never silently ignore repository errors.

Development logs should provide useful diagnostic information.

---

# 11. Comments

Explain why.

Avoid explaining obvious syntax.

Preferred

// Preserve Hero Workspace ownership

Avoid

// Increment i

Comments should describe engineering intent.

---

# 12. Refactoring Rules

Before refactoring:

Understand existing behaviour.

Preserve repository contracts.

Minimize implementation changes.

Verify existing functionality.

Architectural improvements should not introduce behavioural regressions.

---

# 13. AI Generated Code

AI generated code is considered a draft until reviewed.

Every generated implementation should be evaluated for:

Architectural consistency

Repository impact

Regression risk

Readability

Maintainability

No AI generated implementation should be accepted without review.

---

# 14. Repository Consistency

Future code should resemble existing SPCBM code.

When multiple valid implementations exist:

Choose the implementation that best matches repository conventions.

Repository consistency is more important than personal preference.

---

End of Document