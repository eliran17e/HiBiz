import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  BedDouble,
  ShoppingBag,
  UtensilsCrossed,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const CHIPS: { key: string; icon: LucideIcon }[] = [
  { key: "retail", icon: ShoppingBag },
  { key: "restaurants", icon: UtensilsCrossed },
  { key: "hospitality", icon: BedDouble },
  { key: "services", icon: Wrench },
];

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden pt-24 pb-16 sm:pt-28">
      {/* Full-bleed backdrop */}
      <img
        src="/images/hero-bg.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover saturate-[0.55]"
      />
      <div className="absolute inset-0 bg-zinc-950/72" />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/55 to-zinc-950" />
      <div className="bg-grain pointer-events-none absolute inset-0 opacity-[0.04]" />

      <div className="relative mx-auto w-full max-w-4xl px-4 text-center sm:px-6">
        <h1 className="text-4xl font-semibold leading-[1.06] tracking-[-0.03em] text-zinc-50 sm:text-5xl lg:text-6xl">
          {t("landing.hero.titleLead")}{" "}
          <span className="text-gradient-accent">{t("landing.hero.titleGradient")}</span>{" "}
          {t("landing.hero.titleTail")}
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
          {t("landing.hero.subtitle")}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-7 py-3 text-sm font-semibold text-zinc-950 shadow-lg glow-accent transition-all hover:brightness-90"
          >
            {t("landing.nav.contact")}
          </a>
          <a
            href="#capabilities"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-600/70 bg-zinc-950/40 px-7 py-3 text-sm font-semibold text-zinc-100 backdrop-blur-sm transition-colors hover:bg-zinc-800/60"
          >
            {t("landing.hero.secondaryCta")}
            <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-2.5">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
            {t("landing.hero.builtFor")}
          </span>
          {CHIPS.map((chip) => {
            const Icon = chip.icon;
            return (
              <span
                key={chip.key}
                className="inline-flex items-center gap-1.5 rounded-full border border-zinc-700/60 bg-zinc-950/40 px-3 py-1.5 text-sm text-zinc-300 backdrop-blur-sm"
              >
                <Icon className="h-3.5 w-3.5 text-zinc-500" strokeWidth={2} />
                {t(`landing.hero.chips.${chip.key}`)}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
