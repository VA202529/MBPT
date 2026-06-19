import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { MapPin, Mail, Phone, Instagram, Linkedin, MessageCircle } from "lucide-react";

const schema = z.object({
  naam: z.string().trim().min(2, "Naam te kort").max(80),
  email: z.string().trim().email("Ongeldig e-mailadres").max(150),
  telefoon: z.string().trim().min(6, "Telefoonnummer te kort").max(25),
  bericht: z.string().trim().min(10, "Bericht te kort").max(800),
});

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Controleer het formulier");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 500));
    toast.success("Bedankt! Je bericht is verstuurd, we reageren binnen 24 uur.");
    form.reset();
    setSubmitting(false);
  }

  return (
    <section id="contact" className="border-t border-border bg-card/40 px-5 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
            Contact
          </p>
          <h2 className="mt-3 font-display text-4xl uppercase md:text-5xl">
            Vragen? <span className="text-accent">Stel ze.</span>
          </h2>
          <p className="mt-4 max-w-md text-sm text-foreground/70">
            Geen verplichtingen, geen verkooppraatjes. Stuur je bericht en we
            denken met je mee.
          </p>

          <div className="mt-10 space-y-5">
            <div className="flex items-start gap-4">
              <div className="grid size-10 shrink-0 place-items-center border border-accent/30 text-accent">
                <MapPin className="size-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Regio</p>
                <p className="text-sm">Amsterdam & omstreken · Online wereldwijd</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="grid size-10 shrink-0 place-items-center border border-accent/30 text-accent">
                <Mail className="size-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">E-mail</p>
                <p className="text-sm">info@mbpt.nl</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="grid size-10 shrink-0 place-items-center border border-accent/30 text-accent">
                <Phone className="size-4" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Telefoon</p>
                <p className="text-sm">+31 6 00 00 00 00</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Volg MB PT
            </p>
            <div className="flex gap-3">
              {[Instagram, Linkedin, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid size-11 place-items-center border border-border transition-colors hover:border-accent hover:text-accent"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="space-y-4 border border-border bg-background p-6 md:p-8">
          <div>
            <label className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Naam</label>
            <input name="naam" className="w-full border-b-2 border-border bg-transparent p-2 text-sm focus:border-accent focus:outline-none" placeholder="Je naam" />
          </div>
          <div>
            <label className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-muted-foreground">E-mail</label>
            <input name="email" type="email" className="w-full border-b-2 border-border bg-transparent p-2 text-sm focus:border-accent focus:outline-none" placeholder="jij@email.nl" />
          </div>
          <div>
            <label className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Telefoonnummer</label>
            <input name="telefoon" type="tel" className="w-full border-b-2 border-border bg-transparent p-2 text-sm focus:border-accent focus:outline-none" placeholder="06 12 34 56 78" />
          </div>
          <div>
            <label className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Bericht</label>
            <textarea name="bericht" rows={5} className="w-full resize-none border border-border bg-transparent p-3 text-sm focus:border-accent focus:outline-none" placeholder="Waar kunnen we je mee helpen?" />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-sm bg-accent py-4 text-sm font-bold uppercase tracking-widest text-accent-foreground transition-transform hover:scale-[1.01] disabled:opacity-60"
          >
            {submitting ? "Versturen..." : "Verstuur bericht"}
          </button>
        </form>
      </div>
    </section>
  );
}
