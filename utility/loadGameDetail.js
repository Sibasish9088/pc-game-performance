// loadGameDetail.js ✅

function loadGameDetail(gameTitle) {
  fetch("../assets/Game_Data.json")
    .then(res => res.json())
    .then(data => {
      const game = data[gameTitle];
      if (!game) return;

      // Set basic game info
      document.getElementById("game-title").textContent = game.title;
      document.getElementById("release-date").textContent = game.release;
      document.getElementById("description").textContent = game.description;
      document.getElementById("video-frame").src = game.youtube;

      // Tags
      const tagContainer = document.getElementById("tag-container");
      tagContainer.innerHTML = ""; // Clear old
      game.tags.forEach(tag => {
        const span = document.createElement("span");
        span.className = "tag";
        span.textContent = tag;
        tagContainer.appendChild(span);
      });

      // FPS Chart
      const ctx = document.getElementById("fpsChart")?.getContext("2d");
      if (ctx && game.fps) {
        new Chart(ctx, {
          type: "bar",
          data: {
            labels: ["1080p", "1440p"],
            datasets: [{
              label: "Average FPS",
              data: [game.fps["1080p"], game.fps["1440p"]],
              backgroundColor: ["#00ffffaa", "#00ffaa88"]
            }]
          },
          options: {
            indexAxis: 'y',
            responsive: true,
            plugins: {
              legend: { display: false }
            },
            scales: {
              x: {
                beginAtZero: true,
                title: { display: true, text: "FPS", color: "#00ffff" },
                ticks: { color: "#fff" }
              },
              y: {
                ticks: { color: "#fff" }
              }
            }
          }
        });
      }

      // Insights Section
      const fps1080 = game.fps["1080p"] || 0;
      let badgeText = "Challenging";
      if (fps1080 >= 90) badgeText = "Ultra Smooth";
      else if (fps1080 >= 60) badgeText = "Optimal";
      else if (fps1080 >= 40) badgeText = "Playable";

      document.getElementById("fps-insight-content").innerHTML = `
        <p><strong>Your PC FPS @1080p:</strong> ${fps1080} FPS</p>
        <p><strong>Playability:</strong> <span class="badge">${badgeText}</span></p>
      `;

      // Comparison Section
      document.getElementById("comparison-content").innerHTML = `
        <h3>Comparison</h3>
        <p>Your PC (RTX 3060 + i5-12400): ${fps1080} FPS</p>
        <p>High-End PC (RTX 4070 Super + i7-13700K): 75 FPS</p>
        <p>Gaming Laptop (RTX 4060 Laptop GPU): 45 FPS</p>
      `;
    })
    .catch(err => console.error("Failed to load game data:", err));
}
