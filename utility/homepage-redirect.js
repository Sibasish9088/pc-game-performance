// homepage-patch.js (refactored to use scrollHelper.js)

import { easeScrollToElement, scrollToLastComponent, scrollToLastGameplay } from './scrollHelper.js';

document.addEventListener('DOMContentLoaded', function () {
  const gameCards = document.querySelectorAll('.game-card');
  const componentCards = document.querySelectorAll('.component-card');

  // Attach click listeners to game cards
  gameCards.forEach(card => {
    card.addEventListener('click', function () {
      const gameId = this.getAttribute('id');
      if (gameId) {
        sessionStorage.setItem('lastGameClicked', gameId);
      }
    });
  });

  // Attach click listeners to PC component cards
  componentCards.forEach(card => {
    card.addEventListener('click', function () {
      const compId = this.getAttribute('id');
      if (compId) {
        sessionStorage.setItem('lastComponentViewed', compId);
      }
    });
  });

  // Execute scroll recovery logic
  scrollToLastGameplay();
  scrollToLastComponent();
});
