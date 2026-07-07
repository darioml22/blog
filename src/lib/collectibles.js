// Lista central de figuras coleccionables.

const base = import.meta.env.BASE_URL;

export const COLLECTIBLES = [
  {
    id: "peashooter",
    name: "Peashooter",
    image: `${base}/images/collectibles/Peashooter.svg`,
  },
  {
    id: "sunflower",
    name: "Sunflower",
    image: `${base}/images/collectibles/Sunflower.svg`,
  },
  {
    id: "wallnut",
    name: "Wall-nut",
    image: `${base}/images/collectibles/Wall-nut.svg`,
  },
  {
    id: "potatomine",
    name: "Potato Mine",
    image: `${base}/images/collectibles/Potato_Mine.svg`,
  },
  {
    id: "zombie",
    name: "Browncoat Zombie",
    image: `${base}/images/collectibles/Browncoat_Zombie.svg`,
  },
  {
    id: "conehead",
    name: "Conehead Zombie",
    image: `${base}/images/collectibles/ConeHead_Zombie.webp`,
  },
];

export const ALL_IDS = COLLECTIBLES.map((c) => c.id);