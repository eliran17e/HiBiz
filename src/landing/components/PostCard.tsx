import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "../blog/posts";

export function PostCard({ post }: { post: BlogPost }) {
  const { t } = useTranslation();

  return (
    <Link to={`/blog/${post.slug}`} className="block h-full">
      <article className="surface-card group h-full overflow-hidden rounded-xl">
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={post.cover}
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
              <ArrowRight className="h-3 w-3" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
