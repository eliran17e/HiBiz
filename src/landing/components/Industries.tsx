import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  BedDouble,
  Check,
  ShoppingBag,
  UtensilsCrossed,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

type IndustryKey = "retail" | "restaurants" | "hospitality" | "services";

const TABS: { key: IndustryKey; icon: LucideIcon }[] = [
  { key: "retail", icon: ShoppingBag },
  { key: "restaurants", icon: UtensilsCrossed },
  { key: "hospitality", icon: BedDouble },
  { key: "services", icon: Wrench },
];

interface Feature {
  title: string;
  body: string;
}
interface Stat {
  value: string;
  label: string;
}

export function Industries() {
  const { t } = useTranslation();
  const [active, setActive] = useState<IndustryKey>("retail");

  const base = `landing.industries.${active}`;
  const label = t(`${base}.label`);
  const title = t(`${base}.title`);
  const subtitle = t(`${base}.subtitle`);
  const features = t(`${base}.features`, { returnObjects: true }) as Feature[];
  const stats = t(`${base}.stats`, { returnObjects: true }) as Stat[];

  return (
    <section id="industries" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t("landing.industries.eyebrow")}
            lead={t("landing.industries.titleLead")}
            gradient={t("landing.industries.titleGradient")}
          />
        </Reveal>

        {/* Tabs */}
        <Reveal delay={80}>
          <div className="mt-12 flex flex-wrap gap-2">
            {TABS.map((tab) => {
              const isActive = active === tab.key;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActive(tab.key)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "border-transparent bg-gradient-accent text-white shadow-sm"
                      : "border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:bg-zinc-800/60 hover:text-zinc-100",
                  )}
                >
                  <Icon className="h-4 w-4" strokeWidth={2} />
                  {t(`landing.industries.tabs.${tab.key}`)}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Content */}
        <div key={active} className="mt-10 grid animate-fade-in gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left: treated industry photo with title overlaid */}
          <div className="relative min-h-[300px] overflow-hidden rounded-2xl border border-zinc-800 lg:min-h-[400px]">
            <img
              src={`/images/${active}.jpg`}
              alt={label}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover saturate-[0.85]"
            />
            {/* Duotone / readability overlays */}
            <div className="absolute inset-0 bg-zinc-950/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/45 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-900/60 via-transparent to-transparent mix-blend-soft-light" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
                {label}
              </span>
              <h3 className="mt-3 max-w-md font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
                {title}
              </h3>
            </div>
          </div>

          {/* Right: copy, features, stats */}
          <div>
            <p className="max-w-lg text-sm leading-relaxed text-zinc-400">{subtitle}</p>

            <ul className="mt-6 flex flex-col gap-4">
              {features.map((feature) => (
                <li key={feature.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-accent-500/15 ring-1 ring-inset ring-accent-500/30">
                    <Check className="h-3 w-3 text-accent-300" strokeWidth={3} />
                  </span>
                  <p className="text-sm leading-relaxed text-zinc-300">
                    <span className="font-medium text-zinc-100">{feature.title}</span>
                    <span className="text-zinc-500"> — {feature.body}</span>
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-7 grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-white/[0.02] p-4 transition-colors duration-300 hover:bg-white/[0.04]"
                >
                  <p className="font-mono text-2xl font-semibold text-gradient-accent">{stat.value}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
