document.addEventListener('DOMContentLoaded', async () => {
    const HOMEPAGE_PREVIEW_DURATION = 45000;
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
                item.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "center"
                });

                currentFeaturedGame = game;

                heroPlayer.src =
                    game.media.preview;

                renderBenchmark(game);
                startPreviewTimer();

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
                item.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "center"
                });

                currentFeaturedGame = game;

                heroPlayer.src =
                    game.media.preview;

                renderBenchmark(game);
                startPreviewTimer();

            });

            playlist.appendChild(item);

        });

    }

    let currentFeaturedGame = null;
    let previewTimer = null;

    function startPreviewTimer() {

        clearTimeout(previewTimer);

        previewTimer = setTimeout(() => {

            playNextFeaturedGame();

        }, HOMEPAGE_PREVIEW_DURATION);

    }

    function playNextFeaturedGame() {

        const items =
            [...document.querySelectorAll(".playlist-item")];

        const currentIndex =
            items.findIndex(item =>
                item.classList.contains("active")
            );

        if (currentIndex === -1)
            return;

        const nextIndex =
            (currentIndex + 1) % items.length;

        items[nextIndex].click();

    }

    function initializeHeroActions() {

        viewGameplayBtn.addEventListener("click", () => {

            if (!currentFeaturedGame) return;

            window.location.href =
                `game.html?id=${currentFeaturedGame.id}`;

        });

        const benchmarkSection = document.getElementById("benchmarkSection");
        const collapseBenchmarkBtn = document.getElementById("collapseBenchmarkBtn");

        let benchmarkExpanded = false;

        function collapseBenchmark() {

            benchmarkExpanded = false;

            benchmarkSection.classList.remove("visible");

            viewBenchmarkBtn.querySelector("span").textContent =
                "Benchmark Details ▼";

            setTimeout(() => {

                benchmarkSection.style.display = "none";

                document.querySelector(".featured-player")
                    .scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

            }, 550);

        }

        viewBenchmarkBtn.addEventListener("click", (e) => {

            e.preventDefault();

            benchmarkExpanded = !benchmarkExpanded;

            if (benchmarkExpanded) {

                // Show the section, but keep it hidden (opacity:0, translateY)
                benchmarkSection.style.display = "block";

                // First move the camera
                benchmarkSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                // Then reveal the content after the scroll has begun
                setTimeout(() => {
                    benchmarkSection.classList.add("visible");
                }, 550);

            } else {

                collapseBenchmark();

                return;

            }

            viewBenchmarkBtn.querySelector("span").textContent =
                benchmarkExpanded
                    ? "Benchmark Details ▲"
                    : "Benchmark Details ▼";

        });

        collapseBenchmarkBtn.addEventListener("click", (e) => {

            e.preventDefault();

            collapseBenchmark();

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