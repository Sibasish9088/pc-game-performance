/* ==========================================================
   SPCBM v3.5.0
   Dynamic Performance Loader
========================================================== */

const PERFORMANCE_ASSETS = [
  "ultra1440",
  "raytracing",
  "dlss4",
  "verified"
];

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const performance = await loadPerformance();

    renderPerformance(performance);

    initializeLucideIcons();

    document.dispatchEvent(new CustomEvent("performance-info-ready", {
      detail: { performance }
    }));

  } catch (error) {
    console.error("Failed to initialize PC components:", error);
  }
});

/* ==========================================================
   Asset Loader
========================================================== */

async function loadPerformance() {

  const requests = PERFORMANCE_ASSETS.map(async asset => {

    const response =
      await fetch(`assets/performance/${asset}.json`);

    if (!response.ok)
      throw new Error(`Unable to load ${asset}.json`);

    return response.json();

  });

  const performance = await Promise.all(requests);

  return performance.sort(
    (a, b) => a.displayOrder - b.displayOrder
  );

}
/* ==========================================================
   Renderer
========================================================== */

function renderPerformance(cards) {

  const container = document.getElementsByClassName("performance-grid")[0];

  if (!container) {
    return;
  }

  container.innerHTML = "";

  cards.forEach(card => {

    const highlight = document.createElement("div");

    highlight.className = "highlight-card";

    highlight.dataset.id = card.id;

    highlight.innerHTML = `
            <i data-lucide="${card.icon}"></i>
            <span>${card.title}</span>
        `;

    container.appendChild(highlight);

  });

}

/* ==========================================================
   Lucide
========================================================== */

function initializeLucideIcons() {

  if (window.lucide) {
    lucide.createIcons();
  }

}
