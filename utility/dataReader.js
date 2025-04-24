export async function loadGameData() {
  const response = await fetch('../assets/Game_Data.json');
  const games = await response.json();
  return games;
}

export async function getGameByTitle(title) {
  const games = await loadGameData();
  return games[title] || null;
}
