import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden pt-24 pb-16 sm:pt-28">
      {/* Full-bleed backdrop */}
      <video
        src="/videos/hero.mp4"
        poster="/images/hero-bg.jpg"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover saturate-[0.55]"
      />
      <div className="absolute inset-0 bg-zinc-950/72" />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/55 to-zinc-950" />
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-[0.04]" />

      <div className="relative mx-auto w-full max-w-4xl px-4 text-center sm:px-6">
        <h1 className="text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-zinc-50 sm:text-4xl lg:text-5xl">
          {t("landing.hero.titleLead")}{" "}
          <span className="text-gradient-accent">{t("landing.hero.titleGradient")}</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
          {t("landing.hero.subtitle")}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-7 py-3 text-sm font-semibold text-zinc-950 shadow-lg glow-accent transition-all hover:brightness-90"
          >
            {t("landing.nav.contact")}
          </Link>
          <Link
            to="/#capabilities"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-600/70 bg-zinc-950/40 px-7 py-3 text-sm font-semibold text-zinc-100 backdrop-blur-sm transition-colors hover:bg-zinc-800/60"
          >
            {t("landing.hero.secondaryCta")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
