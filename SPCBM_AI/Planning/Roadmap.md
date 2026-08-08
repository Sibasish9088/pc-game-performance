# Roadmap

High-level roadmap for SPCBM v5.x and related initiatives.

## Now (Immediate)
- Stabilize media helper and complete migration to previewVideoId/gameplayVideoId.
- Add unit tests for media helper and JSON migration verification script.
- Finalize documentation in SPCBM_AI (AGENTS, JSONContract, DecisionLog).

## Near Term (1-2 sprints)
- Deprecate legacy consumption across non-critical modules; announce deprecation timeline.
- Implement automated CI checks validating game JSON schema and thumbnail URLs.
- Add integration tests for playback flows (preview -> gameplay, gallery progression).

## Mid Term (3-6 months)
- Implement analytics hooks for playback metrics and performance sampling.
- Improve authoring workflow for game JSON entries (validation UI or CLI tool).
- Prepare a migration tool to optionally rewrite legacy fields after full rollout.

## Long Term (6+ months)
- Expand Gameplay Engine features: chapter markers, time-synced benchmarks, cloud capture ingestion.
- Consider a microservice for media CDN/thumb caching and resilient playback.
- Security review and hardening of third-party embed usage.

## Milestones

- M0: AI Engineering Baseline established
      • Engineering Pack v1.1 completed
      • AI_Onboarding.md established
      • Repository documentation completed
      • Baseline tag created (v3.5.0)

- M1: Media Schema Migration complete & tested

- M2: Media Helper fully adopted; legacy field deprecation announced

- M3: CI schema validation enabled for PRs

- M4: Playback analytics & cloud ingestion prototype

Review cadence: update roadmap every sprint and record major decisions in DecisionLog.md.