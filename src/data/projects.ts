export interface Project {
  key: string;
  name: string;
  image: string;
  url: string;
  description: string;
}

export const projects: Project[] = [
  {
    key: "letteer",
    name: "Letteer",
    image: "/letteer.png",
    url: "https://www.letteer.me",
    description: "Letteer is a CV generator.",
  },
  {
    key: "nanosights",
    name: "NanoSights",
    image: "/nanosights.png",
    url: "https://www.nanosights.dev",
    description: "NanoSights helps you understand user behavior via privacy-first analytics.",
  },
  {
    key: "aspecsgaming",
    name: "Aspecs Gaming",
    image: "/aspecsgaming.png",
    url: "https://www.gaming.aspecs.ch",
    description: "A playful portal for Aspecs game projects and content.",
  },
];
