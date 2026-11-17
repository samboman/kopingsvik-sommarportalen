import { Badge } from "@/components/ui/badge";
import { DAY_NAMES, openStatus, stockholmClock, type WeekHours } from "@/lib/opening-hours";

export function OpenBadge({ hours, now }: { hours: WeekHours; now: Date | null }) {
  if (!now) return <Badge variant="closed">Kollar öppettider…</Badge>;
  const s = openStatus(hours, now);
  if (s.open)
    return (
      <Badge variant="open">
        <span className="size-1.5 rounded-full bg-seagrass" /> Öppet till {s.closesAt}
      </Badge>
    );
  if (!s.opensAt) return <Badge variant="closed">Stängt</Badge>;
  const today = stockholmClock(now).day;
  const when =
    s.opensDay === today ? `i dag ${s.opensAt}` : s.opensDay === (today + 1) % 7 ? `i morgon ${s.opensAt}` : `${DAY_NAMES[s.opensDay!]} ${s.opensAt}`;
  return (
    <Badge variant="closed">
      <span className="size-1.5 rounded-full bg-muted-foreground/50" /> Öppnar {when}
    </Badge>
  );
}
