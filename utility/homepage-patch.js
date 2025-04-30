// homepage-patch.js (fully patched: observer + auto-trigger scroll to load batches)

document.addEventListener('DOMContentLoaded', function () {
  const gameCards = document.querySelectorAll('.game-card');

  // Step 1: Attach click listeners to all game cards
  gameCards.forEach(card => {
    card.addEventListener('click', function () {
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

    if (!tryScrollToGame()) {
      const observer = new MutationObserver(() => {
        if (tryScrollToGame()) {
          observer.disconnect();
          clearInterval(scrollSim); // stop scrolling once found
        }
      });

      if (gallery) {
        observer.observe(gallery, { childList: true, subtree: true });
      }

      // Actively simulate scroll to bottom every 300ms
      const scrollSim = setInterval(() => {
        window.scrollBy(0, 200); // Scroll downward to trigger lazy-load
      }, 300);
    }
  }
});
