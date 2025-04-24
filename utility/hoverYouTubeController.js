
let ytPlayers = {};
let resetTimers = {};

function attachHoverControls(container, player) {
  container.addEventListener('mouseenter', () => {
    player.seekTo(0);
    player.playVideo();

    resetTimers[player.getIframe().id] = setTimeout(() => {
      if (player.getPlayerState() === YT.PlayerState.PLAYING) {
        player.seekTo(0);
      }
    }, 45000);
  });

  container.addEventListener('mouseleave', () => {
    player.pauseVideo();
    player.seekTo(0);
    clearTimeout(resetTimers[player.getIframe().id]);
  });
}

function loadYouTubePlayers() {
  const containers = document.querySelectorAll('.video-frame');

  containers.forEach((container, index) => {
    const iframe = container.querySelector('iframe');
    const id = `yt-player-${index}`;
    iframe.id = id;

    ytPlayers[id] = new YT.Player(id, {
      events: {
        onReady: (event) => {
          attachHoverControls(container, event.target);
        }
      }
    });
  });
}

function injectYouTubeIframeAPI() {
  if (window.YT && typeof YT.Player === "function") {
    loadYouTubePlayers();
  } else {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      setTimeout(loadYouTubePlayers, 100);
    };
  }
}

document.addEventListener("DOMContentLoaded", () => {
  injectYouTubeIframeAPI();

  if (window.YT && typeof YT.Player === "function") {
    window.onYouTubeIframeAPIReady();
  }
});
