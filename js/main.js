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
                .slice(0, 6);

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

        viewBenchmarkBtn.addEventListener("click", (e) => {

            e.preventDefault();

            console.log("Benchmark Details clicked");

        });

    }

    // Load Game Data
    try {
        await loadGameData();
        buildFeaturedPlaylist();
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