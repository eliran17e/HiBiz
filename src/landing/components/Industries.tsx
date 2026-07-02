import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

type IndustryKey = "retail" | "restaurants" | "hospitality" | "services";

const INDUSTRIES: IndustryKey[] = ["retail", "restaurants", "hospitality", "services"];

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
  const title = t(`${base}.title`);
  const subtitle = t(`${base}.subtitle`);
  const features = t(`${base}.features`, { returnObjects: true }) as Feature[];
  const stats = t(`${base}.stats`, { returnObjects: true }) as Stat[];

  return (
    <section id="industries" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t("landing.industries.eyebrow")}
            lead={t("landing.industries.titleLead")}
            gradient={t("landing.industries.titleGradient")}
          />
        </Reveal>

        {/* Gateway cards — each acts as the entry point to an industry solution */}
        <Reveal delay={80}>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((key, i) => {
              const isActive = active === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActive(key)}
                  aria-pressed={isActive}
                  className={cn(
                    "group relative aspect-[16/10] overflow-hidden rounded-xl text-start transition-all duration-300 sm:aspect-[3/4]",
                    isActive
                      ? "ring-1 ring-accent-400/70 glow-accent"
                      : "opacity-75 hover:opacity-100",
                  )}
                >
                  <img
                    src={`/images/${key}.jpg`}
                    alt={t(`landing.industries.${key}.label`)}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover saturate-[0.8] motion-safe:animate-ken-burns"
                    style={{ animationDelay: `${i * -5}s` }}
                  />
                  <div className="absolute inset-0 bg-zinc-950/35" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/35 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="font-display text-base font-semibold text-white">
                      {t(`landing.industries.${key}.label`)}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-300">
                      {t(`landing.industries.${key}.tagline`)}
                    </p>
                    <span
                      className={cn(
                        "mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors",
                        isActive ? "text-accent-300" : "text-zinc-400 group-hover:text-accent-300",
                      )}
                    >
                      {t("landing.industries.exploreCta")}
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 rtl:rotate-180 rtl:group-hover:-translate-x-0.5" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Detail panel for the selected industry */}
        <div key={active} className="mt-10 grid animate-fade-in gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h3 className="font-display text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl">
              {title}
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-zinc-400">{subtitle}</p>

            <ul className="mt-7 flex flex-col gap-4">
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
          </div>

          <div className="grid grid-cols-2 gap-3 self-start">
            {stats.map((stat) => (
              <div key={stat.label} className="surface-card rounded-xl p-4">
                <p className="font-mono text-2xl font-semibold text-gradient-accent">{stat.value}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
