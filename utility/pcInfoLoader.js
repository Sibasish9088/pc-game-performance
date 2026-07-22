/* ==========================================================
   SPCBM v3.5.0
   Dynamic PC Component Loader
========================================================== */

const COMPONENT_ASSETS = [
  "cpu",
  "motherboard",
  "gpu",
  "memory",
  "storage",
  "psu",
  "cabinet",
  "cooler"
];

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const components = await loadComponents();

    renderComponents(components);

    initializeLucideIcons();

    bindComponentEvents();
  } catch (error) {
    console.error("Failed to initialize PC components:", error);
  }
});

/* ==========================================================
   Asset Loader
========================================================== */

async function loadComponents() {

  const requests = COMPONENT_ASSETS.map(async (asset) => {

    const response = await fetch(`assets/pcinfo/${asset}.json`);

    if (!response.ok) {
      throw new Error(`Unable to load ${asset}.json`);
    }

    return response.json();
  });

  const components = await Promise.all(requests);

  return components.sort(
    (a, b) => a.displayOrder - b.displayOrder
  );
}

/* ==========================================================
   Renderer
========================================================== */

function renderComponents(components) {

  const container = document.getElementsByClassName("components")[0];

  if (!container) {
    return;
  }

  container.innerHTML = "";

  components.forEach(component => {

    const card = document.createElement("div");

    card.className = "component-card";

    card.dataset.id = component.id;

    card.dataset.detailPage = component.detailPage;

    card.innerHTML = `
            <i data-lucide="${component.icon}"></i>
            <span>${component.name}</span>
        `;

    container.appendChild(card);
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

/* ==========================================================
   Events
========================================================== */

function bindComponentEvents() {

  document
    .querySelectorAll(".component-card")
    .forEach(card => {

      card.addEventListener("click", () => {

        loadComponentDetail(card.dataset.detailPage);

      });

    });

}

/* ==========================================================
   Detail Loader
========================================================== */

function loadComponentDetail(detailPage) {

  if (!detailPage) {
    return;
  }

  window.location.href = detailPage;

}