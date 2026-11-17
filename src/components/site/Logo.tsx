import { Link } from "@tanstack/react-router";

export function Logo({ tone = "default" }: { tone?: "default" | "light" }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-2.5" aria-label="Köpingsvik.se – startsida">
      <span className="relative grid size-9 place-items-center">
        <span className="absolute inset-0 rounded-full bg-sunset transition-transform duration-500 group-hover:scale-110" />
        <span className="absolute inset-x-1 bottom-1 h-1.5 rounded-full bg-primary/80" />
      </span>
      <span
        className={`font-display text-2xl font-semibold tracking-tight ${tone === "light" ? "text-on-image" : "text-foreground"}`}
      >
        Köpingsvik<span className="text-coral">.se</span>
      </span>
    </Link>
  );
}
