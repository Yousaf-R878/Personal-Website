import { ExternalLink, Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  variant?: "default" | "wip";
};

export function ProjectCard({ project, variant = "default" }: ProjectCardProps) {
  const isWip = variant === "wip" || project.status === "in-progress";
  const link = project.href ?? project.github;

  const content = (
    <Card
      className={cn(
        "group h-full overflow-hidden bg-card transition-all duration-300",
        isWip
          ? "border-dashed border-border/70 hover:border-primary/30"
          : "hover:-translate-y-1 hover:border-primary/30 hover:shadow-md",
      )}
    >
      <div className="aspect-[16/10] overflow-hidden border-b border-border bg-muted/30">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[linear-gradient(135deg,hsl(var(--muted))_0%,hsl(var(--background))_100%)] p-6 text-center">
            <span className="font-serif text-2xl font-semibold text-primary/80">
              {project.title.split(" ")[0]}
            </span>
            {project.period && (
              <span className="text-xs text-muted-foreground">{project.period}</span>
            )}
          </div>
        )}
      </div>
      <CardContent className="p-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div>
            <h3 className="font-serif text-xl font-semibold leading-snug">{project.title}</h3>
            {project.image && project.period && (
              <p className="mt-1 text-xs text-muted-foreground">{project.period}</p>
            )}
          </div>
          {isWip ? (
            <Badge variant="secondary" className="whitespace-nowrap text-[10px] leading-none">
              In progress
            </Badge>
          ) : (
            <Badge variant="muted" className="whitespace-nowrap text-[10px] leading-none">
              Completed
            </Badge>
          )}
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="muted">
              {tech}
            </Badge>
          ))}
        </div>
        {(project.github || project.href) && (
          <div className="mt-5 flex items-center gap-4 text-sm text-primary">
            {project.github && (
              <span className="inline-flex items-center gap-1.5">
                <Github className="h-4 w-4" />
                GitHub
              </span>
            )}
            {link && !isWip && (
              <span className="inline-flex items-center gap-1.5">
                <ExternalLink className="h-4 w-4" />
                View project
              </span>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );

  if (link && !isWip) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        {content}
      </a>
    );
  }

  return content;
}
