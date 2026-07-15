async function loadGameDetail(gameId) {

  try {

    const response = await fetch(
      `../assets/games/${gameId}.json`,
      {
        cache: "no-store"
      }
    );

    if (!response.ok) {
      throw new Error(
        `Unable to load ${gameId}.json`
      );
    }

    const game = await response.json();

    document.title =
      `${game.title} | Siba PC Benchmark`;

    document.getElementById("game-title").textContent =
      game.title;

    document.getElementById("release-date").textContent =
      game.release;

    document.getElementById("description").textContent =
      game.description;

    document.getElementById("developer").textContent =
      game.developer;

    document.getElementById("publisher").textContent =
      game.publisher;

    document.getElementById("engine").textContent =
      game.engine;

    document.getElementById("preset").textContent =
      game.benchmark.preset;

    document.getElementById("raytracing").textContent =
      game.benchmark.rayTracing
        ? "Enabled"
        : "Disabled";

    document.getElementById("dlss").textContent =
      game.benchmark.dlss;

    document.getElementById("video-frame").src =
      game.media.youtube;

    //---------------------------------------
    // Tags
    //---------------------------------------

    const tagContainer =
      document.getElementById("tag-container");

    tagContainer.innerHTML = "";

    game.tags.forEach(tag => {

      const span =
        document.createElement("span");

      span.className = "tag";

      span.textContent = tag;

      tagContainer.appendChild(span);

    });

    //---------------------------------------
    // Benchmark Notes
    //---------------------------------------

    const notes =
        document.getElementById(
            "fps-insight-content"
        );

    notes.innerHTML = `
    <div class="info-list">

        ${game.benchmarkNotes.map(note => `

            <div class="info-row">
                <span>${note}</span>
            </div>

        `).join("")}

    </div>
    `;

    //---------------------------------------
    // Hardware Requirements
    //---------------------------------------

    const comparison =
        document.getElementById(
            "comparison-content"
        );

    comparison.innerHTML = `

    <div class="info-list">

        <div class="info-row">

            <span>Minimum VRAM</span>

            <span>${game.requirements.minimumVRAM}</span>

        </div>

        <div class="info-row">

            <span>Recommended VRAM</span>

            <span>${game.requirements.recommendedVRAM}</span>

        </div>

        <div class="info-row">

            <span>CPU Intensive</span>

            <span>${game.requirements.cpuHeavy ? "Yes" : "No"}</span>

        </div>

        <div class="info-row">

            <span>GPU Intensive</span>

            <span>${game.requirements.gpuHeavy ? "Yes" : "No"}</span>

        </div>

    </div>

    `;

    //---------------------------------------
    // Performance
    //---------------------------------------

    const fps1080 = game.fps["1080p"];
    const fps1440 = game.fps["1440p"];
    const fps2160 = game.fps["2160p"];

    // Display FPS values
    document.getElementById("fps1080").textContent = `${fps1080} FPS`;
    document.getElementById("fps1440").textContent = `${fps1440} FPS`;
    document.getElementById("fps2160").textContent = `${fps2160} FPS`;

    // Dynamically determine scale
    const maxFPS = Math.max(
        fps1080,
        fps1440,
        fps2160,
        120
    );

    // Progress bar widths
    document.getElementById("bar1080").style.width =
        `${(fps1080 / maxFPS) * 100}%`;

    document.getElementById("bar1440").style.width =
        `${(fps1440 / maxFPS) * 100}%`;

    document.getElementById("bar2160").style.width =
        `${(fps2160 / maxFPS) * 100}%`;

    // Playability colours
    function applyBarStyle(barId, fps) {

        const bar = document.getElementById(barId);

        bar.classList.remove(
            "fps-outstanding",
            "fps-excellent",
            "fps-playable",
            "fps-limited"
        );

        if (fps >= 160) {

            bar.classList.add("fps-outstanding");

        } else if (fps >= 100) {

            bar.classList.add("fps-excellent");

        } else if (fps >= 60) {

            bar.classList.add("fps-playable");

        } else {

            bar.classList.add("fps-limited");

        }

    }

    applyBarStyle("bar1080", fps1080);
    applyBarStyle("bar1440", fps1440);
    applyBarStyle("bar2160", fps2160);

  }
  catch (error) {

    console.error(error);

    document.getElementById("game-title").textContent =
      "Unable to load game.";

    document.getElementById("description").textContent =
      error.message;

  }

}