export type Game = {
  title: string;
  year: string;
  role: string;
  boxArt?: string; // path under /public/games/, add later
  description?: string; // fill in with what you actually did on the project
};

// Source: https://www.mobygames.com/person/1815258/tobias-hieta/
// Add box art to public/games/ and fill in `description` for each entry.
export const games: Game[] = [
  {
    title: "Assassin's Creed Shadows",
    year: "2025",
    role: "Generalist Programmer",
    boxArt: "/games/ac-shadows.jpg",
    description: "",
  },
  {
    title: "Assassin's Creed: Black Flag - Resynced",
    year: "2026",
    role: "Special Thanks",
    boxArt: "/games/ac4-resynced.jpg",
    description: "",
  },
];
