import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  naam: z.string().trim().min(2, "Naam is verplicht").max(80),
  email: z.string().trim().email("Ongeldig e-mailadres").max(150),
  telefoon: z.string().trim().min(6, "Telefoonnummer is verplicht").max(25),
  leeftijd: z.coerce.number().min(14, "Min. 14").max(99),
  lengte: z.coerce.number().min(120, "Min. 120 cm").max(230),
  gewicht: z.coerce.number().min(35, "Min. 35 kg").max(250),
  doel: z.string().min(1, "Kies een doel"),
  ervaring: z.string().min(1, "Kies een niveau"),
  frequentie: z.string().min(1, "Kies een frequentie"),
  blessures: z.string().max(500).optional(),
});

const inputClass =
  "w-full bg-white/10 border-b-2 border-black/20 p-3 text-sm placeholder:text-black/50 focus:outline-none focus:border-black transition-colors";
const labelClass =
  "block text-[10px] font-bold uppercase tracking-widest text-black/70 mb-1";

export function Aanmelden() {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Controleer het formulier");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    toast.success("Bedankt voor je aanmelding. MB PT neemt zo snel mogelijk contact met je op.");
    form.reset();
    setSubmitting(false);
  }

  return (
    <section id="aanmelden" className="bg-accent px-5 py-24 text-accent-foreground">
      <div className="mx-auto max-w-3xl">
        <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-black/70">
          Aanmelden
        </p>
        <h2 className="mt-3 font-display text-4xl uppercase leading-tight md:text-5xl">
          Start je traject vandaag
        </h2>
        <p className="mt-3 max-w-xl text-sm text-black/80">
          Vul het formulier in voor een vrijblijvende intake. We nemen binnen
          24 uur contact met je op.
        </p>

        <form onSubmit={onSubmit} className="mt-10 space-y-5">
          <div>
            <label className={labelClass}>Volledige naam</label>
            <input name="naam" className={inputClass} placeholder="Voor- en achternaam" />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className={labelClass}>E-mailadres</label>
              <input name="email" type="email" className={inputClass} placeholder="jij@email.nl" />
            </div>
            <div>
              <label className={labelClass}>Telefoonnummer</label>
              <input name="telefoon" type="tel" className={inputClass} placeholder="06 12 34 56 78" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-5">
            <div>
              <label className={labelClass}>Leeftijd</label>
              <input name="leeftijd" type="number" className={inputClass} placeholder="30" />
            </div>
            <div>
              <label className={labelClass}>Lengte (cm)</label>
              <input name="lengte" type="number" className={inputClass} placeholder="180" />
            </div>
            <div>
              <label className={labelClass}>Gewicht (kg)</label>
              <input name="gewicht" type="number" className={inputClass} placeholder="80" />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className={labelClass}>Trainingsdoel</label>
              <select name="doel" className={inputClass} defaultValue="">
                <option value="" disabled>Kies een doel</option>
                <option>Afvallen</option>
                <option>Spiermassa opbouwen</option>
                <option>Conditie verbeteren</option>
                <option>Sterker worden</option>
                <option>Algemeen fitter</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Ervaring</label>
              <select name="ervaring" className={inputClass} defaultValue="">
                <option value="" disabled>Kies je niveau</option>
                <option>Beginner</option>
                <option>Gemiddeld</option>
                <option>Gevorderd</option>
              </select>
            </div>
          </div>

          <div>
            <label className={labelClass}>Hoe vaak per week wil je trainen?</label>
            <select name="frequentie" className={inputClass} defaultValue="">
              <option value="" disabled>Kies frequentie</option>
              <option>1x per week</option>
              <option>2x per week</option>
              <option>3x per week</option>
              <option>4x of meer per week</option>
            </select>
          </div>

          <div>
            <label className={labelClass}>Blessures of bijzonderheden (optioneel)</label>
            <textarea
              name="blessures"
              rows={3}
              className={inputClass + " resize-none"}
              placeholder="Bijv. lage rugklachten, knieoperatie 2022..."
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-black py-5 text-sm font-bold uppercase tracking-widest text-accent transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
          >
            {submitting ? "Versturen..." : "Verstuur aanmelding"}
          </button>
        </form>
      </div>
    </section>
  );
}
