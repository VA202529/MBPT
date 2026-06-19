import { useState } from "react";
import { Star } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

type Review = { naam: string; sterren: number; tekst: string };

const seed: Review[] = [
  {
    naam: "Daan K.",
    sterren: 5,
    tekst:
      "Geen verkooppraatjes, gewoon een schema dat werkt. Na 3 maanden eindelijk consistent en sterker dan ooit.",
  },
  {
    naam: "Sanne T.",
    sterren: 5,
    tekst:
      "Eerlijk advies dat echt past bij mijn leven. Geen crashdiëten maar een aanpak die ik volhoud.",
  },
  {
    naam: "Mehmet A.",
    sterren: 5,
    tekst:
      "De wekelijkse check-ins maken het verschil. Voelt niet als een coach maar als een teamgenoot.",
  },
  {
    naam: "Eva P.",
    sterren: 4,
    tekst:
      "Eindelijk progressie zien op de stang en de weegschaal. Aanrader voor wie serieus is.",
  },
];

const schema = z.object({
  naam: z.string().trim().min(2, "Naam te kort").max(60),
  sterren: z.number().min(1).max(5),
  tekst: z.string().trim().min(10, "Review te kort").max(400),
});

export function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(seed);
  const [sterren, setSterren] = useState(5);
  const [naam, setNaam] = useState("");
  const [tekst, setTekst] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse({ naam, sterren, tekst });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Controleer je review");
      return;
    }
    setReviews([parsed.data, ...reviews]);
    setNaam("");
    setTekst("");
    setSterren(5);
    toast.success("Bedankt! Je review is geplaatst.");
  }

  return (
    <section id="reviews" className="border-t border-border bg-card/40 px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
          Reviews
        </p>
        <h2 className="mt-3 font-display text-4xl uppercase md:text-5xl">
          Wat klanten <span className="text-accent">zeggen</span>
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {reviews.map((r, i) => (
            <article
              key={i}
              className="border border-border bg-background p-6 transition-colors hover:border-accent/50"
            >
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className={
                      "size-4 " +
                      (idx < r.sterren
                        ? "fill-accent text-accent"
                        : "text-foreground/20")
                    }
                  />
                ))}
              </div>
              <p className="text-sm text-foreground/85">"{r.tekst}"</p>
              <p className="mt-4 font-display text-sm uppercase tracking-wider">
                — {r.naam}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 border border-border bg-background p-6 md:p-8">
          <h3 className="font-display text-2xl uppercase">Laat een review achter</h3>
          <form onSubmit={submit} className="mt-6 space-y-4">
            <div>
              <label className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Naam
              </label>
              <input
                value={naam}
                onChange={(e) => setNaam(e.target.value)}
                className="w-full border-b-2 border-border bg-transparent p-2 text-sm focus:border-accent focus:outline-none"
                placeholder="Je naam"
              />
            </div>
            <div>
              <label className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Beoordeling
              </label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setSterren(n)}
                    aria-label={`${n} sterren`}
                  >
                    <Star
                      className={
                        "size-7 transition-colors " +
                        (n <= sterren
                          ? "fill-accent text-accent"
                          : "text-foreground/20 hover:text-accent/50")
                      }
                    />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Review
              </label>
              <textarea
                value={tekst}
                onChange={(e) => setTekst(e.target.value)}
                rows={4}
                className="w-full resize-none border border-border bg-transparent p-3 text-sm focus:border-accent focus:outline-none"
                placeholder="Vertel over je ervaring..."
              />
            </div>
            <button
              type="submit"
              className="rounded-sm bg-accent px-6 py-3 text-sm font-bold uppercase tracking-widest text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              Review plaatsen
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
