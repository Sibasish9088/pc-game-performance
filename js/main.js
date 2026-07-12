document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('gameGallery');
    const batchSize = 6;
    let loadedCount = 0;

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

    // Load Game_Data.json
    try {
        await loadGameData();
    } catch (error) {
        console.error('Failed to load Game_Data.json', error);

        container.innerHTML = `
            <div class="game-card error-card">
                <h3>Unable to load game library.</h3>
                <p>Please refresh the page.</p>
            </div>
        `;
        return;
    }

    function loadNextBatch() {
        const nextBatch = gameData.slice(
            loadedCount,
            loadedCount + batchSize
        );

        nextBatch.forEach(game => {

            const card = document.createElement('div');
            card.className = 'game-card';

            card.id = `game-id-${game.id}`;

            card.innerHTML = `
                <iframe
                    src="${game.media.preview}"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                    loading="lazy">
                </iframe>

                <h3>${game.title}</h3>
            `;

            card.addEventListener('click', () => {

                sessionStorage.setItem('lastGameClicked', card.id);

                window.location.href = `games/game.html?id=${game.id}`;

            });

            container.appendChild(card);

        });

        loadedCount += nextBatch.length;
    }

    function handleScroll() {

        const nearBottom =
            window.innerHeight +
                window.scrollY >=
            document.body.offsetHeight - 100;

        if (
            nearBottom &&
            loadedCount < gameData.length
        ) {
            loadNextBatch();
        }
    }

    loadNextBatch();

    window.addEventListener('scroll', handleScroll);
});