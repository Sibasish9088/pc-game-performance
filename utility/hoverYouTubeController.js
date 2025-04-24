let ytPlayers = {};

function attachLoopingControls(container, player) {
  container.addEventListener('mouseenter', () => {
    player.loadVideoById({
      videoId: player.getVideoData().video_id,
      startSeconds: 0,
      endSeconds: 45,
    });
    player.playVideo();
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
        },
        onStateChange: (event) => {
          if (event.data === YT.PlayerState.ENDED) {
            event.target.seekTo(0);
          }
        },
      },
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
