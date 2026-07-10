import { useTranslation } from "react-i18next";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowRight, Check, Quote } from "lucide-react";
import { Reveal } from "../components/Reveal";

const INDUSTRY_KEYS = ["retail", "restaurants", "hospitality", "services"] as const;
type IndustryKey = (typeof INDUSTRY_KEYS)[number];

interface Feature {
  title: string;
  body: string;
}
interface StoryMetric {
  value: string;
  label: string;
}
interface Story {
  key: string;
  company: string;
  quote: string;
  person: string;
  role: string;
  metrics: StoryMetric[];
}

function isIndustryKey(key: string | undefined): key is IndustryKey {
  return !!key && (INDUSTRY_KEYS as readonly string[]).includes(key);
}

export default function IndustryPage() {
  const { key } = useParams();
  const { t } = useTranslation();

  if (!isIndustryKey(key)) {
    return <Navigate to="/" replace />;
  }

  const base = `landing.industries.${key}`;
  const features = t(`${base}.features`, { returnObjects: true }) as Feature[];
  const stories = t("landing.success.stories", { returnObjects: true }) as Story[];
  const story = stories.find((s) => s.key === key);

  return (
    <div key={key}>
      {/* Header — same full-bleed treatment as the homepage hero */}
      <section className="relative flex min-h-[52svh] items-end overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16">
        <img
          src={`/images/${key}.jpg`}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover saturate-[0.55]"
        />
        <div className="absolute inset-0 bg-zinc-950/72" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/55 to-zinc-950" />
        <div className="bg-grain pointer-events-none absolute inset-0 opacity-[0.04]" />

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-zinc-400">
            <span className="h-px w-6 bg-gradient-to-r from-transparent to-accent-500/70" />
            {t(`${base}.label`)}
          </span>
          <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-zinc-50 sm:text-4xl lg:text-5xl">
            {t(`${base}.title`)}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">
            {t(`${base}.subtitle`)}
          </p>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
              {t("landing.industries.useCasesLabel")}
            </span>
            <h2 className="mt-4 max-w-2xl text-[1.75rem] font-semibold leading-[1.12] text-zinc-50 sm:text-[2.125rem]">
              {t(`${base}.tagline`)}
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {features.map((feature, i) => (
              <Reveal key={feature.title} delay={(i % 2) * 100}>
                <div className="surface-card h-full rounded-xl p-6">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-500/15 ring-1 ring-inset ring-accent-500/30">
                    <Check className="h-4 w-4 text-accent-300" strokeWidth={3} />
                  </span>
                  <h3 className="mt-4 text-[0.9375rem] font-semibold text-zinc-100">
                    {feature.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{feature.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Success story — separate section, per client request */}
      {story && (
        <section className="border-t border-zinc-800/60 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="flex items-center gap-2">
                <Quote className="h-4 w-4 -scale-x-100 text-accent-400/80" />
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
                  {t("landing.industries.storyLabel")}
                </span>
              </div>

              <blockquote className="mt-6 text-xl font-medium leading-relaxed text-zinc-100 sm:text-2xl">
                “{story.quote}”
              </blockquote>
              <p className="mt-4 text-sm text-zinc-400">
                <span className="font-medium text-zinc-200">{story.person}</span> — {story.role},{" "}
                {story.company}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {story.metrics.map((metric) => (
                  <div key={metric.label} className="surface-card rounded-xl p-5">
                    <p className="font-display text-3xl font-semibold text-gradient-accent">
                      {metric.value}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{metric.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-zinc-800/60 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <h2 className="text-[1.75rem] font-semibold leading-[1.12] text-zinc-50 sm:text-[2.125rem]">
              {t("landing.industries.pageCtaTitle")}{" "}
              <span className="text-gradient-accent">
                {t("landing.industries.pageCtaGradient")}
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-400 sm:text-base">
              {t("landing.industries.pageCtaSubtitle")}
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-accent px-7 py-3 text-sm font-semibold text-zinc-950 shadow-lg glow-accent transition-all hover:brightness-90"
            >
              {t("landing.nav.contact")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
