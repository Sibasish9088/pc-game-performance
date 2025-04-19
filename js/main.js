
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('gameGallery');
  if (!gameData || !container) return;

  gameData.forEach(game => {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.innerHTML = `
      <div class="game-card">
        <iframe width="100%" height="215"
          src="${game.preview}"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
        <h3><a href="${game.fullVideo}" target="_blank">${game.title}</a></h3>
      </div>
    `;
    container.appendChild(card);
  });
});
    