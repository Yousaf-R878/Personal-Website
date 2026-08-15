export type ExperienceEntry = {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string[];
  /** One-line summary used for timeline compact view */
  summary?: string;
  /** Optional short highlights shown in popover */
  highlights?: string[];
  /** Technologies used in this role */
  tech?: string[];
};

export type EducationEntry = {
  id: string;
  degree: string;
  school: string;
  period: string;
  details?: string[];
  summary?: string;
};

export type SkillCategory = {
  name: string;
  skills: string[];
};

export const bio = {
  name: "Yousaf Rajput",
  headline: "Hey, I'm Yousaf",
  summary:
    "I'm a software engineering graduate student at Stevens Institute of Technology with experience building full-stack applications, cloud infrastructure, and agentic AI systems.",
  photo: "/images/headshot.JPG",
  location: "Staten Island, NY",
};

export const experience: ExperienceEntry[] = [
  {
    id: "att",
    title: "Software Engineering Intern",
    organization: "AT&T — Middletown, NJ",
    period: "June 2026 – August 2026",
    summary:
      "Built an agentic RAG pipeline to automate TN Porting workflows, cutting multi-week processes to hours.",
    description: [
      "Architected a multi-agent retrieval-augmented generation (RAG) system integrating AT&T's internal LLM platform with tool-using agents and FastAPI to automate multi-week TN Porting workflows.",
      "Reduced porting workflow completion time from multiple weeks to hours by designing an end-to-end agentic pipeline that eliminated manual handoffs, cutting employee effort and error rates across the process.",
    ],
    tech: ["Python", "FastAPI", "LangChain", "RAG", "LLMs", "Agents"],
  },
  {
    id: "triptic",
    title: "Backend Software Engineering Intern",
    organization: "Triptic — New York, NY",
    period: "November 2025 – February 2026",
    summary:
      "Secured and scaled a React + Supabase backend for 1,000+ concurrent users with robust RLS and CI/CD.",
    description: [
      "Secured data for 1,000+ concurrent users through a full-stack React.js and Supabase application, enforcing 100+ RLS policies across 25 relational tables with role-based access control (RBAC) and optimizing query performance through targeted indexing and caching with Redis.",
      "Maintained zero production outages across 45+ deployments by creating automated CI/CD pipelines on Railway and Vercel with 30+ unit and integration tests gating every push, sustaining near-zero infrastructure cost.",
    ],
    tech: ["React", "Supabase", "PostgreSQL", "Redis", "Railway", "Vercel", "CI/CD"],
  },
  {
    id: "edutrend",
    title: "Software Engineer, Full-Stack",
    organization: "Edutrend — Hoboken, NJ",
    period: "September 2024 – May 2025",
    summary:
      "Delivered analytics and cloud infrastructure to reduce teachers' manual tracking time by 30%.",
    description: [
      "Reduced teachers' manual data tracking time by 30% by visualizing learning trends (Chart.js) and tracking progress on behaviorist interventions — built on a secure cloud architecture (Node.js, Express.js, GraphQL, MongoDB, Firebase, AWS S3, Vercel) with an accessible frontend (React.js, Tailwind CSS, Figma) validated by 43 interviews with education professionals.",
      "Accelerated product delivery time by 28% through Agile and weekly sprints, creation of UML diagrams, database schema design, and creation of KPIs and cost analyses to align features with teachers' needs.",
    ],
    tech: ["React", "Node.js", "Express", "GraphQL", "MongoDB", "Firebase", "AWS", "Tailwind"],
  },
  {
    id: "cpac",
    title: "Frontend Software Engineer",
    organization: "Castle Point Anime Convention — Hoboken, NJ",
    period: "September 2022 – May 2024",
    summary: "Overhauled event website and integrated DocuSign workflows, improving conversion and scale.",
    description: [
      "Attracted 5,000+ users by overhauling Castle Point Anime Convention's website with AWS Amplify, implementing responsive design and accessibility features, a scalable backend, and optimized performance for a seamless user experience.",
      "Reduced contract turnaround time by 40% for 50+ clients by integrating DocuSign's API with Python and FastAPI for the backend and React.js for the frontend, streamlining document sending, signing, and receiving.",
    ],
    tech: ["React", "Python", "FastAPI", "AWS Amplify", "DocuSign", "Accessibility"],
  },
];

export const education: EducationEntry[] = [
  {
    id: "stevens-ms",
    degree: "Master of Science in Software Engineering",
    school: "Stevens Institute of Technology — Hoboken, NJ",
    period: "Expected December 2026",
  },
  {
    id: "stevens-bs",
    degree: "Bachelor of Science in Computer Science",
    school: "Stevens Institute of Technology — Hoboken, NJ",
    period: "May 2025 · GPA 3.47",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Frameworks & APIs",
    skills: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Redis",
      "GraphQL",
      "Express.js",
      "Next.js",
      "FastAPI",
    ],
  },
  {
    name: "Cloud & DevOps",
    skills: [
      "AWS (Amplify, ECS, ALB, S3, CodePipeline, CodeBuild, CodeCommit)",
      "Docker",
      "Firebase",
      "Vercel",
      "CI/CD",
      "Supabase",
      "Kubernetes",
    ],
  },
  {
    name: "Programming Languages",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C/C++",
      "SQL",
      "Bash",
      "HTML5",
      "CSS3",
    ],
  },
  {
    name: "Software & Tools",
    skills: [
      "Visual Studio Code",
      "Git/GitHub",
      "Copilot",
      "Figma",
      "Jira",
      "Unreal Engine 5",
    ],
  },
];

export const certifications = [
  {
    id: "aws-ccp",
    name: "AWS Certified Cloud Practitioner",
    status: "In Progress",
    expected: "September 2026",
  },
];

export const affiliations = [
  "Society of Hispanic Professional Engineers (SHPE)",
  "CodePath alumn",
];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/yousaf_rajput/",
  github: "https://github.com/Yousaf-R878",
  email: "mailto:yousaf.rajput878@gmail.com",
  phone: "tel:+16467250054",
};
