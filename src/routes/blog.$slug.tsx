import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Nieuwsbrief } from "@/components/sections/Nieuwsbrief";
import { Toaster } from "@/components/ui/sonner";
import { getPostBySlug, blogPosts } from "@/data/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            { title: `${loaderData.title} — MB PT Blog` },
            { name: "description", content: loaderData.intro },
            { property: "og:title", content: loaderData.title },
            { property: "og:description", content: loaderData.intro },
            { property: "og:image", content: loaderData.image },
          ],
        }
      : {},
  component: BlogPostPage,
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center px-4">
      <div className="text-center">
        <h1 className="font-display text-5xl uppercase">Artikel niet gevonden</h1>
        <Link to="/" className="mt-6 inline-block text-accent underline">
          Terug naar home
        </Link>
      </div>
    </div>
  ),
  errorComponent: () => (
    <div className="grid min-h-screen place-items-center px-4">
      <p className="text-foreground/70">Er ging iets mis. Probeer opnieuw.</p>
    </div>
  ),
});

function renderParagraph(p: string, i: number) {
  // simple **bold** support at start
  if (p.startsWith("**")) {
    const match = p.match(/^\*\*(.+?)\*\*\s?(.*)$/);
    if (match) {
      return (
        <p key={i} className="text-foreground/85">
          <strong className="text-foreground">{match[1]}</strong> {match[2]}
        </p>
      );
    }
  }
  return (
    <p key={i} className="text-foreground/80">
      {p}
    </p>
  );
}

function BlogPostPage() {
  const post = Route.useLoaderData();
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        <article className="px-5 pb-20 pt-12">
          <div className="mx-auto max-w-3xl">
            <Link
              to="/"
              hash="blog"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-accent"
            >
              <ArrowLeft className="size-3" /> Terug naar blog
            </Link>

            <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.3em] text-accent">
              {post.category} · {post.readingTime}
            </p>
            <h1 className="mt-3 font-display text-4xl uppercase leading-[1.05] md:text-6xl">
              {post.title}
            </h1>
            <p className="mt-5 text-lg text-foreground/75">{post.intro}</p>
          </div>

          <div className="mx-auto mt-10 max-w-5xl">
            <div className="aspect-[16/9] overflow-hidden border border-border">
              <img
                src={post.image}
                alt={post.title}
                width={1600}
                height={900}
                className="size-full object-cover"
              />
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-5 text-base leading-relaxed">
            {post.content.map(renderParagraph)}
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <Nieuwsbrief />
          </div>

          <div className="mx-auto mt-20 max-w-6xl">
            <h2 className="font-display text-2xl uppercase">Lees ook</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {related.map((p) => (
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
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-accent">
                      {p.category}
                    </p>
                    <h3 className="mt-2 font-display text-lg uppercase leading-tight">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
      <Toaster theme="dark" position="top-center" richColors />
    </div>
  );
}
