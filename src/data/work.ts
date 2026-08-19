export type CaseStudy = {
  title: string;
  org: string;
  period: string;
  summary: string;
  points: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Toolchain & build performance for Assassin's Creed Shadows",
    org: "Ubisoft Montréal",
    period: "2022 – 2025",
    summary:
      "Maintainer of the internal LLVM/Clang toolchain underpinning Ubisoft's Anvil, Snowdrop, and Voyage engines — keeping it current with upstream LLVM, chasing down toolchain issues, and building features to improve compile and runtime performance.",
    points: [
      "Co-maintainer of Ubisoft's FASTBuild fork and the Sharpmake meta-build system",
      "Shipped on Assassin's Creed Shadows: compiler optimizations and build-speed work",
      "Helped port Assassin's Creed Shadows to macOS and Nintendo Switch 2",
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
      "Former development lead on Plex Media Player and Plex Home Theater",
      "Built and ran build-system infrastructure supporting the whole engineering org",
    ],
  },
  {
    title: "LLVM release management",
    org: "LLVM Project",
    period: "2022 – present",
    summary:
      "Co-release manager for the LLVM project, responsible for triaging, merging, and reviewing fixes that ship in each official release.",
    points: [
      "Release manager for LLVM 15.x, 17.x, and 19.x",
      "Regular speaker at EuroLLVM on the release process and compiler internals",
    ],
  },
];
