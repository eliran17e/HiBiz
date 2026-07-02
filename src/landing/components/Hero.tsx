import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  BedDouble,
  ShoppingBag,
  UtensilsCrossed,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { HeroVisual } from "./HeroVisual";

const CHIPS: { key: string; icon: LucideIcon }[] = [
  { key: "retail", icon: ShoppingBag },
  { key: "restaurants", icon: UtensilsCrossed },
  { key: "hospitality", icon: BedDouble },
  { key: "services", icon: Wrench },
];

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-ambient pt-28 pb-16 sm:pt-36 sm:pb-24">
      {/* Fine grid texture */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Bottom fade into the page */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-zinc-950" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8">
        <div className="animate-reveal">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-live/70 opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-live" />
            </span>
            {t("landing.hero.badge")}
          </span>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-zinc-50 sm:text-5xl lg:text-[3.25rem]">
            {t("landing.hero.titleLead")}{" "}
            <span className="text-gradient-accent">{t("landing.hero.titleGradient")}</span>{" "}
            {t("landing.hero.titleTail")}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400">
            {t("landing.hero.subtitle")}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-white shadow-lg glow-accent transition-all hover:brightness-110"
            >
              {t("landing.hero.bookDemo")}
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900/50 px-6 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:bg-zinc-800/60"
            >
              {t("landing.nav.howItWorks")}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2.5">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-600">
              {t("landing.hero.builtFor")}
            </span>
            {CHIPS.map((chip) => {
              const Icon = chip.icon;
              return (
                <span
                  key={chip.key}
                  className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/40 px-3 py-1.5 text-sm text-zinc-300"
                >
                  <Icon className="h-3.5 w-3.5 text-zinc-500" strokeWidth={2} />
                  {t(`landing.hero.chips.${chip.key}`)}
                </span>
              );
            })}
          </div>
        </div>

        <div className="animate-reveal [animation-delay:140ms]">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
