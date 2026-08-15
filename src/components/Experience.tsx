import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/layout/Section";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SkillGrid } from "@/components/SkillGrid";
import { ProjectsSection } from "@/components/Projects";
import {
  affiliations,
  certifications,
  education,
  experience,
  skillCategories,
} from "@/data/experience";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Where I've worked, what I've studied, and the skills I bring to my projects."
    >
      <div id="work" />
      <ExperienceTimeline experience={experience} education={education} />

      <div id="in-progress" className="mt-12" />
      <div className="mt-4">
        <ProjectsSection />
      </div>

      <div className="mt-12">
        <h3 className="mb-5 font-serif text-2xl font-semibold">Skills</h3>
        <SkillGrid categories={skillCategories} />
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="mb-5 font-serif text-2xl font-semibold">Certifications</h3>
          <div className="space-y-4">
            {certifications.map((cert) => (
              <Card key={cert.id}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline">{cert.status}</Badge>
                    <span className="text-sm text-muted-foreground">
                      Expected {cert.expected}
                    </span>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-serif text-2xl font-semibold">Affiliations</h3>
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                {affiliations.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
