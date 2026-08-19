export type VideoTalk = {
  title: string;
  url: string;
  venue?: string;
};

export const videos: VideoTalk[] = [
  {
    title: "Clang and LLVM in Modern Gaming Platforms",
    url: "https://youtu.be/1SM_wDUEEUg",
    venue: "EuroLLVM 2026",
  },
  {
    title: "The LLVM Release Process, a status update",
    url: "https://youtu.be/SbDYpiWna-Q",
    venue: "EuroLLVM 2026",
  },
  {
    title: "Compiling C++ is slow - let's go faster",
    url: "https://youtu.be/X4pyOtawqjg",
  },
  {
    title: "Order out of Chaos: The LLVM Release Process",
    url: "https://youtu.be/onaNb2U1Od8",
    venue: "EuroLLVM 2023",
  },
  {
    title: "Modernizing Plex's C++ toolchain with Clang and Conan",
    url: "https://youtu.be/wrF0Yc3n1DE",
  },
  {
    title: "A Brief Overview of the LLVM Architecture",
    url: "https://youtu.be/g96voy6M6xo",
  },
  {
    title: "Kodsnack Live at TechWorld Summit 2018",
    url: "https://youtu.be/rvYBdZUGLEU",
    venue: "Kodsnack",
  },
];

// TODO: add your YouTube channel URL here once confirmed, then link it from the Videos page.
export const youtubeChannelUrl: string | null = null;
