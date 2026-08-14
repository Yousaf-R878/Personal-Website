import { Badge } from "@/components/ui/badge";
import type { SkillCategory } from "@/data/experience";

type SkillGridProps = {
  categories: SkillCategory[];
};

export function SkillGrid({ categories }: SkillGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
      {categories.map((category) => (
        <div
          key={category.name}
          className="rounded-xl border border-border bg-card p-5 shadow-sm"
        >
          <h3 className="font-serif text-lg font-semibold">{category.name}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <Badge key={skill} variant="muted">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
