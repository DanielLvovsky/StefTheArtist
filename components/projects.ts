export type Tag = "New" | "Illustrations" | "Client Project";

export interface Project {
  url?: string;
  img: string;
  title: string;
  tags: Tag[];
  bgColor?: string;
}

export const projects: Project[] = [
  {
    url: "work/illustrations",
    img: "cards/Illustrations.jpg",
    title: "Illustrations - Showcase",
    tags: ["New", "Illustrations"],
    bgColor: "#fff",
  },
  {
    url: "work/urbanbrows",
    img: "cards/Urbanbrows.jpg",
    title: "UrbanBrows - Client Work",
    tags: ["New", "Client Project"],
    bgColor: "#000",
  },
  {
    url: "work/jourpost",
    img: "cards/Jourpost.jpg",
    title: "Jourpost - Client Work",
    tags: ["New", "Client Project"],
    bgColor: "#000",
  },
  {
    url: "work/custom-illustrations",
    img: "cards/custom.jpg",
    title: "Custom Illustrations - Client Work",
    tags: ["New", "Client Project"],
    bgColor: "#000",
  }
];
