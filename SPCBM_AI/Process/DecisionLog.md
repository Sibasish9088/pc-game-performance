# SPCBM Engineering Decision Log

Version: 1.0

Purpose

The Decision Log records significant architectural and engineering decisions made during the evolution of SPCBM.

Unlike implementation documentation, this document explains why decisions were made, what alternatives were considered, and what consequences those decisions introduced.

The Decision Log is append-only.

Historical decisions should not be rewritten.

If an architectural direction changes, a new Decision entry should supersede the previous one.

---

# Decision-001

Title

Single Page Architecture

Status

Accepted

Version

SPCBM v2.x

---

Problem

Early versions relied on multiple independent HTML pages.

This created duplicated layouts, inconsistent navigation and increased maintenance effort.

---

Alternatives Considered

• Independent page per game

• Dynamic single-page rendering

---

Decision

Adopt a single-page architecture where the homepage becomes the primary application workspace.

---

Rationale

A unified workspace improves user continuity, reduces duplicated implementation and enables richer interactions.

---

Consequences

Positive

• Less duplicated code

• Better UX continuity

• Easier future expansion

Negative

• Greater responsibility within homepage logic

---

# Decision-002

Title

JSON Driven Content

Status

Accepted

Version

SPCBM v3.x

---

Problem

Benchmark pages contained repeated static information.

Adding new games required HTML duplication.

---

Alternatives Considered

• Static HTML

• JSON-driven rendering

---

Decision

Store benchmark information inside per-game JSON files.

---

Rationale

Content changes should not require HTML modification.

Presentation should remain independent from content.

---

Consequences

Positive

• Easier maintenance

• Better scalability

• Cleaner repository

---

# Decision-003

Title

Recursive Workspace Navigation

Status

Accepted

Version

SPCBM v4.x

---

Problem

Traditional navigation caused users to repeatedly leave their current context.

---

Alternatives Considered

• Multi-page navigation

• Modal dialogs

• Recursive Workspace

---

Decision

Keep users inside a single workspace while progressively changing content.

---

Rationale

Context preservation significantly improves usability.

---

Consequences

Positive

• Better immersion

• Reduced navigation

• Reusable interaction model

---

# Decision-004

Title

Hero Workspace

Status

Accepted

Version

SPCBM v4.x

---

Problem

Gameplay, previews and future features required a common presentation area.

---

Alternatives Considered

• Separate players

• Multiple hero regions

• Single Hero Workspace

---

Decision

Introduce one shared Hero Workspace.

---

Rationale

One interaction surface creates predictable behaviour and simplifies future expansion.

---

Consequences

Positive

• Consistent UX

• Reduced complexity

• Reusable rendering pipeline

---

# Decision-005

Title

Gameplay Playlist Engine

Status

Accepted

Version

Gameplay Sprint

---

Problem

Independent embedded videos created fragmented gameplay navigation.

---

Alternatives Considered

• Independent embeds

• Native playlist management

---

Decision

Implement an internal Gameplay Playlist.

---

Rationale

The application should manage playback flow rather than relying on embedded pages.

---

Consequences

Positive

• Continue Watching

• Playlist synchronization

• Auto progression

---

# Decision-006

Title

Gameplay Hosting Platform

Status

Accepted

Version

Gameplay Sprint

---

Problem

Gameplay hosting options were evaluated.

---

Alternatives Considered

• OneDrive

• YouTube

---

Decision

Adopt the YouTube IFrame API.

---

Rationale

The YouTube API provides stable playback, event callbacks, playlist support and long-term maintainability.

OneDrive streaming was rejected due to embedding limitations, permission complexity and uncertain playback behaviour.

---

Consequences

Positive

• Reliable API

• Event-driven playback

• Stable embedding

---

# Decision-007

Title

Single Hero Player Ownership

Status

Accepted

Version

Gameplay Sprint

---

Problem

Multiple playback surfaces risked creating competing application state.

---

Alternatives Considered

• Independent players

• Single Hero Player

---

Decision

Maintain one active Hero Player for all gameplay interactions.

---

Rationale

A single playback owner simplifies synchronization and reduces behavioural inconsistencies.

---

Consequences

Positive

• One playback state

• Cleaner architecture

• Easier synchronization

---

# Decision-008

Title

Stable Checkpoints

Status

Accepted

Version

Gameplay Sprint

---

Problem

Feature development occasionally introduced regressions that complicated further implementation.

---

Alternatives Considered

• Continuous feature development

• Stable checkpoint methodology

---

Decision

Every completed sprint establishes a Stable Checkpoint before new feature work begins.

---

Rationale

Regression recovery becomes significantly simpler when development proceeds from verified repository states.

---

Consequences

Positive

• Predictable rollback

• Safer experimentation

• Better sprint discipline

---

# Decision-009

Title

Media Schema Normalization

Status

Accepted

Version

Gameplay Sprint

---

Problem

Presentation-specific YouTube embed URLs were stored directly in repository data.

---

Alternatives Considered

• Store embed URLs

• Store Video IDs

---

Decision

Repository data should store media identifiers rather than presentation URLs.

The application layer becomes responsible for generating playback URLs.

---

Rationale

Separating content from presentation simplifies future provider changes and reduces duplicated implementation.

---

Consequences

Positive

• Cleaner JSON

• Better separation of concerns

• Easier future migrations

---

# Decision-010

Title

SPCBM AI Engineering Pack

Status

Accepted

Version

Sprint Zero

---

Problem

AI-assisted development depended heavily on conversational context, making architectural knowledge difficult to preserve across sessions.

---

Alternatives Considered

• Continue relying on conversational memory

• Establish repository-based engineering documentation

---

Decision

Create the SPCBM_AI Engineering Pack as the repository's permanent engineering knowledge base.

---

Rationale

Repository documentation provides a durable, version-controlled source of architectural guidance that can be consumed by both humans and AI agents.

---

Consequences

Positive

• Consistent AI onboarding

• Improved repository knowledge

• Better architectural continuity

• Reduced reliance on conversational history

---

---

# Decision-011

Title

Gameplay Workspace Integration

Status

Accepted

Version

Gameplay Sprint

---

Problem

Gameplay initially existed as an isolated experience.

Launching gameplay interrupted the Homepage experience.

---

Alternatives Considered

• Separate gameplay page

• Embedded gameplay page

• Gameplay integrated into the Hero Workspace

---

Decision

Gameplay would become another Hero Workspace mode rather than a separate page.

---

Rationale

Users should remain inside the Homepage while changing activity.

Gameplay becomes another workspace state rather than another application.

---

Consequences

Positive

• Consistent UX

• No page transitions

• Better workspace continuity

---

# Decision-012

Title

Homepage Preview Separation

Status

Accepted

Version

Gameplay Sprint

---

Problem

Homepage previews and gameplay sessions have different purposes.

---

Alternatives Considered

• One playback configuration

• Independent preview and gameplay modes

---

Decision

Separate Homepage Preview behaviour from Gameplay behaviour.

Preview represents discovery.

Gameplay represents immersion.

---

Rationale

Each mode requires different playback behaviour while sharing the same Hero Workspace.

---

Consequences

Positive

• Cleaner interaction model

• Independent optimisation

---

# Decision-013

Title

Gameplay Gallery Architecture

Status

Accepted

Version

Gameplay Sprint

---

Problem

Large walkthroughs consist of multiple videos.

Users should experience them as a single session.

---

Alternatives Considered

• Individual embedded videos

• Playlist driven gallery

---

Decision

Introduce Gameplay Gallery as a structured playlist.

---

Rationale

The application should own sequence rather than relying on external navigation.

---

Consequences

Positive

• Sequential playback

• Continue Watching support

• Auto progression

---

# Decision-014

Title

Continue Watching

Status

Accepted

Version

Gameplay Sprint

---

Problem

Leaving gameplay forced users to restart their viewing session.

---

Alternatives Considered

• Restart playback

• Preserve current session

---

Decision

Introduce Continue Watching.

---

Rationale

Users should resume their current gameplay context without rebuilding the session.

---

Consequences

Positive

• Better usability

• Context preservation

• Reduced navigation

---

# Decision-015

Title

Playlist State Synchronization

Status

Accepted

Version

Gameplay Sprint

---

Problem

Hero playback and playlist selection could become inconsistent.

---

Alternatives Considered

• Independent state

• Shared application state

---

Decision

Playlist selection and Hero playback share the same application state.

---

Rationale

The visual playlist should always reflect the currently active gameplay item.

---

Consequences

Positive

• Predictable behaviour

• Simpler debugging

• Better UX

---

# Decision-016

Title

Automatic Playlist Progression

Status

Accepted

Version

Gameplay Sprint

---

Problem

Users should not manually start every gameplay part.

---

Alternatives Considered

• Manual selection

• Event driven progression

---

Decision

Automatically advance to the next gameplay item after playback completion.

---

Rationale

Long walkthroughs should feel like a continuous viewing experience.

---

Consequences

Positive

• Reduced interaction

• Continuous playback

• Better immersion

---

# Decision-017

Title

End-of-Playlist Behaviour

Status

Accepted

Version

Gameplay Sprint

---

Problem

Playlist completion should have a defined application state.

---

Alternatives Considered

• Stop silently

• Display completion state

---

Decision

The application explicitly handles playlist completion.

---

Rationale

Playback completion is a valid application state and should be represented intentionally.

---

Consequences

Positive

• Predictable ending

• Better user feedback

---

# Decision-018

Title

Gameplay Engine State Ownership

Status

Accepted

Version

Gameplay Sprint

---

Problem

Multiple components attempted to influence gameplay behaviour.

---

Alternatives Considered

• Distributed ownership

• Central Gameplay Engine ownership

---

Decision

Gameplay Engine owns playback state.

Presentation components consume state.

---

Rationale

Central state ownership simplifies behaviour and debugging.

---

Consequences

Positive

• Cleaner architecture

• Easier maintenance

• Better scalability

---

# Decision-019

Title

Media Helper Abstraction

Status

Accepted (Under Review)

Version

Gameplay Sprint

---

Problem

Media URL generation existed in multiple locations.

---

Alternatives Considered

• Manual URL construction

• Shared Media Helper

---

Decision

Centralise media URL generation inside a dedicated helper.

---

Rationale

Presentation URL generation should exist in one implementation location.

---

Consequences

Positive

• Reduced duplication

• Easier maintenance

Current Review

Repository behaviour must be preserved during abstraction.

Future modifications should explicitly verify Gameplay Engine lifecycle.

---

# Decision-020

Title

Repository Based AI Engineering

Status

Accepted

Version

Sprint Zero

---

Problem

Large repositories exceed conversational memory.

---

Alternatives Considered

• Conversation driven development

• Repository guided AI development

---

Decision

Repository documentation becomes the primary engineering knowledge source.

AI agents should read repository documentation before implementation.

---

Rationale

Repository knowledge is durable, version controlled and independent of any single conversation.

---

Consequences

Positive

• Better AI onboarding

• Consistent engineering decisions

• Reduced architectural drift

---

---

# Decision-021

Title

Homepage as the Permanent Workspace

Status

Accepted

Version

UX Evolution Sprint

---

Problem

Traditional portfolio websites navigate users away from the homepage.

This interrupted continuity and fragmented the experience.

---

Alternatives Considered

• Multiple landing pages

• Homepage as permanent workspace

---

Decision

The homepage becomes the permanent interaction workspace.

All primary experiences originate from and return to the homepage.

---

Rationale

The homepage should function as an application rather than a landing page.

---

Consequences

Positive

• Better continuity

• Reduced navigation

• Consistent interaction model

---

# Decision-022

Title

In-Place Content Loading

Status

Accepted

Version

UX Evolution Sprint

---

Problem

Opening new pages interrupted user flow.

---

Alternatives Considered

• Page navigation

• Modal windows

• Dynamic in-place rendering

---

Decision

Replace page transitions with in-place content loading whenever practical.

---

Rationale

Users should feel that content evolves rather than reloads.

---

Consequences

Positive

• Faster perceived performance

• Better immersion

• Reduced navigation complexity

---

# Decision-023

Title

Scroll Position Preservation

Status

Accepted

Version

UX Evolution Sprint

---

Problem

Context was frequently lost when moving between gameplay and homepage sections.

---

Alternatives Considered

• Default browser scrolling

• Preserve user context

---

Decision

Application controlled scrolling becomes responsible for restoring user position.

---

Rationale

Navigation should return users to where they expect to continue browsing.

---

Consequences

Positive

• Better usability

• Reduced disorientation

---

# Decision-024

Title

Hero Focus Management

Status

Accepted

Version

UX Evolution Sprint

---

Problem

Automatic scrolling frequently shifted attention away from the user's current workspace.

---

Alternatives Considered

• Always focus Hero Workspace

• Context-aware focus management

---

Decision

Scrolling behaviour should respect the user's current interaction.

Hero focus occurs only when appropriate.

---

Rationale

Application behaviour should support the user's intention rather than interrupt it.

---

Consequences

Positive

• Less unexpected scrolling

• Better interaction continuity

---

# Decision-025

Title

Smooth Transition Philosophy

Status

Accepted

Version

UX Evolution Sprint

---

Problem

Abrupt workspace transitions reduced perceived quality.

---

Alternatives Considered

• Immediate state changes

• Animated transitions

---

Decision

Workspace transitions should feel continuous rather than abrupt.

---

Rationale

Animation should reinforce application state instead of becoming decoration.

---

Consequences

Positive

• Higher perceived quality

• Better interaction flow

---

# Decision-026

Title

Recursive Navigation Depth

Status

Accepted

Version

UX Evolution Sprint

---

Problem

Deep navigation traditionally requires additional pages.

---

Alternatives Considered

• Additional pages

• Recursive workspaces

---

Decision

Support deeper interaction through recursive workspaces.

---

Rationale

Depth should be achieved through application state rather than page hierarchy.

---

Consequences

Positive

• Consistent UX

• Reusable navigation model

---

# Decision-027

Title

Workspace Before Feature

Status

Accepted

Version

UX Evolution Sprint

---

Problem

New features risked introducing inconsistent user experiences.

---

Alternatives Considered

• Independent feature implementation

• Workspace-first integration

---

Decision

Every new feature must first identify its workspace within the existing application.

---

Rationale

Features integrate into architecture rather than creating parallel experiences.

---

Consequences

Positive

• Better scalability

• Architectural consistency

---

# Decision-028

Title

Footer Evolution Strategy

Status

Accepted

Version

UX Evolution Sprint

---

Problem

Traditional footers provide static information with limited interaction.

---

Alternatives Considered

• Static footer

• Workspace extension

---

Decision

Future informational content should evolve into interactive workspaces whenever appropriate.

The footer remains lightweight while acting as a gateway to richer content.

---

Rationale

Documentation, engineering journals and future portfolio content should reuse the existing interaction model.

---

Consequences

Positive

• Consistent UX

• Better content discoverability

• Maximum architecture reuse

---

# Decision-029

Title

Engineering Journal Integration

Status

Accepted

Version

Planning Sprint

---

Problem

Project documentation traditionally exists outside the product.

---

Alternatives Considered

• External documentation

• PDF only

• Integrated Engineering Journal

---

Decision

Future engineering documentation will become another SPCBM workspace.

---

Rationale

The product should demonstrate its own engineering evolution.

---

Consequences

Positive

• Living documentation

• Native portfolio experience

• Reuse of existing rendering engine

---

# Decision-030

Title

UX as Engineering

Status

Accepted

Version

UX Evolution Sprint

---

Problem

User experience decisions were often treated as cosmetic improvements.

---

Alternatives Considered

• Separate UX from architecture

• Treat UX as an architectural concern

---

Decision

User experience is considered part of the system architecture.

UX decisions should be evaluated using the same engineering discipline as technical decisions.

---

Rationale

Architecture determines how software behaves.

UX determines how users experience that behaviour.

Neither should evolve independently.

---

Consequences

Positive

• Consistent product philosophy

• Stronger engineering identity

• Better long-term maintainability

---

---

# Decision-031

Title

Sprint-Based Development

Status

Accepted

Version

Engineering Sprint

---

Problem

Feature development was initially continuous, making progress difficult to measure and review.

---

Alternatives Considered

• Continuous implementation

• Sprint-based development

---

Decision

Adopt structured engineering sprints with clearly defined objectives.

---

Rationale

Sprints improve planning, implementation discipline and verification.

---

Consequences

Positive

• Better progress tracking

• Clear engineering milestones

• Improved review process

---

# Decision-032

Title

Commit-Driven Development

Status

Accepted

Version

Engineering Sprint

---

Problem

Large implementation changes became difficult to verify.

---

Alternatives Considered

• Large feature commits

• Small engineering commits

---

Decision

Divide implementation into small reviewable commits.

---

Rationale

Each commit should solve one engineering problem and remain independently testable.

---

Consequences

Positive

• Easier debugging

• Safer rollback

• Improved repository history

---

# Decision-033

Title

Architecture Before Implementation

Status

Accepted

Version

Engineering Sprint

---

Problem

Implementation occasionally began before repository impact had been fully understood.

---

Alternatives Considered

• Code first

• Architecture first

---

Decision

Every non-trivial feature begins with architectural analysis before implementation.

---

Rationale

Good implementation follows good architecture.

---

Consequences

Positive

• Better design

• Reduced rework

• Lower regression risk

---

# Decision-034

Title

Evidence-Based Debugging

Status

Accepted

Version

Gameplay Sprint

---

Problem

Implementation assumptions occasionally produced incorrect debugging directions.

---

Alternatives Considered

• Memory-driven debugging

• Repository-driven debugging

---

Decision

Engineering investigations must begin with the current repository state.

---

Rationale

The repository is the authoritative source of implementation truth.

---

Consequences

Positive

• More accurate analysis

• Fewer speculative fixes

• Better engineering discipline

---

# Decision-035

Title

Architectural Invariants

Status

Accepted

Version

Gameplay Sprint

---

Problem

Refactoring occasionally altered behaviour that should have remained unchanged.

---

Alternatives Considered

• Task-oriented prompts

• Architecture-first prompts

---

Decision

Every implementation prompt begins by defining architectural invariants.

---

Rationale

AI should understand what must remain unchanged before changing implementation.

---

Consequences

Positive

• Reduced regressions

• Better architectural preservation

---

# Decision-036

Title

Engineering Pack

Status

Accepted

Version

Sprint Zero

---

Problem

Repository knowledge depended heavily on previous conversations.

---

Alternatives Considered

• Conversation memory

• Repository documentation

---

Decision

Establish the SPCBM_AI Engineering Pack.

---

Rationale

Engineering knowledge should live inside the repository alongside the source code.

---

Consequences

Positive

• Better AI onboarding

• Durable project knowledge

• Version-controlled documentation

---

# Decision-037

Title

Repository-Centric AI Development

Status

Accepted

Version

Sprint Zero

---

Problem

Conversational context becomes increasingly difficult to maintain as repository complexity grows.

---

Alternatives Considered

• Conversation-centric workflow

• Repository-centric workflow

---

Decision

Future AI sessions begin by understanding the repository rather than relying solely on conversation history.

---

Rationale

Repository documentation provides a stable engineering foundation.

---

Consequences

Positive

• Better consistency

• Lower context loss

• Improved long-term maintainability

---

# Decision-038

Title

AI Role Separation

Status

Accepted

Version

Sprint Zero

---

Problem

One AI performing architecture, implementation and review creates unnecessary risk.

---

Alternatives Considered

• General-purpose AI workflow

• Role-based engineering workflow

---

Decision

Separate responsibilities across engineering roles.

---

Rationale

Architecture, implementation and validation benefit from independent review.

---

Consequences

Positive

• Better quality control

• Clear responsibility boundaries

• More reliable implementation

---

# Decision-039

Title

Engineering Documentation as Code

Status

Accepted

Version

Sprint Zero

---

Problem

Traditional documentation often becomes outdated.

---

Alternatives Considered

• External documentation

• Repository-managed engineering documentation

---

Decision

Treat engineering documentation as a maintained repository artifact.

---

Rationale

Documentation should evolve alongside implementation.

Engineering documents should be version controlled, reviewed and updated with the same discipline as source code.

---

Consequences

Positive

• Documentation remains current

• Better engineering traceability

• Easier AI consumption

---

# Decision-040

Title

Repository as Institutional Memory

Status

Accepted

Version

Sprint Zero

---

Problem

Engineering knowledge should survive beyond individual conversations, contributors or AI tools.

---

Alternatives Considered

• Human memory

• Conversation history

• Repository institutional memory

---

Decision

The repository becomes the permanent institutional memory of SPCBM.

Architecture, engineering philosophy, historical decisions and development methodology should be preserved inside the repository.

---

Rationale

Well-engineered software should explain itself through both implementation and documentation.

Future contributors should understand not only what was built, but why it exists.

---

Consequences

Positive

• Long-term maintainability

• Consistent architectural evolution

• Sustainable AI-assisted engineering

---

End of Phase-4