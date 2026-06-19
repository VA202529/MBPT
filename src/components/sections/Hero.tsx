import heroImg from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1080}
          className="size-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-24 pt-20 md:pb-40 md:pt-32">
        <p className="mb-6 inline-flex items-center gap-2 border border-accent/40 bg-background/50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-accent">
          <span className="size-1.5 animate-pulse rounded-full bg-accent" />
          Personal Training · Premium begeleiding
        </p>

        <h1 className="font-display text-5xl uppercase leading-[0.9] tracking-tight md:text-7xl lg:text-8xl">
          Train <span className="text-accent">slimmer</span>.
          <br />
          Word sterker.
          <br />
          <span className="text-foreground/70">Bereik echte resultaten.</span>
        </h1>

        <p className="mt-6 max-w-xl text-base text-foreground/70 md:text-lg">
          Persoonlijke begeleiding, realistische schema's en resultaatgerichte
          training. Geen neppe social media beloftes — alleen wat werkt.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#aanmelden"
            className="rounded-sm bg-accent px-8 py-4 text-center text-sm font-bold uppercase tracking-widest text-accent-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Meld je aan
          </a>
          <a
            href="#pakketten"
            className="rounded-sm border border-foreground/20 px-8 py-4 text-center text-sm font-bold uppercase tracking-widest transition-colors hover:border-accent hover:text-accent"
          >
            Bekijk pakketten
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 border-t border-border pt-8 md:max-w-lg">
          <div>
            <p className="font-display text-3xl text-accent md:text-4xl">120+</p>
            <p className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
              Klanten begeleid
            </p>
          </div>
          <div>
            <p className="font-display text-3xl text-accent md:text-4xl">8 jr</p>
            <p className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
              Ervaring
            </p>
          </div>
          <div>
            <p className="font-display text-3xl text-accent md:text-4xl">4.9</p>
            <p className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">
              Gem. review
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
