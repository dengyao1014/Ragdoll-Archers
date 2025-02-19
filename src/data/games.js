export const games = [
  {
    id: 1,
    title: "Ragdoll Archers",
    thumbnail: "/images/games/ragdoll-archers.jpg",
    url: "https://www.crazygames.com/embed/ragdoll-archers",
    description: "A physics-based archery game with unique ragdoll mechanics",
    category: "Shooting",
    rating: "4.74",
    isNew: true
  },
  {
    id: 2,
    title: "Time Shooter 3 SWAT",
    thumbnail: "/images/games/time-shooter.jpg",
    url: "https://www.crazygames.com/embed/time-shooter-3",
    description: "SWAT tactical shooting game with time manipulation mechanics",
    category: "Shooting",
    rating: "4.8"
  },
  {
    id: 3,
    title: "Impostor Archer War",
    thumbnail: "/images/games/impostor-archer.jpg",
    url: "https://www.crazygames.com/embed/impostor-archer",
    description: "Space-themed archery game with unique mechanics",
    category: "Shooting",
    rating: "4.6"
  },
  {
    id: 4,
    title: "Archer In Dungeons",
    thumbnail: "/images/games/archer-dungeons.jpg",
    url: "https://www.crazygames.com/embed/archer-dungeons",
    description: "Dungeon archery adventure with roguelike elements",
    category: "Shooting",
    rating: "4.5"
  }
];

export const gameCategories = [
  "射击",
  "动作",
  "冒险",
  "策略",
  "多人"
];

export const featuredGames = games.slice(0, 4);
export const popularGames = games.filter(game => parseFloat(game.rating) > 4.5);