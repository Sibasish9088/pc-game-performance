## 📜 Changelog

### `SPCBMv1.3.1-view-recovery-for-components-and-thumbnails` (2025-04-30)
> 🗝️ View memory & scroll restoration for all dynamic cards

- ✅ Smooth scroll recovery added for both:
    - PC component cards (e.g., CPU, GPU)
    - Gameplay cards (even those loaded after scrolling)
- ↻ MutationObserver + auto-scroll loop ensure back-navigation is always context-aware
- 🎨 "Back to Components" and "Back to My Gameplays" buttons now preserve scroll + highlight visual

---

### `v1.3.0-game-insights-and-details-with-glow-animations` (2025-04-28)
> ✨ Interactive FPS insights + glow cue upgrades

- 🧠 Added FPS badges (e.g., "90 FPS @1080p") for better visibility
- 🧹 Introduced genre + RTX/DLSS tag bars per game card
- 💡 Highlight-glow animations applied to game cards on return scroll
- ➕ Next/Previous navigation between game pages added

---

### `v1.2.0-dynamic-pc-parts-details-loading` (2025-04-28)
> 🔧 PC build detail loader goes modular

- 🛠️ PC parts data now dynamically loaded via `pcComponentLoader.js`
- 🧹 Each component (CPU, GPU, etc.) now supports:
    - Real-time pricing
    - Resale estimation
    - Animated breakdowns
- 🔗 "How was this calculated?" links scroll to explanation panels

---

### `v1.1.0-fps-json-integration` (2025-04-25)
> 📊 Data gets smarter with JSON-backed benchmarks

- ↺ FPS comparison logic moved to structured JSON file
- 📈 Dynamic parsing for per-game average FPS (e.g., converting "80-100" ➞ 90)
- 📊 ChartJS used to generate real-time 1080p vs 1440p comparison graphs

---

### `siba-pcbenchmark-site-v1.0` (2025-04-24)
> 🎉 Initial Public Release

- 💥 Cyberpunk-themed static site featuring:
    - Gameplay thumbnails with video preview
    - PC build summary
    - Individual game detail pages
- 🚀 Optimized lazy-loading, minimal blocking scripts
- 💡 Built using pure HTML/CSS/JS — no frameworks
