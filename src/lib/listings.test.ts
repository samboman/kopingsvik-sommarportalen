import { describe, expect, it } from "vitest";
import { TIER_FEATURES, TIER_IS_FREE, isFeatured, placementLabel, sortListings } from "./listings";

const now = new Date("2026-07-10T12:00:00+02:00");

describe("företagsprofiler", () => {
  it("basprofilen är gratis och innehåller all grundläggande företagsinformation", () => {
    expect(TIER_IS_FREE.bas).toBe(true);
    for (const f of ["namn", "beskrivning", "kontakt", "oppettider", "karta", "webbplats"] as const) {
      expect(TIER_FEATURES.bas).toContain(f);
    }
  });

  it("utökad profil kostar och ger extra funktioner utöver basen", () => {
    expect(TIER_IS_FREE.utokad).toBe(false);
    for (const f of TIER_FEATURES.bas) expect(TIER_FEATURES.utokad).toContain(f);
    expect(TIER_FEATURES.utokad).toContain("bokningsknapp");
    expect(TIER_FEATURES.bas).not.toContain("bokningsknapp");
  });

  it("betald utvald placering märks som Annons", () => {
    expect(placementLabel({ tier: "utokad", featuredUntil: "2026-08-31" }, now)).toBe("Annons");
  });

  it("sponsring (t.ex. av webbkamera) märks som Annons", () => {
    expect(placementLabel({ tier: "bas", sponsorPlacement: "kamera-stranden" }, now)).toBe("Annons");
  });

  it("utvald placering upphör efter slutdatum", () => {
    expect(isFeatured({ tier: "utokad", featuredUntil: "2026-07-09" }, now)).toBe(false);
    expect(placementLabel({ tier: "utokad", featuredUntil: "2026-07-09" }, now)).toBeNull();
  });

  it("alla företag listas oavsett nivå – utvalda först", () => {
    const sorted = sortListings(
      [
        { name: "Bageriet", commercial: { tier: "bas" as const } },
        { name: "Ölkrogen", commercial: { tier: "utokad" as const, featuredUntil: "2026-08-31" } },
        { name: "Antikboden", commercial: { tier: "bas" as const } },
      ],
      now,
    );
    expect(sorted.map((s) => s.name)).toEqual(["Ölkrogen", "Antikboden", "Bageriet"]);
  });
});
