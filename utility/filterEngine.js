import { loadGameData } from './dataReader.js';

export async function getFilteredGames(filters) {
  const allGames = await loadGameData();

  return Object.values(allGames).filter(game => {
    // 🔍 Search filter
    const matchesSearch = filters.search === "" ||
      game.title.toLowerCase().includes(filters.search) ||
      game.tags.some(tag => tag.toLowerCase().includes(filters.search));

    // 🎯 FPS filter (OR logic if multiple selected)
    const avgFPS = (game.fps["1080p"] + game.fps["1440p"]) / 2;
    const matchesFPS = filters.fps.length === 0 ||
      filters.fps.some(min => avgFPS >= min);

    // 🏷️ Tag filter (ALL selected tags must be present)
    const matchesTags = filters.tags.length === 0 ||
      filters.tags.every(tag => game.tags.includes(tag));

    return matchesSearch && matchesFPS && matchesTags;
  });
}
