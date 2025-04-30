// homepage-patch.js (patched with observer for lazy-loaded cards)

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
    const gallery = document.getElementById('gameGallery');
    const tryScrollToGame = () => {
      const target = document.getElementById(lastGameId);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'center' });
          target.classList.add('highlight-glow');
          setTimeout(() => target.classList.remove('highlight-glow'), 1500);
        }, 300);
        sessionStorage.removeItem('lastGameClicked');
        return true;
      }
      return false;
    };

    // If already in DOM (first 6 cards), scroll immediately
    if (!tryScrollToGame()) {
      // If not, observe future additions to gameGallery
      const observer = new MutationObserver(() => {
        if (tryScrollToGame()) {
          observer.disconnect();
        }
      });

      if (gallery) {
        observer.observe(gallery, { childList: true, subtree: true });
      }
    }
  }
});
