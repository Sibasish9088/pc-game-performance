/* ==========================================================
   SPCBM v3.5.0
   Dynamic Trust Info Loader
========================================================== */

const TRUST_ASSETS = [
  "built",
  "windows11",
  "invoice",
  "boxes",
  "warranty",
  "ups"
];

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const trustInfo = await loadTrustInfo();

    renderTrustInfo(trustInfo);

    initializeLucideIcons();

    document.dispatchEvent(new CustomEvent("trust-info-ready", {
      detail: { trustInfo }
    }));

  } catch (error) {
    console.error("Failed to initialize trust information:", error);
  }
});

/* ==========================================================
   Asset Loader
========================================================== */

async function loadTrustInfo() {

  const requests = TRUST_ASSETS.map(async asset => {

    const response =
      await fetch(`assets/trustinfo/${asset}.json`);

    if (!response.ok)
      throw new Error(`Unable to load ${asset}.json`);

    return response.json();

  });

  const trustInfo = await Promise.all(requests);

  return trustInfo.sort(
    (a, b) => a.displayOrder - b.displayOrder
  );

}
/* ==========================================================
   Renderer
========================================================== */

function renderTrustInfo(cards) {

  const container = document.getElementsByClassName("trust-grid")[0];

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
