import { Droplets, Sun, Sunset, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroBeach from "@/assets/hero-beach.jpg";
import { conditions } from "@/lib/data";

export function Hero() {
  const stats = [
    { icon: Sun, label: "Luft", value: conditions.air, sub: conditions.weather },
    { icon: Droplets, label: "Vatten", value: conditions.water, sub: "Badtemperatur" },
    { icon: Wind, label: "Vind", value: conditions.wind, sub: "Svag bris" },
    { icon: Sunset, label: "Solnedgång", value: conditions.sunset, sub: `Upp ${conditions.sunrise}` },
  ];
  return (
    <section className="relative">
      <div className="relative h-[88vh] min-h-[600px] overflow-hidden">
        <img
          src={heroBeach}
          alt="Sandstranden i Köpingsvik med badbrygga i kvällssol"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-40 lg:px-8">
          <Badge variant="glass" className="mb-6 w-fit animate-rise-in px-3 py-1">
            Guldkanten av Öland
          </Badge>
          <h1
            className="max-w-4xl animate-rise-in text-5xl font-medium leading-[0.95] text-on-image text-balance-wrap sm:text-7xl lg:text-8xl"
            style={{ animationDelay: "80ms" }}
          >
            Köpingsvik – upplev platsen, <em className="font-normal italic text-sun">året runt.</em>
          </h1>
          <p
            className="mt-6 max-w-xl animate-rise-in text-lg text-on-image/90"
            style={{ animationDelay: "160ms" }}
          >
            Webbkameror, badväder, vad som har öppet och lokala tips – från folk som är här.
          </p>
          <div className="mt-8 flex animate-rise-in flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
            <Button asChild variant="sun" size="xl">
              <a href="#live">Se stranden just nu</a>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href="#planera">Planera din dag</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto -mt-24 max-w-6xl px-5 lg:px-8">
        <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-border bg-card shadow-lift md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex items-center gap-4 p-5 sm:p-6 ${i > 0 ? "md:border-l" : ""} ${i % 2 === 1 ? "border-l md:border-l" : ""} ${i > 1 ? "border-t md:border-t-0" : ""} border-border`}
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
                <s.icon className="size-5" />
              </span>
              <div>
                <div className="eyebrow text-muted-foreground">{s.label}</div>
                <div className="font-display text-2xl font-semibold">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.sub}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Uppdateras automatiskt · senast 14:32
        </p>
      </div>
    </section>
  );
}
