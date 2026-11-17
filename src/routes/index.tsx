import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Hero } from "@/components/home/Hero";
import { LiveSection } from "@/components/home/LiveSection";
import { OpenNowSection } from "@/components/home/OpenNowSection";
import { GuidesSection } from "@/components/home/GuidesSection";
import { EventsSection } from "@/components/home/EventsSection";
import { BusinessSection } from "@/components/home/BusinessSection";
import { BusinessCta } from "@/components/home/BusinessCta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Köpingsvik.se – webbkameror, bad och lokala tips på Öland" },
      {
        name: "description",
        content:
          "Se stranden live, kolla badtemperaturen, hitta vad som har öppet och planera din dag i Köpingsvik på Öland.",
      },
      { property: "og:title", content: "Köpingsvik.se – upplev platsen, året runt" },
      {
        property: "og:description",
        content: "Webbkameror, badväder, öppettider och lokala tips från Köpingsvik på Öland.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <Hero />
        <LiveSection />
        <OpenNowSection />
        <GuidesSection />
        <EventsSection />
        <BusinessSection />
        <BusinessCta />
      </main>
      <SiteFooter />
    </div>
  );
}
