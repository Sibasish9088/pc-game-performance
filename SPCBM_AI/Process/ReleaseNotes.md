# Release Notes

SPCBM v5.1 — Release Summary

## v5.1 (2026-08-08)
- Introduced Video ID media contract: previewVideoId and gameplayVideoId added to all game JSON files.
- Added mediaHelper utility to centralize YouTube embed and thumbnail URL generation.
- Application updated to consume video IDs (main.js, utility/loadGameDetail.js) while retaining legacy fields for backward compatibility.
- Created SPCBM_AI documentation (Agents, Architecture, Migration, Roadmap, DecisionLog, LessonsLearned).

## Important Notes
- Legacy media fields preserved; deprecation planned after validation and rollout.
- Test playback flows (preview, gameplay fallback, gallery progression) after deployment.

## Rollback
Revert the listed JS changes and restore previous JSON files from Git if needed.