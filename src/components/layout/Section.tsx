import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useScrollSpy";

type SectionProps = {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  animate?: boolean;
};

export function Section({
  id,
  title,
  subtitle,
  children,
  className,
  animate = true,
}: SectionProps) {
  const { ref, isVisible } = useInView();

  return (
    <section
      id={id}
      ref={ref}
      className={cn("scroll-mt-20 py-20 md:py-24", className)}
    >
      <div
        className={cn(
          "mx-auto w-full max-w-5xl px-6",
          animate && "animate-on-scroll",
          animate && isVisible && "visible",
        )}
      >
        {(title || subtitle) && (
          <header className="mb-12 max-w-2xl">
            {title && (
              <h2 className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 text-lg text-muted-foreground">{subtitle}</p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
