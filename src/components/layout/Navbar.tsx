import { cn, scrollToSection } from "@/lib/utils";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const navItems = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "in-progress", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const activeId = useScrollSpy(navItems.map((item) => item.id));

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="font-serif text-lg font-semibold text-foreground transition-colors hover:text-primary"
        >
          Yousaf Rajput
        </button>

        <ul className="flex items-center gap-1 sm:gap-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  activeId === item.id
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted/60 hover:text-foreground",
                )}
              >
                <span className="hidden sm:inline">{item.label}</span>
                <span className="sm:hidden">
                  {item.id === "in-progress" ? "WIP" : item.label.split(" ")[0]}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
