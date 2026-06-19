import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { Nieuwsbrief } from "./Nieuwsbrief";

export function Blog() {
  const [featured, ...rest] = blogPosts;

  return (
    <section id="blog" className="border-t border-border px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
              Blog
            </p>
            <h2 className="mt-3 font-display text-4xl uppercase md:text-5xl">
              Geen social media <span className="text-accent">onzin</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-foreground/70">
            Eerlijke artikelen over fitness, voeding en mindset. Onderbouwd,
            kort en zonder verkooppraat.
          </p>
        </div>

        <Link
          to="/blog/$slug"
          params={{ slug: featured.slug }}
          className="group block border border-border bg-card transition-colors hover:border-accent/60"
        >
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto">
              <img
                src={featured.image}
                alt={featured.title}
                loading="lazy"
                width={1024}
                height={640}
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center border-t border-border p-7 md:border-l md:border-t-0">
              <p className="text-[10px] font-bold uppercase tracking-widest text-accent">
                {featured.category} · {featured.readingTime}
              </p>
              <h3 className="mt-3 font-display text-3xl uppercase leading-tight md:text-4xl">
                {featured.title}
              </h3>
              <p className="mt-4 text-sm text-foreground/70">{featured.intro}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent">
                Lees artikel <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </Link>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {rest.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group flex flex-col border border-border bg-card transition-colors hover:border-accent/60"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-accent">
                  {p.category}
                </p>
                <h3 className="mt-2 font-display text-xl uppercase leading-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-foreground/70">{p.intro}</p>
                <span className="mt-auto pt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent">
                  Lees artikel <ArrowRight className="size-3 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14">
          <Nieuwsbrief />
        </div>
      </div>
    </section>
  );
}
