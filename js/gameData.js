const gameData = [
  {
    title: "A Plague Tale: Innocence",
    preview: "https://www.youtube.com/embed/yzyfAEtOyYk?autoplay=1&mute=1&controls=0&start=0&end=45",
    detailPage: "games/a-plague-tale-innocence.html",
    fps1080p: "80–100",
    fps1440p: "60–75",
    notes: "RTX not native, buttery smooth"
  },
  {
    title: "Alan Wake 2",
    preview: "https://www.youtube.com/embed/XAOIPgdrAcI?autoplay=1&mute=1&controls=0&start=0&end=45",
    detailPage: "games/alan-wake-2.html",
    fps1080p: "40-60",
    fps1440p: "40-60",
    notes: "Ultra is heavy; medium is smooth"
  },
  {
    title: "A Plague Tale: Requiem",
    preview: "https://www.youtube.com/embed/fYGuWlxkB1Q?autoplay=1&mute=1&controls=0&start=0&end=45",
    detailPage: "games/a-plague-tale-requiem.html",
    fps1080p: "50–60",
    fps1440p: "35–45",
    notes: "RTX ON is very heavy, DLSS required"
  },
  {
    title: "Assassins Creed : Odyssey",
    preview: "https://www.youtube.com/embed/oEFN3bvgruo?autoplay=1&mute=1&controls=0&start=0&end=45",
    detailPage: "games/assassins-creed-odyssey.html",
    fps1080p: "75-100",
    fps1440p: "60-70",
    notes: "Demanding CPU zones, smooth overall"
  },
  {
    title: "Assassins Creed : Origins",
    preview: "https://www.youtube.com/embed/yz1nno-A12E?autoplay=1&mute=1&controls=0&start=0&end=45",
    detailPage: "games/assassins-creed-origins.html",
    fps1080p: "100-150",
    fps1440p: "75-120",
    notes: "Smooth, less CPU-intensive than Odyssey"
  },
  {
    title: "Black Myth: Wukong ",
    preview: "https://www.youtube.com/embed/tg7VFyws5W4?autoplay=1&mute=1&controls=0&start=0&end=45",
    detailPage: "games/black-myth-wukong.html",
    fps1080p: "50–60",
    fps1440p: "35–45",
    notes: "RTX showcase title, DLSS a must"
  },
  {
    title: "Control",
    preview: "https://www.youtube.com/embed/G26Quobv3cQ?autoplay=1&mute=1&controls=0&start=0&end=45",
    detailPage: "games/control.html",
    fps1080p: "60-100",
    fps1440p: "50-70",
    notes: "DLSS boosts ray-traced visuals"
  },
  {
    title: "Death Stranding",
    preview: "https://www.youtube.com/embed/ub1fzJavV8c?autoplay=1&mute=1&controls=0&start=0&end=45",
    detailPage: "games/death-stranding.html",
    fps1080p: "60-100",
    fps1440p: "60-100",
    notes: "Ultra is smooth in 1440p"
  },
  {
    title: "Ghost of Tsushima ",
    preview: "https://www.youtube.com/embed/BVPnRcCJSb8?autoplay=1&mute=1&controls=0&start=0&end=45",
    detailPage: "games/ghost-of-tsushima.html",
    fps1080p: "60–70",
    fps1440p: "45–55",
    notes: "DLSS will help at 1440p"
  },
  {
    title: "God of War (2018)",
    preview: "https://www.youtube.com/embed/KFrELhacBTc?autoplay=1&mute=1&controls=0&start=0&end=45",
    detailPage: "games/god-of-war-2018.html",
    fps1080p: "65–75",
    fps1440p: "50–60",
    notes: "DLSS Quality, no native RTX"
  },
  {
    title: "Hellblade II : Senua's Saga",
    preview: "https://www.youtube.com/embed/nKZnUvnFwRE?autoplay=1&mute=1&controls=0&start=0&end=45",
    detailPage: "games/hellblade-2-senuas-saga.html",
    fps1080p: "50–60",
    fps1440p: "35–45",
    notes: "RT & cinematic realism = heavier"
  },
  {
    title: "Hogwarts Legacy",
    preview: "https://www.youtube.com/embed/oyphHT56sI0?autoplay=1&mute=1&controls=0&start=0&end=45",
    detailPage: "games/hogwarts-legacy.html",
    fps1080p: "45-60",
    fps1440p: "45-60",
    notes: "RTX ON is very heavy, DLSS required"
  },
  {
    title: "Horizon: Forbidden West ",
    preview: "https://www.youtube.com/embed/kWkTHSKKl7U?autoplay=1&mute=1&controls=0&start=0&end=45",
    detailPage: "games/horizon-forbidden-west.html",
    fps1080p: "55–65",
    fps1440p: "40–50",
    notes: "RTX + DLSS smooths open-world stutters"
  },
  {
    title: "Resident Evil 4 : Remake",
    preview: "https://www.youtube.com/embed/KZ6WyoNmiIM?autoplay=1&mute=1&controls=0&start=0&end=45",
    detailPage: "games/resident-evil-4-remake.html",
    fps1080p: "50-60",
    fps1440p: "50-60",
    notes: "DLSS quality ON, no major dips"
  },
  {
    title: "Rise of the Tomb Raider Reemastered",
    preview: "https://www.youtube.com/embed/kD6On6EZLwo?autoplay=1&mute=1&controls=0&start=0&end=45",
    detailPage: "games/rise-of-the-tomb-raider-remastered.html",
    fps1080p: "50-60",
    fps1440p: "45-60",
    notes: "Smooth RTX with DLSS Performance"
  },
  {
    title: "Silent Hill 2 Remake",
    preview: "https://www.youtube.com/embed/0Xzjad2TP3g?autoplay=1&mute=1&controls=0&start=0&end=45",
    detailPage: "games/silent-hill-2-remake.html",
    fps1080p: "50–60",
    fps1440p: "35–45",
    notes: "RTX lighting is demanding"
  },
  {
    title: "The Last of Us Part I",
    preview: "https://www.youtube.com/embed/A-Y4Ibqc8a8?autoplay=1&mute=1&controls=0&start=0&end=45",
    detailPage: "games/the-last-of-us-part-1.html",
    fps1080p: "55–65",
    fps1440p: "40–50",
    notes: "Patch-optimized with DLSS"
  },
  {
    title: "The Witcher 3 (Next Gen)",
    preview: "https://www.youtube.com/embed/pdA-ON1QhbQ?autoplay=1&mute=1&controls=0&start=0&end=45",
    detailPage: "games/the-witcher-3-next-gen.html",
    fps1080p: "45–55",
    fps1440p: "30–40",
    notes: "RTX Ultra = demanding, DLSS Perf helps"
  },
];