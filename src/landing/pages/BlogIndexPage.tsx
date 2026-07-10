import { useTranslation } from "react-i18next";
import { Reveal } from "../components/Reveal";
import { PostCard } from "../components/PostCard";
import { POSTS } from "../blog/posts";

export default function BlogIndexPage() {
  const { t } = useTranslation();

  return (
    <div className="pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
            <span className="h-px w-6 bg-gradient-to-r from-transparent to-accent-500/70" />
            {t("landing.blog.eyebrow")}
          </span>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
            {t("landing.blog.indexTitleLead")}{" "}
            <span className="text-gradient-accent">{t("landing.blog.indexTitleGradient")}</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
            {t("landing.blog.subtitle")}
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 3) * 100}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
