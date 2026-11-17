import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export function BusinessCta() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] bg-sunset p-10 sm:p-14">
        <div className="absolute -right-16 -top-16 size-72 animate-sun-spin rounded-full border-[18px] border-dashed border-on-image/25" />
        <div className="relative max-w-2xl">
          <div className="eyebrow mb-3 text-deep">För lokala företag</div>
          <h2 className="text-4xl font-medium leading-tight text-deep sm:text-5xl">
            Att finnas med är gratis. Att synas extra är ett val.
          </h2>
          <p className="mt-4 text-lg text-deep/80">
            Skapa en gratis profil med öppettider, karta och kontaktuppgifter – eller lyft fram ditt företag med
            utökad profil och kamerasponsring.
          </p>
          <Button asChild variant="sea" size="xl" className="mt-8">
            <Link to="/for-foretag">Så fungerar det</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
