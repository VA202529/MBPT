import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Hero } from "@/components/sections/Hero";
import { Over } from "@/components/sections/Over";
import { Pakketten } from "@/components/sections/Pakketten";
import { Aanmelden } from "@/components/sections/Aanmelden";
import { Cases } from "@/components/sections/Cases";
import { Reviews } from "@/components/sections/Reviews";
import { Blog } from "@/components/sections/Blog";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MB PT — Personal Training | Train slimmer, word sterker" },
      {
        name: "description",
        content:
          "Premium personal training met persoonlijke begeleiding, realistische schema's en eerlijk advies. Geen neppe social media beloftes — alleen wat werkt.",
      },
      { property: "og:title", content: "MB PT — Premium Personal Training" },
      {
        property: "og:description",
        content:
          "Persoonlijke begeleiding, eerlijk advies en echte resultaten. Meld je vandaag aan voor een vrijblijvende intake.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <Hero />
        <Over />
        <Pakketten />
        <Aanmelden />
        <Cases />
        <Reviews />
        <Blog />
        <Contact />
      </main>
      <SiteFooter />
      <Toaster theme="dark" position="top-center" richColors />
    </div>
  );
}
