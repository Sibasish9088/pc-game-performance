// scrollHelper.js

export function easeScrollToElement(el, offset = 0, duration = 800) {
  const targetY = el.getBoundingClientRect().top + window.scrollY + offset;
  const startY = window.scrollY;
  const diff = targetY - startY;
  const startTime = performance.now();

  function step(currentTime) {
    const time = Math.min(1, (currentTime - startTime) / duration);
    const eased = 0.5 * (1 - Math.cos(Math.PI * time)); // easeInOutSine
    window.scrollTo(0, startY + diff * eased);
    if (time < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export function scrollToLastGameplay() {
  const lastGameId = sessionStorage.getItem('lastGameClicked');
  if (!lastGameId) return;

  const gallery = document.getElementById('gameGallery');
  const tryScrollToGame = () => {
    const target = document.getElementById(lastGameId);
    if (target) {
      setTimeout(() => {
        document.body.style.transition = 'opacity 0.3s ease';
        document.body.style.opacity = '0.3';

        setTimeout(() => {
          easeScrollToElement(target, -window.innerHeight * 0.2);
          target.classList.add('highlight-glow');

          setTimeout(() => {
            target.classList.remove('highlight-glow');
            document.body.style.opacity = '1';
          }, 1500);
        }, 300);
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
        clearInterval(scrollSim);
      }
    });

    if (gallery) {
      observer.observe(gallery, { childList: true, subtree: true });
    }

    const scrollSim = setInterval(() => {
      window.scrollBy(0, 200);
    }, 300);

    setTimeout(() => {
      clearInterval(scrollSim);
      observer.disconnect();
      sessionStorage.removeItem('lastGameClicked');
    }, 10000);
  }
}

export function scrollToLastComponent() {
  const lastComponentId = sessionStorage.getItem('lastComponentViewed');
  if (!lastComponentId) return;

  const target = document.getElementById(lastComponentId);
  if (target) {
    setTimeout(() => {
      easeScrollToElement(target, -window.innerHeight * 0.2);
      target.classList.add('highlight-glow');

      setTimeout(() => {
        target.classList.remove('highlight-glow');
      }, 1500);
    }, 300);
  }
  sessionStorage.removeItem('lastComponentViewed');
}
