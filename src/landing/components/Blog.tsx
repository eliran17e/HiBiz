import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

interface BlogPost {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  read: string;
}

// Covers live outside i18n — same image serves both languages.
// New posts just need an entry in the locale files + a cover here;
// the grid (1 → 2 → 3 columns) scales cleanly to any post count.
const COVERS = ["/images/blog-1.jpg", "/images/blog-2.jpg", "/images/blog-3.jpg"];

export function Blog() {
  const { t } = useTranslation();
  const posts = t("landing.blog.posts", { returnObjects: true }) as BlogPost[];

  return (
    <section id="blog" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <SectionHeading
                eyebrow={t("landing.blog.eyebrow")}
                lead={t("landing.blog.titleLead")}
                gradient={t("landing.blog.titleGradient")}
              />
              <p className="mt-4 text-base leading-relaxed text-zinc-400">
                {t("landing.blog.subtitle")}
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-zinc-500">
              {t("landing.blog.viewAll")}
              <ArrowRight className="h-3 w-3 rtl:rotate-180" />
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={(i % 3) * 100}>
              <article className="surface-card group h-full overflow-hidden rounded-xl">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={COVERS[i % COVERS.length]}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover saturate-[0.8] transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-col gap-3 p-5">
                  <span className="inline-flex w-fit items-center rounded-full border border-accent-500/30 bg-accent-500/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-200">
                    {post.category}
                  </span>
                  <h3 className="text-[0.9375rem] font-semibold leading-snug text-zinc-100 transition-colors group-hover:text-accent-200">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{post.excerpt}</p>
                  <div className="mt-auto flex items-center gap-2 pt-2 font-mono text-[11px] text-zinc-500">
                    <span>{post.date}</span>
                    <span aria-hidden>·</span>
                    <span>{post.read}</span>
                    <span className="ms-auto inline-flex items-center gap-1 text-accent-300 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      {t("landing.blog.readCta")}
                      <ArrowRight className="h-3 w-3 rtl:rotate-180" />
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
