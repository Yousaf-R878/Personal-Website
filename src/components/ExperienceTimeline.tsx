import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import type { EducationEntry, ExperienceEntry } from "@/data/experience";

type ExperienceTimelineProps = {
  experience: ExperienceEntry[];
  education: EducationEntry[];
};

export function ExperienceTimeline({ experience, education }: ExperienceTimelineProps) {
  const [activeId, setActiveId] = useState<string | null>(() => experience[0]?.id ?? null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    // Ensure there's always a sensible fallback when experience changes
    if (!activeId && experience.length > 0) setActiveId(experience[0].id);
  }, [experience, activeId]);

  const activeEntry = experience.find((e) => e.id === activeId) ?? null;

  return (
    <div className="space-y-10">
      <div className="grid gap-8 lg:grid-cols-[1.55fr_1.45fr] lg:items-start">
        {/* Left: Work list (dominant) */}
        <div>
          <h3 className="mb-5 font-serif text-2xl font-semibold">Work</h3>
          <div className="relative">
            {/* vertical guideline for visual alignment */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-muted-foreground/20" />

            <div className="space-y-3">
              {experience.map((entry) => (
                <TimelineItem
                  key={entry.id}
                  entry={entry}
                  onActivate={() => {
                    setActiveId(entry.id);
                    setHovering(true);
                  }}
                  onDeactivate={() => setHovering(false)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right: Detail panel that fills the right side on hover/focus */}
        <aside className="hidden lg:block">
          <div
            className="sticky top-28 min-h-[15rem] rounded-xl border border-border bg-card p-7 shadow-sm"
            aria-live="polite"
          >
            {activeEntry ? (
              <div>
                <h4 className="font-serif text-2xl font-semibold leading-tight">{activeEntry.title}</h4>
                <div className="mt-2 text-base text-primary">{activeEntry.organization}</div>
                <div className="mt-1 text-sm text-muted-foreground">{activeEntry.period}</div>

                {activeEntry.tech && activeEntry.tech.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {activeEntry.tech.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-border bg-muted/40 px-2.5 py-1 text-xs font-medium text-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}

                <ul className="mt-5 space-y-3 text-[0.97rem] leading-relaxed text-muted-foreground">
                  {(activeEntry.highlights ?? activeEntry.description).map((d) => (
                    <li key={d} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-secondary" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="text-base text-muted-foreground">No details available.</div>
            )}
          </div>
        </aside>
      </div>

      <Separator />

      <section>
        <h3 className="mb-5 font-serif text-2xl font-semibold">Education</h3>
        <div className="relative space-y-4">
          {/* matching vertical guideline for education */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-muted-foreground/20" />
          {education.map((entry) => (
            <EducationItem key={entry.id} entry={entry} />
          ))}
        </div>
      </section>
    </div>
  );
}

function TimelineItem({
  entry,
  onActivate,
  onDeactivate,
}: {
  entry: ExperienceEntry;
  onActivate?: () => void;
  onDeactivate?: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:pl-12">
      <div className="absolute left-0 md:left-8 top-3 flex items-center md:transform md:-translate-x-1/2">
        <span className="relative inline-flex h-3 w-3 items-center justify-center">
          <span className="absolute inline-block h-2.5 w-2.5 rounded-full bg-card/90 transform scale-100" />
          <span className="relative inline-block h-3 w-3 rounded-full bg-primary border-2 border-card shadow" />
        </span>
      </div>

      <div
        className="group bg-card/50 p-4 rounded-lg transition-shadow hover:shadow-lg focus:outline-none"
        onMouseEnter={() => {
          setOpen(true);
          onActivate?.();
        }}
        onMouseLeave={() => {
          setOpen(false);
          onDeactivate?.();
        }}
        onFocus={() => {
          setOpen(true);
          onActivate?.();
        }}
        onBlur={() => {
          setOpen(false);
          onDeactivate?.();
        }}
        tabIndex={0}
        role="button"
        aria-expanded={open}
      >
        <div className="flex justify-between items-start gap-4">
          <div>
            <h4 className="font-semibold">{entry.title}</h4>
            <div className="text-sm text-primary">{entry.organization}</div>
            <div className="text-xs text-muted-foreground">{entry.period}</div>
            <div className="mt-2 text-sm text-muted-foreground hidden md:block">
              {entry.summary ?? entry.description[0]?.slice(0, 140)}
            </div>
          </div>

          {/* Desktop small preview (kept minimal because full details live on right panel) */}
          {open && (
            <div className="hidden md:block">
              <span className="inline-block rounded-md bg-muted/10 px-2 py-1 text-xs text-muted-foreground">
                Preview
              </span>
            </div>
          )}
        </div>

        {/* Mobile accordion content */}
        <div className="mt-3 md:hidden">
          <button
            className="text-sm text-primary"
            onClick={() => setOpen((s) => !s)}
            aria-expanded={open}
          >
            {open ? "Hide details" : "Show details"}
          </button>
          {open && (
            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
              {entry.description.map((d) => (
                <li key={d} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary" />
                  {d}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

function EducationItem({ entry }: { entry: EducationEntry }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative md:pl-12">
          <div className="absolute left-0 md:left-8 top-3 flex items-center md:transform md:-translate-x-1/2">
            <span className="relative inline-flex h-3 w-3 items-center justify-center">
              <span className="absolute inline-block h-2.5 w-2.5 rounded-full bg-card/90 transform scale-100" />
              <span className="relative inline-block h-3 w-3 rounded-full bg-primary border-2 border-card shadow" />
            </span>
          </div>

      <div className="bg-card/50 p-4 rounded-lg">
        <h4 className="font-semibold">{entry.degree}</h4>
        <div className="text-sm text-primary">{entry.school}</div>
        <div className="text-xs text-muted-foreground">{entry.period}</div>
        {entry.summary && (
          <div className="mt-2 text-sm text-muted-foreground hidden md:block">{entry.summary}</div>
        )}

        <div className="mt-3 md:hidden">
          <button className="text-sm text-primary" onClick={() => setOpen(!open)}>
            {open ? "Hide details" : "Show details"}
          </button>
          {open && entry.details && (
            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
              {entry.details.map((d) => (
                <li key={d} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-secondary" />{d}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
