let gameData = [];

const gameIds = [
    "007-first-light",
    "a-plague-tale-innocence",
    "a-plague-tale-requiem",
    "alan-wake-2",
    "assassins-creed-odyssey",
    "assassins-creed-origins",
    "black-myth-wukong",
    "control",
    "death-stranding",
    "death-stranding-2",
    "ghost-of-tsushima",
    "god-of-war-2018",
    "hellblade-ii-senuas-saga",
    "hogwarts-legacy",
    "hitman-3",
    "horizon-forbidden-west",
    "indiana-jones-and-the-great-circle",
    "marvels-spider-man-remastered",
    "red-dead-redemption-2",
    "resident-evil-4-remake",
    "resident-evil-9-requiem",
    "rise-of-the-tomb-raider-remastered",
    "silent-hill-2-remake",
    "silent-hill-f",
    "the-last-of-us-part-i",
    "the-elder-scrolls-iv-oblivion-remastered",
    "the-witcher-3-next-gen",
    "uncharted-the-lost-legacy"
];

async function loadGameData() {
    try {

        const promises = gameIds.map(async (id) => {

            const response = await fetch(`assets/games/${id}.json`, {
                cache: "no-store"
            });

            if (!response.ok) {
                throw new Error(`Failed to load ${id}.json`);
            }

            return response.json();

        });

        gameData = await Promise.all(promises);

        gameData.sort((a, b) =>
            a.title.localeCompare(b.title)
        );

        return gameData;

    } catch (error) {

        console.error("Error loading game data:", error);

        gameData = [];

        return [];

    }
}