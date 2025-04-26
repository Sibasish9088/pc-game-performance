
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('gameGallery');
  const batchSize = 6;
  let loadedCount = 0;

  function loadNextBatch() {
    const nextBatch = gameData.slice(loadedCount, loadedCount + batchSize);
    nextBatch.forEach(game => {
      const card = document.createElement('div');
      card.className = 'game-card';
      card.innerHTML = `
        <iframe src="${game.preview}" frameborder="0"
                allow="autoplay; encrypted-media" allowfullscreen></iframe>
        <h3><a href="${game.detailPage}">${game.title}</a></h3>
      `;
      container.appendChild(card);
    });
    loadedCount += batchSize;
  }

  function handleScroll() {
    const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
    if (nearBottom && loadedCount < gameData.length) loadNextBatch();
  }

  loadNextBatch();
  window.addEventListener('scroll', handleScroll);

  import { getFilteredGames } from './utility/filterEngine.js';
  import { loadGameData } from './utility/dataReader.js';

  let allTags = new Set();

  // 🔁 Render cards
  function renderGameCards(games) {
    const container = document.getElementById("gameGallery");
    container.innerHTML = "";

    games.forEach(game => {
      const videoId = game.youtube.split("v=")[1] || game.youtube.split("/").pop();
      const card = document.createElement("div");
      card.className = "game-card";

      card.innerHTML = `
        <a href="games/${game.title.toLowerCase().replace(/\s+/g, "-")}.html">
          <iframe
            src="https://www.youtube.com/embed/${videoId}?start=0&end=45&autoplay=0&mute=1&loop=1&playlist=${videoId}"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <h3>${game.title}</h3>
        </a>
      `;

      container.appendChild(card);
    });
  }

  // 📦 Extract current filters
  function getFiltersFromUI() {
    const search = document.getElementById("search-input").value.toLowerCase();
    const fps = [...document.querySelectorAll("input[name='fps']:checked")].map(cb => parseInt(cb.value));
    const tags = [...document.querySelectorAll("input[name='tag']:checked")].map(cb => cb.value);
    return { search, fps, tags };
  }

  // 🧠 Apply filters and render
  async function applyFilters() {
    const filters = getFiltersFromUI();
    const games = await getFilteredGames(filters);
    renderGameCards(games);
  }

  // 🧩 Populate tag checkboxes dynamically
  async function populateTags() {
    const data = await loadGameData();
    Object.values(data).forEach(game => game.tags.forEach(tag => allTags.add(tag)));

    const tagContainer = document.getElementById("tag-filters");
    allTags.forEach(tag => {
      const label = document.createElement("label");
      label.innerHTML = `<input type="checkbox" name="tag" value="${tag}"> ${tag}`;
      tagContainer.appendChild(label);
    });
  }

  // 🎯 Register event listeners
  function setupFilterListeners() {
    document.getElementById("search-input").addEventListener("input", applyFilters);
    document.querySelectorAll("input[name='fps']").forEach(cb => cb.addEventListener("change", applyFilters));
    document.getElementById("tag-filters").addEventListener("change", applyFilters);
  }

  // 🚀 Init on DOM load
  document.addEventListener("DOMContentLoaded", async () => {
    await populateTags();
    setupFilterListeners();
    applyFilters();
  });

});
