// refresh-gallery-videos.js ✅ Modularized

function refreshIndividualVideos() {
  const videos = document.querySelectorAll("#gameGallery iframe, #gameGallery video");

  videos.forEach((video, index) => {
    setTimeout(() => {
      video.style.transition = "opacity 0.5s ease";
      video.style.opacity = "0";

      setTimeout(() => {
        const src = video.getAttribute('src');
        video.setAttribute('src', src);
        video.style.opacity = "1";
      }, 500);
    }, index * 100);
  });
}

// Refresh videos every 45 seconds
timerRefreshVideos = setInterval(refreshIndividualVideos, 45000);