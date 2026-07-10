import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { PostCard } from "./PostCard";
import { POSTS } from "../blog/posts";

export function Blog() {
  const { t } = useTranslation();
  const posts = POSTS.slice(0, 3);

  return (
    <section id="blog" className="py-16 sm:py-24">
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
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-zinc-500 transition-colors hover:text-accent-300"
            >
              {t("landing.blog.viewAll")}
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 100}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
