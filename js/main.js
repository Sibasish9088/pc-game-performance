
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
});
