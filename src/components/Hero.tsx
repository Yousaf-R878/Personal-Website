import { Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data/experience";
import { scrollToSection } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useScrollSpy";

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
};

export function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  const links = [
    { href: socialLinks.linkedin, label: "LinkedIn", icon: Linkedin },
    { href: socialLinks.github, label: "GitHub", icon: Github },
    { href: socialLinks.email, label: "Email", icon: Mail },
  ];

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {links.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
          aria-label={label}
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary",
            iconClassName,
          )}
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}

type HeroProps = {
  name: string;
  headline: string;
  summary: string;
  photo: string;
};

export function Hero({ name, headline, summary, photo }: HeroProps) {
  const { ref, isVisible } = useInView();

  return (
    <section
      id="home"
      className="scroll-mt-20 border-b border-border/60 bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--muted)/0.35)_100%)]"
    >
      <div
        ref={ref}
        className={cn(
          "mx-auto grid max-w-5xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28 animate-on-scroll",
          isVisible && "visible",
        )}
      >
        <div className="order-2 md:order-1">
          {/* <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-secondary">
            Portfolio
          </p> */}
          <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
            {headline}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button onClick={() => scrollToSection("work")}>View my work</Button>
            <Button variant="outline" onClick={() => scrollToSection("contact")}>
              Get in touch
            </Button>
          </div>
          <SocialLinks className="mt-8" />
        </div>

        <div className="order-1 md:order-2">
          <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <img
              src={photo}
              alt={name}
              className="h-full w-full scale-[1.08] object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
