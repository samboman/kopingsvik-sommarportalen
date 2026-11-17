/**
 * Affärsregler för företagsprofiler och betald exponering.
 * Grundinformation är alltid gratis – betalning gäller bara extra exponering och funktionalitet.
 */
export type ProfileTier = "bas" | "utokad";

export type ProfileFeature =
  | "namn"
  | "beskrivning"
  | "kategori"
  | "kontakt"
  | "oppettider"
  | "karta"
  | "webbplats"
  | "bildgalleri"
  | "bokningsknapp"
  | "erbjudanden"
  | "evenemang"
  | "statistik"
  | "flersprak";

export const TIER_FEATURES: Record<ProfileTier, ProfileFeature[]> = {
  bas: ["namn", "beskrivning", "kategori", "kontakt", "oppettider", "karta", "webbplats"],
  utokad: [
    "namn",
    "beskrivning",
    "kategori",
    "kontakt",
    "oppettider",
    "karta",
    "webbplats",
    "bildgalleri",
    "bokningsknapp",
    "erbjudanden",
    "evenemang",
    "statistik",
    "flersprak",
  ],
};

export const TIER_IS_FREE: Record<ProfileTier, boolean> = { bas: true, utokad: false };

export type Commercial = {
  tier: ProfileTier;
  /** ISO-datum. Utvald placering gäller till och med detta datum. */
  featuredUntil?: string;
  sponsorPlacement?: string;
};

/** Är en betald utvald placering aktiv vid given tidpunkt? */
export function isFeatured(c: Commercial, now: Date): boolean {
  if (!c.featuredUntil) return false;
  const until = new Date(`${c.featuredUntil}T23:59:59+01:00`);
  return now.getTime() <= until.getTime();
}

/** Etikett som visas på kortet. All betald exponering märks tydligt som annons. */
export function placementLabel(c: Commercial, now: Date): "Annons" | null {
  return isFeatured(c, now) || c.sponsorPlacement ? "Annons" : null;
}

/** Sortering: aktiva utvalda placeringar först, annars alfabetiskt – betalning påverkar aldrig om man syns. */
export function sortListings<T extends { name: string; commercial: Commercial }>(
  items: T[],
  now: Date,
): T[] {
  return [...items].sort((a, b) => {
    const fa = isFeatured(a.commercial, now) ? 0 : 1;
    const fb = isFeatured(b.commercial, now) ? 0 : 1;
    return fa - fb || a.name.localeCompare(b.name, "sv");
  });
}
