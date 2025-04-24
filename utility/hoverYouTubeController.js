let ytPlayers = {};
let loopCheckers = {};

function attachLoopingControls(container, player) {
  container.addEventListener('mouseenter', () => {
    player.seekTo(0);
    player.playVideo();

    if (!loopCheckers[player.getIframe().id]) {
      loopCheckers[player.getIframe().id] = setInterval(() => {
        const time = player.getCurrentTime();
        if (time >= 45) {
          player.seekTo(0);
        }
      }, 1000);
    }
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
          attachLoopingControls(container, event.target);
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
