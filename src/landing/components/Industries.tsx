import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

type IndustryKey = "retail" | "restaurants" | "hospitality" | "services";

const INDUSTRIES: IndustryKey[] = ["retail", "restaurants", "hospitality", "services"];

export function Industries() {
  const { t } = useTranslation();

  return (
    <section id="industries" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t("landing.industries.eyebrow")}
            lead={t("landing.industries.titleLead")}
            gradient={t("landing.industries.titleGradient")}
          />
        </Reveal>

        {/* Gateway cards — each links to its own industry page */}
        <Reveal delay={80}>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((key, i) => (
              <Link
                key={key}
                to={`/industries/${key}`}
                className="group relative aspect-[16/10] overflow-hidden rounded-xl text-start opacity-90 ring-1 ring-transparent transition-all duration-300 hover:opacity-100 hover:ring-accent-400/70 hover:glow-accent focus-visible:opacity-100 focus-visible:ring-accent-400/70 sm:aspect-[3/4]"
              >
                <img
                  src={`/images/${key}.jpg`}
                  alt=""
                  aria-hidden="true"
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
                  <span className="mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-400 transition-colors group-hover:text-accent-300">
                    {t("landing.industries.exploreCta")}
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
