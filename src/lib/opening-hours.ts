/** Öppettider per veckodag. 0 = måndag … 6 = söndag. null = stängt. */
export type DayHours = { open: string; close: string } | null;
export type WeekHours = [DayHours, DayHours, DayHours, DayHours, DayHours, DayHours, DayHours];

const toMinutes = (hhmm: string) => {
  const [h = 0, m = 0] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

/** Veckodag (0 = måndag) och minuter efter midnatt i svensk tid. */
export function stockholmClock(date: Date): { day: number; minutes: number } {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Stockholm",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return {
    day: days.indexOf(get("weekday")),
    minutes: Number(get("hour")) * 60 + Number(get("minute")),
  };
}

export type OpenStatus =
  | { open: true; closesAt: string }
  | { open: false; opensAt: string | null; opensDay: number | null };

/** Är verksamheten öppen vid en viss tidpunkt (svensk tid)? Hanterar öppet över midnatt. */
export function openStatus(hours: WeekHours, date: Date): OpenStatus {
  const { day, minutes } = stockholmClock(date);

  // Gårdagens pass som sträcker sig över midnatt
  const prev = hours[(day + 6) % 7];
  if (prev && toMinutes(prev.close) < toMinutes(prev.open) && minutes < toMinutes(prev.close)) {
    return { open: true, closesAt: prev.close };
  }

  const today = hours[day];
  if (today) {
    const o = toMinutes(today.open);
    const c = toMinutes(today.close);
    const overnight = c < o;
    if (minutes >= o && (overnight || minutes < c)) return { open: true, closesAt: today.close };
    if (minutes < o) return { open: false, opensAt: today.open, opensDay: day };
  }

  for (let i = 1; i <= 7; i++) {
    const d = (day + i) % 7;
    const h = hours[d];
    if (h) return { open: false, opensAt: h.open, opensDay: d };
  }
  return { open: false, opensAt: null, opensDay: null };
}

export const DAY_NAMES = ["måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag", "söndag"];
