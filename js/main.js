document.addEventListener('DOMContentLoaded', async () => {
    const playlist = document.getElementById('featuredPlaylist');
    const heroPlayer = document.getElementById('featuredGameplay');
    const viewBenchmarkBtn = document.getElementById("viewBenchmarkBtn");
    const viewGameplayBtn = document.getElementById("viewGameplayBtn");

    // Assign component IDs dynamically
    const componentLabels = [
        'cpu',
        'motherboard',
        'gpu',
        'ram',
        'storage',
        'psu',
        'case',
        'fans'
    ];

    document.querySelectorAll('.component-card').forEach((card, index) => {
        if (index < componentLabels.length) {
            card.id = componentLabels[index];
        }
    });

    function buildFeaturedPlaylist() {

        const featuredGames =
            [...gameData]
                .sort(() => Math.random() - 0.5)
                .slice(0, 28);

        playlist.innerHTML = "";

        featuredGames.forEach((game, index) => {

            const item =
                document.createElement("div");

            item.className =
                "playlist-item";

            if (index === 0) {

                item.classList.add("active");

                currentFeaturedGame = game;

                heroPlayer.src =
                    game.media.preview;

            }

            item.innerHTML = `

                <img
                    src="${game.media.thumbnail}"
                    alt="${game.title}">

                <div class="playlist-info">

                    <p class="playlist-title">
                        ${game.title}
                    </p>

                </div>

            `;

            item.addEventListener("click", () => {

                document
                    .querySelectorAll(".playlist-item")
                    .forEach(card => card.classList.remove("active"));

                item.classList.add("active");

                currentFeaturedGame = game;

                heroPlayer.src =
                    game.media.preview;

            });

            playlist.appendChild(item);

        });

    }

    let currentFeaturedGame = null;

    function initializeHeroActions() {

        viewGameplayBtn.addEventListener("click", () => {

            if (!currentFeaturedGame) return;

            window.location.href =
                `game.html?id=${currentFeaturedGame.id}`;

        });

        const benchmarkSection = document.getElementById("benchmarkSection");

        let benchmarkExpanded = false;

        viewBenchmarkBtn.addEventListener("click", (e) => {

            e.preventDefault();

            benchmarkExpanded = !benchmarkExpanded;

            benchmarkSection.style.display =
                benchmarkExpanded ? "block" : "none";

            viewBenchmarkBtn.querySelector("span").textContent =
                benchmarkExpanded
                    ? "Benchmark Details ▲"
                    : "Benchmark Details ▼";

        });

    }

    function syncPlaylistHeight() {

        const hero = document.querySelector(".featured-player");
        const playlist = document.querySelector(".featured-playlist");

        if (!hero || !playlist) return;

        playlist.style.height = `${hero.offsetHeight - 2}px`;
    }

    // Load Game Data
    try {
        await loadGameData();
        buildFeaturedPlaylist();
        syncPlaylistHeight();
        window.addEventListener("resize", syncPlaylistHeight);
        initializeHeroActions();

    } catch (error) {
        console.error("Featured Gameplay initialization failed:", error);

        container.innerHTML = `
            <div class="game-card error-card">
                <h3>Unable to load game library.</h3>
                <p>Please refresh the page.</p>
            </div>
        `;
        return;
    }

});