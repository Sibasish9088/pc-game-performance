
export async function loadGameData() {
  const response = await fetch('../assets/Game_Data.csv');
  const text = await response.text();
  const lines = text.split('\n').filter(line => line.trim() !== '');
  const headers = lines[0].split(',').map(h => h.trim());

  const games = lines.slice(1).map(line => {
    const values = line.split(',').map(val => val.trim());
    const entry = {};
    headers.forEach((h, i) => {
      entry[h] = values[i] || '';
    });
    return entry;
  });

  return games;
}

export async function getGameByTitle(title) {
  const games = await loadGameData();
  return games.find(game => game.Title.toLowerCase() === title.toLowerCase());
}
