document.addEventListener('DOMContentLoaded', async () => {
    const HOMEPAGE_PREVIEW_DURATION = 90000;
    const playlist = document.getElementById('featuredPlaylist');
    const heroPlayer = document.getElementById('featuredGameplay');
    let ytPlayer = null;
    let ytApiReady = false;
    const viewBenchmarkBtn = document.getElementById("viewBenchmarkBtn");
    const viewGameplayBtn = document.getElementById("viewGameplayBtn");
    const backToPreviewsBtn = document.getElementById("backToPreviews");
    const gameplaySectionTitle = document.querySelector("#gameplaySectionTitle span");
    const homepageState = {
        mode: "preview",
        playlistView: "preview",
        heroLocked: false,
        selectedGame: null,
        selectedVideoIndex: 0
    };

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

    window.onYouTubeIframeAPIReady = function () {

        ytApiReady = true;

        ytPlayer = new YT.Player("featuredGameplay", {

            events: {

                onReady: () => {

                    console.log("YouTube API Ready");

                },

                onStateChange: handlePlayerStateChange
            }

        });

    };

    function handlePlayerStateChange(event) {

        if (event.data !== YT.PlayerState.ENDED)
            return;

        if (homepageState.mode !== "gameplay")
            return;

        const gallery = homepageState.selectedGame?.media?.gallery;

        if (!gallery)
            return;

        const nextIndex = homepageState.selectedVideoIndex + 1;

        if (nextIndex >= gallery.length)
            return;

        document.querySelectorAll("#featuredPlaylist .playlist-item")[nextIndex]?.click();

    }

    document.querySelectorAll('.component-card').forEach((card, index) => {
        if (index < componentLabels.length) {
            card.id = componentLabels[index];
        }
    });

    function transitionBenchmark(game) {

        const content = document.querySelector(".benchmark-content");

        content.classList.add("benchmark-changing");

        setTimeout(() => {

            renderBenchmark(game);

            requestAnimationFrame(() => {
                content.classList.remove("benchmark-changing");
            });

        }, 380);

    }

    function renderPreviewPlaylist() {

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
                const pageX = window.scrollX;
                const pageY = window.scrollY;

                item.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "nearest"
                });

                requestAnimationFrame(() => {
                    window.scrollTo(pageX, pageY);
                });
            }

            function initializeHomepagePreview() {

                const firstItem =
                    document.querySelector(".playlist-item");

                if (!firstItem)
                    return;

                firstItem.click();

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
                const pageX = window.scrollX;
                const pageY = window.scrollY;

                item.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "nearest"
                });

                requestAnimationFrame(() => {
                    window.scrollTo(pageX, pageY);
                });

                if (!homepageState.heroLocked) {
                    currentFeaturedGame = game;

                    heroPlayer.src =
                        game.media.preview;

                    transitionBenchmark(game);
                    startPreviewTimer();
                }

            });

            playlist.appendChild(item);

        });

    }

    function buildGameplayPlaylist(game) {

        if (!game?.media?.gallery)
            return;

        playlist.innerHTML = "";

        game.media.gallery.forEach((video, index) => {

            const item = document.createElement("div");

            item.className = "playlist-item";

            if (index === 0) {

                item.classList.add("active");

            }

            item.innerHTML = `

            <img
                src="https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg"
                alt="Part ${String(video.part).padStart(2, "0")}">

            <div class="playlist-info">

                <p class="playlist-title">

                    Part ${String(video.part).padStart(2, "0")}

                </p>

            </div>

        `;

            item.addEventListener("click", () => {

                document
                    .querySelectorAll(".playlist-item")
                    .forEach(card =>
                        card.classList.remove("active"));

                item.classList.add("active");
                const pageX = window.scrollX;
                const pageY = window.scrollY;

                item.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "nearest"
                });

                requestAnimationFrame(() => {
                    window.scrollTo(pageX, pageY);
                });

                homepageState.selectedVideoIndex = index;

                ytPlayer.loadVideoById(video.videoId);

            });

            playlist.appendChild(item);

        });

    }

    function buildGameplayLibrary() {

        const context = document.getElementById("playlistContext");
        context.classList.add("visible");
        context.querySelector("h3").textContent = "Gameplay Library";
        context.querySelector("span").textContent = "Browse captured walkthroughs";

        playlist.innerHTML = "";

        const gameplayGames =
            gameData.filter(game =>
                game.media &&
                game.media.gallery &&
                game.media.gallery.length > 0
            );

        gameplayGames.forEach((game, index) => {

            const item =
                document.createElement("div");

            item.className = "playlist-item";

            if (
                homepageState.selectedGame &&
                homepageState.selectedGame.id === game.id
            ) {

                item.classList.add("active");

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

                loadSelectedGame(game);

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

        backToPreviewsBtn.addEventListener("click", () => {

            exitGameplayMode();

        });

        viewGameplayBtn.addEventListener("click", () => {

            if (homepageState.mode === "preview") {

                if (!currentFeaturedGame)
                    return;

                const gallery = currentFeaturedGame.media?.gallery ?? [];

                if (gallery.length === 0) {

                    showGameplayUnavailable();

                    return;

                }

                loadSelectedGame(currentFeaturedGame);

                return;
            }

            if (homepageState.playlistView === "gameplay") {

                homepageState.playlistView = "preview";

                viewGameplayBtn.querySelector("span").textContent = "Continue Watching";

                renderPreviewPlaylist();

                return;

            }

            homepageState.playlistView = "gameplay";

            viewGameplayBtn.querySelector("span").textContent = "Other Gameplays";

            loadGameplayPlaylist(homepageState.selectedGame);

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

    /* ==========================================================
        Desktop Focus Workspace Transition Engine
    ========================================================== */

    const homepageSection = document.querySelector(".my-pc-section");
    const focusWorkspace = document.getElementById("focusWorkspace");
    const focusClose = document.querySelector(".focus-close");

    function showFocusWorkspace() {

        homepageSection.classList.add("workspace-hidden");

        setTimeout(() => {

            focusWorkspace.style.display = "block";

            requestAnimationFrame(() => {
                focusWorkspace.classList.add("visible");
            });

        }, 450);
    }

    function hideFocusWorkspace() {

        focusWorkspace.classList.remove("visible");

        setTimeout(() => {

            focusWorkspace.style.display = "none";

            homepageSection.classList.remove("workspace-hidden");

        }, 450);
    }

    function focusWorkspaceTransition() {
        focusClose.addEventListener("click", hideFocusWorkspace);

        document.querySelectorAll(
            ".component-card, .highlight-card, .trust-item"
        ).forEach(card => {

            card.addEventListener("click", showFocusWorkspace);

        });
    }

    function loadSelectedGame(game) {

        clearTimeout(previewTimer);
        homepageState.selectedGame = game;
        homepageState.mode = "gameplay";
        homepageState.playlistView = "gameplay";
        homepageState.heroLocked = true;
        backToPreviewsBtn.classList.add("visible");
        viewGameplayBtn.querySelector("span").textContent = "Other Gameplays";
        gameplaySectionTitle.textContent = `${game.title} Gameplay`;
        homepageState.selectedVideoIndex = 0;
        loadGameplayHero(game);
        loadGameplayPlaylist(game);
        transitionBenchmark(game);

    }

    function exitGameplayMode() {

        homepageState.mode = "preview";
        homepageState.heroLocked = false;
        homepageState.selectedGame = null;
        homepageState.selectedVideoIndex = 0;
        backToPreviewsBtn.classList.remove("visible");
        viewGameplayBtn.querySelector("span").textContent = "View Gameplay";
        gameplaySectionTitle.textContent = "My Gameplays";
        renderPreviewPlaylist();
        document.querySelector("#featuredPlaylist .playlist-item")?.click();
    }

    function showGameplayUnavailable() {

        const overlay = document.createElement("div");

        overlay.className = "gameplay-unavailable-overlay";

        overlay.innerHTML = `
        <div class="gameplay-unavailable-card">

            <h2>Gameplay Capture</h2>

            <p>Full gameplay coming soon.</p>

            <span>Returning to Preview...</span>

        </div>
    `;

        document.body.appendChild(overlay);

        requestAnimationFrame(() => {
            overlay.classList.add("visible");
        });

        setTimeout(() => {

            overlay.classList.remove("visible");

            setTimeout(() => {

                overlay.remove();

            }, 350);

        }, 2200);

    }

    function loadGameplayHero(game) {

        if (!game || !game.media) return;

        // Reset playback timer because the user has
        // intentionally selected a game.
        clearTimeout(previewTimer);

        // Start from the gameplay entry point.
        // If gameplay is unavailable, gracefully
        // fall back to the homepage preview.
        heroPlayer.style.opacity = "0.35";

        setTimeout(() => {

            const gameplayUrl =
                game.media.gameplay ??
                game.media.preview;

            const separator =
                gameplayUrl.includes("?") ? "&" : "?";

            heroPlayer.src =
                `${gameplayUrl}${separator}enablejsapi=1&playsinline=1&rel=0`;

            heroPlayer.onload = () => {

                heroPlayer.style.opacity = "1";

            };

        }, 180);

    }

    function loadGameplayPlaylist(game) {

        document
            .getElementById("playlistContext")
            .classList.remove("visible");

        buildGameplayPlaylist(game);

        syncPlaylistHeight();

        requestAnimationFrame(() => {

            const items =
                document.querySelectorAll("#featuredPlaylist .playlist-item");

            items.forEach(item =>
                item.classList.remove("active"));

            const activeItem =
                items[homepageState.selectedVideoIndex];

            if (!activeItem)
                return;

            activeItem.classList.add("active");

            activeItem.scrollIntoView({
                behavior: "smooth",
                block: "center",
                inline: "nearest"
            });

        });

    }

    // Load Game Data
    try {
        await loadGameData();
        renderPreviewPlaylist();
        document.querySelector("#featuredPlaylist .playlist-item")?.click();
        syncPlaylistHeight();
        window.addEventListener("resize", () => {

            syncPlaylistHeight();

        });
        initializeHeroActions();
        focusWorkspaceTransition();

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