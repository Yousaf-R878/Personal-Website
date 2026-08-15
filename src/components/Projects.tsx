import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      title="Projects"
      // subtitle="A single list of projects — each tagged as completed or in progress."
      className="bg-muted/5"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            variant={project.status === "in-progress" ? "wip" : "default"}
          />
        ))}
      </div>
    </Section>
  );
}
