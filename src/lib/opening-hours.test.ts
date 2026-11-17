import { describe, expect, it } from "vitest";
import { openStatus, type WeekHours } from "./opening-hours";

const cafe: WeekHours = [
  null,
  { open: "09:00", close: "17:00" },
  { open: "09:00", close: "17:00" },
  { open: "09:00", close: "17:00" },
  { open: "09:00", close: "22:00" },
  { open: "10:00", close: "01:00" },
  { open: "10:00", close: "16:00" },
];

describe("öppet just nu", () => {
  it("är öppet inom öppettiderna i svensk tid", () => {
    // Tisdag 10 nov 2026 kl 12:00 svensk tid (UTC+1)
    expect(openStatus(cafe, new Date("2026-11-10T11:00:00Z"))).toEqual({ open: true, closesAt: "17:00" });
  });

  it("är stängt på stängda dagar och visar nästa öppning", () => {
    // Måndag 9 nov 2026 kl 12:00
    expect(openStatus(cafe, new Date("2026-11-09T11:00:00Z"))).toEqual({
      open: false,
      opensAt: "09:00",
      opensDay: 1,
    });
  });

  it("räknar sommartid korrekt", () => {
    // Fredag 10 juli 2026 kl 21:30 svensk tid (UTC+2) – öppet till 22
    expect(openStatus(cafe, new Date("2026-07-10T19:30:00Z")).open).toBe(true);
  });

  it("hanterar öppet över midnatt", () => {
    // Natt mot söndag 12 juli 2026 kl 00:30 svensk tid – lördagens pass till 01:00
    expect(openStatus(cafe, new Date("2026-07-11T22:30:00Z"))).toEqual({ open: true, closesAt: "01:00" });
  });
});
