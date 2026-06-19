import { Instagram, Linkedin, MessageCircle } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background px-5 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <span className="font-display text-4xl uppercase tracking-tighter">
              MB<span className="text-accent">PT</span>
            </span>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Persoonlijke begeleiding, eerlijk advies en echte resultaten.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Snelle links
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="/#top" className="hover:text-accent">Home</a>
              <a href="/#over" className="hover:text-accent">Over</a>
              <a href="/#pakketten" className="hover:text-accent">Pakketten</a>
              <a href="/#cases" className="hover:text-accent">Cases</a>
              <a href="/#blog" className="hover:text-accent">Blog</a>
              <a href="/#contact" className="hover:text-accent">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Volg MB PT
            </h4>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="grid size-10 place-items-center border border-border transition-colors hover:border-accent hover:text-accent"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="grid size-10 place-items-center border border-border transition-colors hover:border-accent hover:text-accent"
              >
                <Linkedin className="size-4" />
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="grid size-10 place-items-center border border-border transition-colors hover:border-accent hover:text-accent"
              >
                <MessageCircle className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-center text-[11px] uppercase tracking-widest text-muted-foreground md:flex-row md:justify-between md:text-left">
          <p>© 2026 MB PT. Alle rechten voorbehouden.</p>
          <p className="font-semibold text-foreground/80">Website by Van Appiah</p>
        </div>
      </div>
    </footer>
  );
}
