document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('gameGallery');
  const batchSize = 6;
  let loadedCount = 0;

  // ✅ Assign component IDs dynamically
  const componentLabels = ['cpu', 'motherboard', 'gpu', 'ram', 'storage', 'psu', 'case', 'fans'];
  document.querySelectorAll('.component-card').forEach((card, index) => {
    card.id = componentLabels[index];
  });

  function loadNextBatch() {
    const nextBatch = gameData.slice(loadedCount, loadedCount + batchSize);
    nextBatch.forEach(game => {
      const card = document.createElement('div');
      card.className = 'game-card';

      const slug = game.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      card.id = `game-id-${slug}`;

      card.innerHTML = `
        <iframe
          src="${game.preview}"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          loading="lazy">
        </iframe>
        <h3><a href="${game.detailPage}">${game.title}</a></h3>
      `;

      card.addEventListener('click', function () {
        sessionStorage.setItem('lastGameClicked', card.id);
      });

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
});
