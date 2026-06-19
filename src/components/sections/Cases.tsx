import case1Before from "@/assets/case1-before.jpg";
import case1After from "@/assets/case1-after.jpg";
import case2Before from "@/assets/case2-before.jpg";
import case2After from "@/assets/case2-after.jpg";
import case3Before from "@/assets/case3-before.jpg";
import case3After from "@/assets/case3-after.jpg";

const cases = [
  {
    name: "Jesper D.",
    before: case1Before,
    after: case1After,
    result: "-12 kg & +5 kg spiermassa",
    duration: "12 weken",
    quote: "Eindelijk een aanpak zonder onzin. Resultaat sprak voor zich.",
  },
  {
    name: "Lisa M.",
    before: case2Before,
    after: case2After,
    result: "-8 kg & zichtbaar definitie",
    duration: "16 weken",
    quote: "Van geen consistentie naar 3x per week vol vertrouwen.",
  },
  {
    name: "Rob V.",
    before: case3Before,
    after: case3After,
    result: "+7 kg spiermassa, rugpijn weg",
    duration: "20 weken",
    quote: "Op mijn 52e weer voelen alsof ik 35 ben. Niet te koop.",
  },
];

export function Cases() {
  return (
    <section id="cases" className="border-t border-border px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
              Cases
            </p>
            <h2 className="mt-3 font-display text-4xl uppercase md:text-5xl">
              Echte <span className="text-accent">progressie</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-foreground/70">
            Geen photoshop, geen extreme verlichting. Alleen klanten die hun
            werk hebben gedaan — en het bewijs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <article
              key={c.name}
              className="group border border-border bg-card p-4 transition-colors hover:border-accent/60"
            >
              <div className="grid grid-cols-2 gap-1">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={c.before}
                    alt={`${c.name} vóór`}
                    loading="lazy"
                    width={640}
                    height={800}
                    className="size-full object-cover grayscale transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute bottom-2 left-2 bg-background/80 px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest backdrop-blur">
                    Vóór
                  </span>
                </div>
                <div className="relative aspect-[3/4] overflow-hidden border-l-2 border-accent">
                  <img
                    src={c.after}
                    alt={`${c.name} na`}
                    loading="lazy"
                    width={640}
                    height={800}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute bottom-2 left-2 bg-accent px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-accent-foreground">
                    Na
                  </span>
                </div>
              </div>

              <div className="mt-5 space-y-1">
                <p className="font-display text-xl uppercase">{c.name}</p>
                <p className="font-display text-base text-accent">{c.result}</p>
                <p className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  In {c.duration}
                </p>
                <p className="pt-3 text-sm italic text-foreground/70">"{c.quote}"</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
