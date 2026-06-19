import { Check } from "lucide-react";

const pakketten = [
  {
    name: "Basic",
    price: "Vanaf €99",
    per: "/ maand",
    desc: "Voor wie zelfstandig wil starten met een professioneel schema.",
    features: [
      "1x per week training",
      "Persoonlijk trainingsschema",
      "Basis voortgangscheck",
      "Toegang tot trainingsapp",
    ],
    featured: false,
  },
  {
    name: "Pro",
    price: "Vanaf €199",
    per: "/ maand",
    desc: "De meeste gekozen optie — perfecte balans tussen begeleiding en vrijheid.",
    features: [
      "2x per week training",
      "Persoonlijk trainingsschema",
      "Voedingsadvies op maat",
      "Wekelijkse check-in",
      "Aanpassingen op basis van progressie",
    ],
    featured: true,
  },
  {
    name: "Elite",
    price: "Vanaf €349",
    per: "/ maand",
    desc: "Maximale begeleiding voor wie écht een transformatie wil neerzetten.",
    features: [
      "3x per week training",
      "Volledige begeleiding",
      "Voedingsadvies & meal plan",
      "Progress tracking app",
      "24/7 coaching support",
    ],
    featured: false,
  },
];

export function Pakketten() {
  return (
    <section id="pakketten" className="border-t border-border bg-card/40 px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
            Pakketten
          </p>
          <h2 className="mt-4 font-display text-4xl uppercase md:text-5xl">
            Kies je <span className="text-accent">level</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-foreground/70">
            Drie pakketten, één doel: jouw resultaat. Twijfel je? Begin met een
            vrijblijvende intake en we adviseren wat het beste past.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {pakketten.map((p) => (
            <div
              key={p.name}
              className={
                "relative flex flex-col border bg-background p-7 transition-all " +
                (p.featured
                  ? "border-2 border-accent md:-translate-y-3 md:shadow-[0_0_40px_-12px_oklch(0.95_0.23_122/0.35)]"
                  : "border-border hover:border-accent/50")
              }
            >
              {p.featured && (
                <span className="absolute -top-3 left-6 bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground">
                  Populairst
                </span>
              )}
              <h3 className="font-display text-2xl uppercase">{p.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display text-3xl text-accent">{p.price}</span>
                <span className="text-xs text-muted-foreground">{p.per}</span>
              </div>
              <p className="mt-3 text-sm text-foreground/70">{p.desc}</p>

              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    <span className="text-foreground/85">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#aanmelden"
                className={
                  "mt-8 block rounded-sm py-3 text-center text-sm font-bold uppercase tracking-widest transition-colors " +
                  (p.featured
                    ? "bg-accent text-accent-foreground"
                    : "border border-foreground/20 hover:border-accent hover:text-accent")
                }
              >
                Kies dit pakket
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
