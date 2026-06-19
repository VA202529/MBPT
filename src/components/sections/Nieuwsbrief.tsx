import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Mail } from "lucide-react";

const schema = z.object({
  naam: z.string().trim().min(2, "Naam is verplicht").max(80),
  email: z.string().trim().email("Ongeldig e-mailadres").max(150),
});

export function Nieuwsbrief() {
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse({ naam, email });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Controleer je gegevens");
      return;
    }
    toast.success("Je bent ingeschreven voor de MB PT nieuwsbrief.");
    setNaam("");
    setEmail("");
  }

  return (
    <div className="relative overflow-hidden border-2 border-accent bg-card p-7 md:p-10">
      <Mail className="absolute -right-6 -top-6 size-40 text-accent/5" />
      <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h3 className="font-display text-2xl uppercase md:text-3xl">
            Schrijf je in voor MB PT tips
          </h3>
          <p className="mt-2 max-w-md text-sm text-foreground/70">
            Ontvang eerlijke fitness-, voeding- en mindsettips direct in je inbox.
            Geen spam, geen verkooppraat.
          </p>
        </div>
        <form onSubmit={submit} className="flex flex-col gap-3 md:min-w-[320px]">
          <input
            value={naam}
            onChange={(e) => setNaam(e.target.value)}
            placeholder="Naam"
            className="border-b-2 border-border bg-transparent p-2 text-sm focus:border-accent focus:outline-none"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="E-mailadres"
            className="border-b-2 border-border bg-transparent p-2 text-sm focus:border-accent focus:outline-none"
          />
          <button
            type="submit"
            className="mt-2 rounded-sm bg-accent px-6 py-3 text-sm font-bold uppercase tracking-widest text-accent-foreground transition-transform hover:scale-[1.02]"
          >
            Inschrijven
          </button>
        </form>
      </div>
    </div>
  );
}
