import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#top", label: "Home" },
  { href: "/#over", label: "Over" },
  { href: "/#pakketten", label: "Pakketten" },
  { href: "/#cases", label: "Cases" },
  { href: "/#blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link
          to="/"
          className="font-display text-2xl uppercase tracking-tighter"
          onClick={() => setOpen(false)}
        >
          MB<span className="text-accent">PT</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#aanmelden"
            className="rounded-sm bg-accent px-4 py-2 text-sm font-bold uppercase tracking-wider text-accent-foreground transition-transform hover:scale-[1.02]"
          >
            Meld je aan
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center md:hidden"
          aria-label="Menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col px-5 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-3 text-sm font-medium text-foreground/80"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/#aanmelden"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-sm bg-accent px-4 py-3 text-center text-sm font-bold uppercase tracking-wider text-accent-foreground"
            >
              Meld je aan
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
