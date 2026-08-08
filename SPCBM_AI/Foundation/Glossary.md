# Glossary

Definitions of common SPCBM terms.

- previewVideoId: YouTube video ID used for homepage preview embeds (new schema).
- gameplayVideoId: YouTube video ID used for full gameplay embeds (new schema).
- preview (legacy): Full YouTube embed URL previously used for previews. Kept for backward compatibility.
- gameplay (legacy): Full YouTube embed URL previously used for gameplay. Kept for backward compatibility.
- gallery: Array of gameplay segments; each entry typically contains part, videoId, title, and optional durationSeconds.
- mediaHelper: Centralized utility that constructs YouTube embed and thumbnail URLs from video IDs.
- benchmark: Object containing preset, rayTracing, dlss and other verification metadata.
- fps: Object mapping resolutions ("1080p", "1440p", "2160p") to numeric FPS values.
- requirements: Hardware guidance (minimumVRAM, recommendedVRAM, cpuHeavy, gpuHeavy).
- Playback Pipeline: The flow controlling preview -> gameplay fallback, playlist progression, and YouTube Player API integration.

If a term is missing or unclear, add it to this glossary.