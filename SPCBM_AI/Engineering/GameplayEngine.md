# SPCBM Gameplay Engine

Version: 1.0

---

# 1. Purpose

The Gameplay Engine is responsible for managing gameplay playback within SPCBM.

Its responsibilities include:

- Launching gameplay from the Hero Workspace
- Managing the gameplay playlist
- Synchronizing playback state
- Supporting Continue Watching
- Auto-progressing between gameplay parts
- Maintaining a single playback experience

The Gameplay Engine owns behaviour.

Presentation components render behaviour but do not implement it.

---

# 2. Core Principle

SPCBM supports only one active gameplay session.

The Hero Player represents that session.

There must never be competing gameplay players.

The Hero Player is the single source of truth for media playback.

---

# 3. Player Lifecycle

The YouTube IFrame API owns the gameplay player after initialization.

The Gameplay Engine interacts with the player through the YouTube API.

Once the player has been initialized:

- Maintain the player instance.
- Update playback through the API.
- Preserve the player lifecycle.

Avoid recreating the playback session unnecessarily.

---

# 4. Hero Workspace Behaviour

The Hero Workspace is shared by multiple content modes.

Examples:

Homepage Preview

Gameplay

Future Engineering Journal

Marketplace content

The Hero Workspace changes content.

It should not change architectural ownership.

---

# 5. Playlist Behaviour

Every gameplay session produces a playlist.

The playlist is responsible for:

Current gameplay item

Next gameplay item

Previous gameplay item

Visual selection

Completion state

Playlist behaviour should remain synchronized with the active player.

---

# 6. Continue Watching

Continue Watching resumes the current gameplay session.

It must preserve:

Selected game

Current playlist

Current playback position (when supported)

Playback context

Continue Watching should never begin a new gameplay session when an existing session already exists.

---

# 7. Auto Progression

Auto progression advances to the next gameplay item after the current item completes.

Requirements:

Playback must complete naturally.

Next gameplay item becomes active.

Playlist selection updates.

Hero Workspace updates.

Playback resumes automatically.

No duplicate playback sessions may be created.

---

# 8. State Ownership

Gameplay state owns:

Current Game

Current Playlist

Current Playlist Index

Current Video

Player Ready State

Playback Mode

Presentation components consume state.

They do not create state.

---

# 9. Media Contract

Gameplay Engine consumes media metadata.

Examples:

Preview Video ID

Gameplay Video ID

Gallery Video IDs

Thumbnail

Media metadata should remain independent of presentation implementation.

---

# 10. Architectural Invariants

The following behaviour is mandatory.

One Hero Player.

One active gameplay session.

One active playlist.

One authoritative playback state.

One synchronized Hero Workspace.

Future changes must preserve these invariants.

---

# 11. Regression Prevention

Before modifying Gameplay Engine behaviour:

Identify the last Stable Checkpoint.

Compare behaviour.

Verify:

Gameplay launch

Continue Watching

Playlist synchronization

Auto progression

End-of-playlist behaviour

Only continue implementation after existing behaviour has been verified.

---

# 12. Common Failure Modes

The following regressions have previously occurred during development.

Player lifecycle interruption.

Playlist state desynchronization.

Continue Watching restarting playback.

Hero Workspace ownership conflicts.

Media contract inconsistencies.

State duplication.

Every future Gameplay Engine modification should explicitly verify that none of these behaviours have been reintroduced.

---

# 13. Engineering Guideline

Gameplay Engine changes should be evolutionary.

Avoid replacing working architecture.

Prefer extending existing behaviour.

Small behavioural changes are preferred over large architectural rewrites.

---

End of Document