document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('gameGallery');
  const batchSize = 6;
  let loadedCount = 0;

  function loadNextBatch() {
    const nextBatch = gameData.slice(loadedCount, loadedCount + batchSize);
    nextBatch.forEach(game => {
      const card = document.createElement('div');
      card.className = 'game-card';

      // Generate a clean slug from title (lowercase, hyphen-separated)
      const slug = game.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

      // Set the ID dynamically
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

      // Save last clicked game into sessionStorage
      card.addEventListener('click', function() {
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
