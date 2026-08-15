import { Section } from "@/components/layout/Section";
import { SocialLinks } from "@/components/Hero";

export function ContactSection() {
  return (
    <Section
      id="contact"
      title="Like what you see?"
      subtitle="Here's where you can reach out."
      className="bg-[hsl(var(--foreground))] text-[hsl(var(--background))]"
    >
      <div className="max-w-xl">
        <p className="text-lg text-[hsl(var(--background)/0.8)]">
          I'm always open to talking about projects, opportunities, or 
          ways to collaborate.
        </p>
        <SocialLinks
          className="mt-8"
          iconClassName="border-[hsl(var(--background)/0.15)] bg-[hsl(var(--background)/0.05)] text-[hsl(var(--background))] hover:border-[hsl(var(--background)/0.35)] hover:text-[hsl(var(--background))]"
        />
      </div>
    </Section>
  );
}
