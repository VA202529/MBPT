## MB PT — Premium Personal Training Website

Eén-pagina marketing site (Nederlands) in de gekozen **Neon Dark** richting: zwart `#0A0A0A`, surface `#171717`, accent neon lime `#CCFF00`, Oswald display + Inter body.

### Routes

```
src/routes/
  __root.tsx        → laadt Oswald + Inter fonts via <link>, head meta
  index.tsx         → homepage met alle secties + smooth scroll
  blog.$slug.tsx    → blog artikel pagina ("echt-afvallen-zonder-neppe-tips" etc.)
```

### Secties op homepage (in volgorde)

1. **Sticky nav** — MB·PT logo, links Home/Over/Pakketten/Cases/Blog/Contact (hamburger op mobiel met sheet menu)
2. **Hero** — "Train slimmer. Word sterker." + dubbele CTA → scrollt naar Aanmelden / Pakketten, donkere gradient achtergrond
3. **Over MB PT** — korte motiverende tekst, 3 pijlers (Discipline · Eerlijk advies · Echte progressie)
4. **Pakketten** — 3 prijskaarten Basic / Pro (Populairst, accent border) / Elite met "Vanaf €..." en feature lijst
5. **Aanmeldformulier** — accent lime achtergrond sectie met alle velden (naam, email, tel, leeftijd, lengte, gewicht, doel, ervaring, frequentie, blessures), zod-validatie, sonner success toast
6. **Cases / Before & After** — 3 cards in grid met before/after image placeholders, naam + resultaat
7. **Reviews** — grid met seed reviews + formulier (naam, 1–5 sterren, tekst). Nieuwe reviews lokaal in state zichtbaar
8. **Blog** — 4 blog kaarten, klik → `/blog/$slug` artikel pagina met volledige tekst voor "Echt afvallen zonder neppe social media tips"
9. **Nieuwsbrief** — inschrijfblok (naam + email) onder blog
10. **Contact** — formulier (naam, email, tel, bericht) + social links + regio
11. **Footer** — logo, snel-links, socials, "© 2026 MB PT" + "Website by Van Appiah"

### Technisch

- Design tokens in `src/styles.css` onder `@theme inline`: `--background #0A0A0A`, `--card #171717`, `--accent #CCFF00`, plus shadcn semantic mapping. Geen hardcoded hex in componenten.
- Fonts via `<link>` tags in `__root.tsx` head (Oswald 700 + Inter 400/600). Geen `@import` URL in CSS.
- Componenten in `src/components/sections/` (Hero, Over, Pakketten, Aanmelden, Cases, Reviews, Blog, Nieuwsbrief, Contact, Footer) + `src/components/SiteNav.tsx`
- Formulieren: react-hook-form + zod (al aanwezig via shadcn form). Geen backend — submits tonen sonner toast met succesmelding uit de brief. Reviews state-only.
- Smooth scroll via `scroll-behavior: smooth` op html + anchor `id`s op secties
- Animaties: `animate-fade-in` op secties bij mount, `hover-scale` op kaarten en CTA's
- Image placeholders: hero achtergrond, 3 before/after paren (6 totaal), 1 blog cover — gegenereerd via imagegen (donker, sportief, geen tekst)
- SEO: `head()` op index met titel "MB PT — Personal Training | Train slimmer, word sterker", description, og tags; per blog route eigen meta
- Responsive: mobile-first volgens responsive-layout-patterns; nav hamburger < md
- Geen Lovable Cloud nodig — alles frontend/state-only zoals expliciet in de brief gevraagd ("eventueel lokaal opgeslagen of als frontend demo")

### Niet inbegrepen

- Echte email versturing of database opslag (kan later met Cloud)
- Echte betalingen voor pakketten
- Echte klantfoto's (placeholders die later vervangen kunnen worden)
