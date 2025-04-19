const gameData = [
  {
    title: "A Plague Tale: Innocence",
    thumbnail: "https://i.ytimg.com/vi/yzyfAEtOyYk/hqdefault.jpg",
    preview: "https://www.youtube.com/embed/yzyfAEtOyYk?autoplay=1&mute=1&controls=0&start=0&end=45",
    fullVideo: "https://www.youtube.com/watch?v=yzyfAEtOyYk",
    fps1080p: "80–100",
    fps1440p: "60–75",
    notes: "RTX not native, buttery smooth"
  },
  {
    title: "Alan Wake 2",
    thumbnail: "https://i.ytimg.com/vi/XAOIPgdrAcI/hqdefault.jpg",
    preview: "https://www.youtube.com/embed/XAOIPgdrAcI?autoplay=1&mute=1&controls=0&start=0&end=45",
    fullVideo: "https://www.youtube.com/watch?v=XAOIPgdrAcI",
    fps1080p: "40-60",
    fps1440p: "40-60",
    notes: "Ultra is heavy; medium is smooth"
  },
  {
    title: "A Plague Tale: Requiem",
    thumbnail: "https://i.ytimg.com/vi/fYGuWlxkB1Q/hqdefault.jpg",
    preview: "https://www.youtube.com/embed/fYGuWlxkB1Q?autoplay=1&mute=1&controls=0&start=0&end=45",
    fullVideo: "https://www.youtube.com/watch?v=fYGuWlxkB1Q",
    fps1080p: "50–60",
    fps1440p: "35–45",
    notes: "RTX ON is very heavy, DLSS required"
  },
  {
    title: "Assassins Creed : Odyssey",
    thumbnail: "https://i.ytimg.com/vi/oEFN3bvgruo/hqdefault.jpg",
    preview: "https://www.youtube.com/embed/oEFN3bvgruo?autoplay=1&mute=1&controls=0&start=0&end=45",
    fullVideo: "https://www.youtube.com/watch?v=oEFN3bvgruo",
    fps1080p: "75-100",
    fps1440p: "60-70",
    notes: "Demanding CPU zones, smooth overall"
  },
  {
    title: "Assassins Creed : Origins",
    thumbnail: "https://i.ytimg.com/vi/yz1nno-A12E/hqdefault.jpg",
    preview: "https://www.youtube.com/embed/yz1nno-A12E?autoplay=1&mute=1&controls=0&start=0&end=45",
    fullVideo: "https://www.youtube.com/watch?v=yz1nno-A12E",
    fps1080p: "100-150",
    fps1440p: "75-120",
    notes: "Smooth, less CPU-intensive than Odyssey"
  },
  {
    title: "Black Myth: Wukong ",
    thumbnail: "https://i.ytimg.com/vi/tg7VFyws5W4/hqdefault.jpg",
    preview: "https://www.youtube.com/embed/tg7VFyws5W4?autoplay=1&mute=1&controls=0&start=0&end=45",
    fullVideo: "https://www.youtube.com/watch?v=tg7VFyws5W4",
    fps1080p: "50–60",
    fps1440p: "35–45",
    notes: "RTX showcase title, DLSS a must"
  },
  {
    title: "Control",
    thumbnail: "https://i.ytimg.com/vi/G26Quobv3cQ/hqdefault.jpg",
    preview: "https://www.youtube.com/embed/G26Quobv3cQ?autoplay=1&mute=1&controls=0&start=0&end=45",
    fullVideo: "https://www.youtube.com/watch?v=G26Quobv3cQ",
    fps1080p: "60-100",
    fps1440p: "50-70",
    notes: "DLSS boosts ray-traced visuals"
  },
  {
    title: "Death Stranding",
    thumbnail: "https://i.ytimg.com/vi/ub1fzJavV8c/hqdefault.jpg",
    preview: "https://www.youtube.com/embed/ub1fzJavV8c?autoplay=1&mute=1&controls=0&start=0&end=45",
    fullVideo: "https://www.youtube.com/watch?v=ub1fzJavV8c",
    fps1080p: "60-100",
    fps1440p: "60-100",
    notes: "Ultra is smooth in 1440p"
  },
  {
    title: "Ghost of Tsushima ",
    thumbnail: "https://i.ytimg.com/vi/BVPnRcCJSb8/hqdefault.jpg",
    preview: "https://www.youtube.com/embed/BVPnRcCJSb8?autoplay=1&mute=1&controls=0&start=0&end=45",
    fullVideo: "https://www.youtube.com/watch?v=BVPnRcCJSb8",
    fps1080p: "60–70",
    fps1440p: "45–55",
    notes: "DLSS will help at 1440p"
  },
  {
    title: "God of War (2018)",
    thumbnail: "https://i.ytimg.com/vi/KFrELhacBTc/hqdefault.jpg",
    preview: "https://www.youtube.com/embed/KFrELhacBTc?autoplay=1&mute=1&controls=0&start=0&end=45",
    fullVideo: "https://www.youtube.com/watch?v=KFrELhacBTc",
    fps1080p: "65–75",
    fps1440p: "50–60",
    notes: "DLSS Quality, no native RTX"
  },
  {
    title: "Hellblade II (Next Gen) ",
    thumbnail: "https://i.ytimg.com/vi/nKZnUvnFwRE/hqdefault.jpg",
    preview: "https://www.youtube.com/embed/nKZnUvnFwRE?autoplay=1&mute=1&controls=0&start=0&end=45",
    fullVideo: "https://www.youtube.com/watch?v=nKZnUvnFwRE",
    fps1080p: "50–60",
    fps1440p: "35–45",
    notes: "RT & cinematic realism = heavier"
  },
  {
    title: "Hogwarts Legacy",
    thumbnail: "https://i.ytimg.com/vi/oyphHT56sI0/hqdefault.jpg",
    preview: "https://www.youtube.com/embed/oyphHT56sI0?autoplay=1&mute=1&controls=0&start=0&end=45",
    fullVideo: "https://www.youtube.com/watch?v=oyphHT56sI0",
    fps1080p: "45-60",
    fps1440p: "45-60",
    notes: "RTX ON is very heavy, DLSS required"
  },
  {
    title: "Horizon: Forbidden West ",
    thumbnail: "https://i.ytimg.com/vi/kWkTHSKKl7U/hqdefault.jpg",
    preview: "https://www.youtube.com/embed/kWkTHSKKl7U?autoplay=1&mute=1&controls=0&start=0&end=45",
    fullVideo: "https://www.youtube.com/watch?v=kWkTHSKKl7U",
    fps1080p: "55–65",
    fps1440p: "40–50",
    notes: "RTX + DLSS smooths open-world stutters"
  },
  {
    title: "Resident Evil 4 : Remake",
    thumbnail: "https://i.ytimg.com/vi/KZ6WyoNmiIM/hqdefault.jpg",
    preview: "https://www.youtube.com/embed/KZ6WyoNmiIM?autoplay=1&mute=1&controls=0&start=0&end=45",
    fullVideo: "https://www.youtube.com/watch?v=KZ6WyoNmiIM",
    fps1080p: "50-60",
    fps1440p: "50-60",
    notes: "DLSS quality ON, no major dips"
  },
  {
    title: "Rise of the Tomb Raider Reemastered",
    thumbnail: "https://i.ytimg.com/vi/kD6On6EZLwo/hqdefault.jpg",
    preview: "https://www.youtube.com/embed/kD6On6EZLwo?autoplay=1&mute=1&controls=0&start=0&end=45",
    fullVideo: "https://www.youtube.com/watch?v=kD6On6EZLwo",
    fps1080p: "50-60",
    fps1440p: "45-60",
    notes: "Smooth RTX with DLSS Performance"
  },
  {
    title: "Silent Hill 2 Remake (UE5)",
    thumbnail: "https://i.ytimg.com/vi/0Xzjad2TP3g/hqdefault.jpg",
    preview: "https://www.youtube.com/embed/0Xzjad2TP3g?autoplay=1&mute=1&controls=0&start=0&end=45",
    fullVideo: "https://www.youtube.com/watch?v=0Xzjad2TP3g",
    fps1080p: "50–60",
    fps1440p: "35–45",
    notes: "RTX lighting is demanding"
  },
  {
    title: "Marvel's Spiderman Remastered",
    thumbnail: "https://i.ytimg.com/vi/3vQ2A91-Yvc/hqdefault.jpg",
    preview: "https://www.youtube.com/embed/3vQ2A91-Yvc?autoplay=1&mute=1&controls=0&start=0&end=45",
    fullVideo: "https://www.youtube.com/watch?v=3vQ2A91-Yvc",
    fps1080p: "60-100",
    fps1440p: "60-100",
    notes: "RTX and DLSS Performance smooth"
  },
  {
    title: "The Last of Us Part I",
    thumbnail: "https://i.ytimg.com/vi/A-Y4Ibqc8a8/hqdefault.jpg",
    preview: "https://www.youtube.com/embed/A-Y4Ibqc8a8?autoplay=1&mute=1&controls=0&start=0&end=45",
    fullVideo: "https://www.youtube.com/watch?v=A-Y4Ibqc8a8",
    fps1080p: "55–65",
    fps1440p: "40–50",
    notes: "Patch-optimized with DLSS"
  },
  {
    title: "The Witcher 3 (Next Gen)",
    thumbnail: "https://i.ytimg.com/vi/pdA-ON1QhbQ/hqdefault.jpg",
    preview: "https://www.youtube.com/embed/pdA-ON1QhbQ?autoplay=1&mute=1&controls=0&start=0&end=45",
    fullVideo: "https://www.youtube.com/watch?v=pdA-ON1QhbQ",
    fps1080p: "45–55",
    fps1440p: "30–40",
    notes: "RTX Ultra = demanding, DLSS Perf helps"
  },
];