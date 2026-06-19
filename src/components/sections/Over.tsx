import { Target, ShieldCheck, TrendingUp } from "lucide-react";

const pijlers = [
  {
    icon: Target,
    title: "Discipline",
    text: "Geen excuses, geen shortcuts. We bouwen gewoontes die over twaalf maanden nog steeds staan.",
  },
  {
    icon: ShieldCheck,
    title: "Eerlijk advies",
    text: "Geen detox-thee, geen wonderpillen. Alleen wat onderbouwd is en bij jouw leven past.",
  },
  {
    icon: TrendingUp,
    title: "Echte progressie",
    text: "Meetbare resultaten op kracht, conditie en lichaamssamenstelling. Wekelijks bijgestuurd.",
  },
];

export function Over() {
  return (
    <section id="over" className="border-t border-border px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
          Over MB PT
        </p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl uppercase leading-tight md:text-5xl">
          Premium personal training voor mensen die{" "}
          <span className="text-accent">resultaat</span> boven excuses stellen.
        </h2>
        <p className="mt-6 max-w-2xl text-base text-foreground/70">
          MB PT is opgericht vanuit één frustratie: de fitnesswereld zit vol
          met loze beloftes. Wij doen het anders. Persoonlijke begeleiding,
          schema's op maat en eerlijk advies — gebouwd op wetenschap, niet op
          trends.
        </p>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {pijlers.map((p) => (
            <div
              key={p.title}
              className="group border border-border bg-card p-6 transition-colors hover:border-accent"
            >
              <div className="mb-4 grid size-11 place-items-center border border-accent/30 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <p.icon className="size-5" />
              </div>
              <h3 className="font-display text-xl uppercase">{p.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
