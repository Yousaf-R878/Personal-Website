export type ProjectStatus = "completed" | "in-progress";

export type Project = {
  id: string;
  title: string;
  description: string;
  image?: string;
  period?: string;
  href?: string;
  github?: string;
  tech: string[];
  status: ProjectStatus;
};

export const projects: Project[] = [
  {
    id: "aws-microservices",
    title: "AWS Cloud Migration & Microservices",
    description:
      "Refactored a monolithic supplier management system into containerized microservices deployed on Amazon ECS, with automated CI/CD pipelines and blue-green deployments maintaining 100% uptime.",
    period: "February 2025 – May 2025",
    tech: ["AWS ECS", "Docker", "CodePipeline", "ALB", "CI/CD"],
    status: "completed",
  },
  {
    id: "swoons",
    title: "Swoons",
    description:
      "Led a team of four in building and deploying a full-stack social platform serving 100+ users, integrating 10,000+ TripAdvisor locations for date discovery with a scalable Node.js/Express/MongoDB backend and React/Tailwind frontend.",
    period: "October 2024 – December 2024",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Firebase", "AWS S3"],
    status: "completed",
  },
  {
    id: "snoops",
    title: "Snoops!",
    description:
      "A full-stack web application built with a modern JavaScript stack. Collaborative project focused on building a polished, interactive user experience.",
    image: "/images/SnoopsPic.png",
    github: "https://github.com/notalim/snoops",
    href: "https://github.com/notalim/snoops",
    tech: ["JavaScript", "Node.js", "Express", "MongoDB", "HTML", "CSS"],
    status: "completed",
  },
  {
    id: "unity-game-dev",
    title: "Game Development in Unity Engine",
    description:
      "A collection of game development projects using the Unity engine, including C# gameplay scripting and 3D asset workflows with Blender.",
    image: "/images/UnityGDPic.PNG",
    github: "https://github.com/Yousaf-R878/Unity-Game-Dev",
    href: "https://github.com/Yousaf-R878/Unity-Game-Dev",
    tech: ["C#", "Unity", "Blender"],
    status: "completed",
  },
  {
    id: "cpu-assembly",
    title: "CPU and Assembly Language Design",
    description:
      "Designed and simulated a custom CPU architecture and assembly language, exploring low-level systems concepts from logic gates to instruction execution.",
    image: "/images/CPU pic.png",
    tech: ["Python", "Logisim", "Assembly"],
    status: "in-progress",
  },
  {
    id: "artist-recommender",
    title: "Artist Recommender System",
    description:
      "Building a recommendation system to suggest artists based on listening patterns and similarity metrics using Python data processing.",
    image: "/images/MusicRecPic.png",
    tech: ["Python"],
    status: "in-progress",
  },
];

export const completedProjects = projects.filter((p) => p.status === "completed");
export const inProgressProjects = projects.filter((p) => p.status === "in-progress");
