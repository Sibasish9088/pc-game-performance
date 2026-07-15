document.addEventListener('DOMContentLoaded', async () => {
    const playlist = document.getElementById('featuredPlaylist');
    const heroPlayer = document.getElementById('featuredGameplay');
    const nowPlaying = document.getElementById('featuredTitle');

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

                heroPlayer.src =
                    game.media.preview;

                nowPlaying.textContent =
                    game.title;

            }

            item.innerHTML = `

            <img
                src="${game.media.thumbnail}"
                alt="${game.title}">

            <div class="playlist-info">

                <h3>${game.title}</h3>

                <p>SPCBM Verified</p>

            </div>

        `;

            item.addEventListener("click", () => {

                document
                    .querySelectorAll(".playlist-item")
                    .forEach(card => card.classList.remove("active"));

                item.classList.add("active");

                heroPlayer.src =
                    game.media.preview;

                nowPlaying.textContent =
                    game.title;

            });

            playlist.appendChild(item);

        });

    }

    // Load Game Data
    try {
        await loadGameData();
        buildFeaturedPlaylist();

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