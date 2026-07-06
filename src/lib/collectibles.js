// Lista central de figuras coleccionables.

export const COLLECTIBLES = [
  {
    id: "peashooter",
    name: "Peashooter",
    image: "images/collectibles/Peashooter.svg",
  },
  {
    id: "sunflower",
    name: "Sunflower",
    image: "images/collectibles/Sunflower.svg",
  },
  {
    id: "wallnut",
    name: "Wall-nut",
    image: "images/collectibles/Wall-nut.svg",
  },
  {
    id: "potatomine",
    name: "Potato Mine",
    image: "images/collectibles/Potato_Mine.svg",
  },
  {
    id: "zombie",
    name: "Browncoat Zombie",
    image: "images/collectibles/Browncoat_Zombie.svg",
  },
  {
    id: "conehead",
    name: "Conehead Zombie",
    image: "images/collectibles/ConeHead_Zombie.webp",
  },
];

export const ALL_IDS = COLLECTIBLES.map((c) => c.id);