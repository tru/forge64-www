export type Game = {
  title: string;
  year: string;
  role: string;
  boxArt: string;
  trailerUrl: string;
  description: string;
  highlights: string[];
};

// Credits source: https://www.mobygames.com/person/1815258/tobias-hieta/
export const games: Game[] = [
  {
    title: "Assassin's Creed Shadows",
    year: "2025",
    role: "Generalist Programmer",
    boxArt:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3159330/2d5536f7e9f72d7844c59c5dc1416f7b756d3ad4/capsule_616x353.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=vovkzbtYBC8",
    description:
      "Assassin's Creed Shadows is Ubisoft's first Assassin's Creed set in feudal Japan, following shinobi assassin Naoe and samurai Yasuke. It shipped on PS5, Xbox Series X|S, PC — and, as the first Assassin's Creed on the platform, Nintendo Switch 2.",
    highlights: [
      "Maintained the LLVM/Clang-based compiler and toolchain",
      "Maintained FASTBuild and Sharpmake, the build and meta-build systems",
      "Added support for PGO (profile-guided optimization) tuning",
      "Ported the toolchain and build infrastructure to Nintendo Switch 2 — making Shadows the first Assassin's Creed to ship on the platform",
    ],
  },
  {
    title: "Assassin's Creed Black Flag Resynced",
    year: "2026",
    role: "Special Thanks",
    boxArt:
      "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3751950/caf2c6ef32bdbfaca877f917cea1076a4f0a520e/capsule_616x353.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=WjsTLe7bBUA",
    description:
      "A remaster of Assassin's Creed IV: Black Flag, rebuilt on Ubisoft's modern engine tech and shipping on PS5, Xbox Series X|S, and PC.",
    highlights: [
      "Maintained the compiler/toolchain, FASTBuild, and Sharpmake — same scope as on Shadows",
      "PGO tuning for the shipped build",
    ],
  },
];
