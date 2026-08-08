# SPCBM JSON Contract

Version: 1.0

---

# 1. Purpose

This document defines the JSON schema used throughout SPCBM.

The JSON files represent repository data.

They do not define presentation.

Application behaviour is implemented by the JavaScript layer.

---

# 2. Repository Location

Game definitions are stored under:

/assets/games/

Each game is represented by a single JSON file.

Example:

atomic-heart.json

cyberpunk-2077.json

alan-wake-2.json

...

One JSON file represents one game.

---

# 3. Object Structure

Every game JSON contains logical sections.

Example

Game Information

↓

Benchmark Information

↓

Media

↓

Gallery

↓

Metadata

Sections should remain grouped.

Avoid mixing unrelated properties.

---

# 4. Required Root Fields

Every game shall contain:

id

title

slug

developer

publisher

releaseDate

genre

description

benchmark

media

These fields are mandatory.

---

# 5. Benchmark Contract

Benchmark data represents performance.

Benchmark data shall not contain presentation logic.

Examples include:

Resolution

Preset

Average FPS

Minimum FPS

Maximum FPS

Hardware

Driver Version

Future benchmark extensions should remain inside the benchmark object.

---

# 6. Media Contract

The media object represents media metadata.

Preferred fields:

previewVideoId

gameplayVideoId

thumbnail

homepagePriority

gallery

Media metadata must not describe rendering behaviour.

---

# 7. Gallery Contract

Gallery represents gameplay sequencing.

Every entry should contain:

part

title

videoId

Entries should be ordered sequentially.

The Gameplay Engine owns playback order.

The JSON file defines only the sequence.

---

# 8. Optional Fields

Optional fields may include:

notes

status

comingSoon

marketplace

futureBenchmark

Optional fields should never alter the required contract.

---

# 9. Prohibited Content

JSON files must not contain:

Application state

Playback state

DOM references

Rendering logic

Presentation-specific URLs when equivalent metadata exists

Temporary debug values

Runtime flags

JSON represents content only.

---

# 10. Validation Rules

Every JSON must satisfy:

Unique game identifier

Unique slug

Valid media metadata

Sequential gallery ordering

No duplicate gallery parts

Valid JSON syntax

The repository should always remain parseable.

---

# 11. Ownership

JSON owns:

Content

Metadata

Ordering

Descriptions

Benchmark information

JavaScript owns:

Rendering

Navigation

Playback

State

User interaction

JSON should never assume implementation details.

---

# 12. Evolution Policy

New fields may be introduced.

Existing required fields should not be renamed without repository-wide migration.

Deprecation should occur in three stages:

Introduce

Migrate

Remove

Avoid breaking existing consumers.

---

# 13. Future Compatibility

Future workspace types should follow the same philosophy.

Engineering Journal

Marketplace

Hardware Library

Benchmark Database

Each should define metadata rather than implementation.

The rendering engine remains responsible for presentation.

---

End of Document