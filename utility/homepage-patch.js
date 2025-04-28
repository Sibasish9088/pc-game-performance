// homepage-patch.js

document.addEventListener('DOMContentLoaded', function() {
  const gameCards = document.querySelectorAll('.game-card');

  // Step 1: Attach click listeners to all game cards
  gameCards.forEach(card => {
    card.addEventListener('click', function() {
      const gameId = this.getAttribute('id');
      if (gameId) {
        sessionStorage.setItem('lastGameClicked', gameId);
      }
    });
  });

  // Step 2: Check if coming back from a gameplay page
  const lastGameId = sessionStorage.getItem('lastGameClicked');
  if (lastGameId) {
    const targetThumbnail = document.getElementById(lastGameId);
    if (targetThumbnail) {
      setTimeout(() => {
        targetThumbnail.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetThumbnail.classList.add('highlight-glow');
        setTimeout(() => {
          targetThumbnail.classList.remove('highlight-glow');
        }, 1500);
      }, 300);
    }
    sessionStorage.removeItem('lastGameClicked');
  }
});
