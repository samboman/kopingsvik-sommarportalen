import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  action,
  tone = "default",
}: {
  tone?: "default" | "inverse";
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div className="max-w-2xl">
        <div className={`eyebrow mb-3 ${tone === "inverse" ? "text-sun" : "text-coral"}`}>{eyebrow}</div>
        <h2 className="text-4xl font-medium leading-tight text-balance-wrap sm:text-5xl">{title}</h2>
        {lead && (
          <p
            className={`mt-4 text-lg ${tone === "inverse" ? "text-primary-foreground/80" : "text-muted-foreground"}`}
          >
            {lead}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}
