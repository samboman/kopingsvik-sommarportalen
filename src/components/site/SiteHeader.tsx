import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

const NAV = [
  { href: "/#live", label: "Live" },
  { href: "/#oppet", label: "Öppet nu" },
  { href: "/#planera", label: "Planera" },
  { href: "/#evenemang", label: "Evenemang" },
  { href: "/#foretag", label: "Bo & äta" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-1 md:flex" aria-label="Huvudmeny">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="sea" size="sm" className="hidden px-4 sm:inline-flex">
            <Link to="/for-foretag">För företag</Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Stäng meny" : "Öppna meny"}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border/60 px-5 py-3 md:hidden" aria-label="Mobilmeny">
          {[...NAV, { href: "/for-foretag", label: "För företag" }].map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 font-medium hover:bg-muted"
            >
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
