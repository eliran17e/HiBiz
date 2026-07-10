import { useTranslation } from "react-i18next";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getPost } from "../blog/posts";

export default function BlogPostPage() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const post = slug ? getPost(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <article key={post.slug} className="pt-24 pb-16 sm:pt-28 sm:pb-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.14em] text-zinc-500 transition-colors hover:text-accent-300"
        >
          <ArrowLeft className="h-3 w-3" />
          {t("landing.blog.backToBlog")}
        </Link>

        <header className="mt-8">
          <span className="inline-flex items-center rounded-full border border-accent-500/30 bg-accent-500/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-200">
            {post.category}
          </span>
          <h1 className="mt-4 text-3xl font-semibold leading-[1.12] tracking-tight text-zinc-50 sm:text-4xl">
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-2 font-mono text-xs text-zinc-500">
            <span className="text-zinc-300">{post.author}</span>
            <span aria-hidden>·</span>
            <span>{post.date}</span>
            <span aria-hidden>·</span>
            <span>{post.read}</span>
          </div>
        </header>

        <div className="mt-8 overflow-hidden rounded-2xl border border-zinc-800/80">
          <img
            src={post.cover}
            alt=""
            className="aspect-[16/9] w-full object-cover saturate-[0.8]"
          />
        </div>

        <div className="mt-10">
          {post.body.map((section, i) => (
            <section key={i}>
              {section.h && (
                <h2 className="mt-10 text-xl font-semibold tracking-tight text-zinc-50 first:mt-0 sm:text-2xl">
                  {section.h}
                </h2>
              )}
              <p className="mt-4 text-base leading-relaxed text-zinc-300">{section.p}</p>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
