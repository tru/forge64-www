export type CaseStudy = {
  title: string;
  org: string;
  period: string;
  summary: string;
  points: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Toolchain & build performance for Ubisoft's Anvil Engine team",
    org: "Ubisoft Montréal",
    period: "2022 – 2025",
    summary:
      "Maintainer of the internal LLVM/Clang toolchain underpinning Ubisoft's Anvil, Snowdrop, and Voyage engines — keeping it current with upstream LLVM, chasing down toolchain issues, and building features to improve compile and runtime performance.",
    points: [
      "Co-maintainer of Ubisoft's FASTBuild fork and the Sharpmake meta-build system",
      "Shipped on Assassin's Creed Shadows: compiler optimizations, PGO tuning, and build-speed work",
      "Ported the Anvil toolchain and build infrastructure to Nintendo Switch 2, making Shadows the first Assassin's Creed title on the platform",
      "Continued the same toolchain and PGO work on Assassin's Creed Black Flag Resynced",
    ],
  },
  {
    title: "Build infrastructure & CI for Plex Media Server",
    org: "Plex, Inc.",
    period: "2012 – 2022",
    summary:
      "Ten years across engineering leadership and build tooling at Plex — from Senior Engineer Lead on Plex Media Server to Team Lead for Build Tools, owning toolchains, CI, unit testing, build systems, and artifact management for every team.",
    points: [
      "Modernized Plex's C++ toolchain onto Clang and Conan",
      "Development lead on Plex Media Player and Plex Home Theater",
      "Built and ran build-system infrastructure supporting the whole engineering org",
    ],
  },
  {
    title: "LLVM release management",
    org: "LLVM Project",
    period: "2022 – present",
    summary:
      "Co-release manager for the LLVM project, driving both the day-to-day mechanics — triaging, merging, and reviewing fixes that ship in each official release — and the ongoing evolution of the release process itself: tooling, cadence, and policy for how LLVM ships to the world.",
    points: [
      "Release manager for LLVM's odd-numbered releases: 15.x, 17.x, 19.x, and 21.x",
      "Active in driving process and tooling improvements for LLVM release management as a whole, not just individual releases",
      "Regular speaker at EuroLLVM on the release process and compiler internals",
    ],
  },
];
