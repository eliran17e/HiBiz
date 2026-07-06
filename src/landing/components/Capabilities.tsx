import { useTranslation } from "react-i18next";
import {
  Bell,
  Brain,
  MessageSquareText,
  Network,
  Store,
  Sunrise,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { DemoFrame } from "./ProductDemo";

interface Capability {
  icon: string;
  title: string;
  body: string;
}
interface Step {
  title: string;
  body: string;
}

const ICONS: Record<string, LucideIcon> = {
  answers: MessageSquareText,
  alerts: Bell,
  integrations: Network,
  briefings: Sunrise,
  multiLocation: Store,
  decisions: Brain,
};

// Merged "How it works + Capabilities" section (client-requested structure):
// heading → 3 process steps → live simulation → capability grid.
export function Capabilities() {
  const { t } = useTranslation();
  const items = t("landing.capabilities.items", { returnObjects: true }) as Capability[];
  const steps = t("landing.how.steps", { returnObjects: true }) as Step[];

  return (
    <section id="capabilities" className="relative scroll-mt-20 overflow-hidden py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-ambient opacity-60" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <SectionHeading
            eyebrow={t("landing.capabilities.eyebrow")}
            lead={t("landing.capabilities.titleLead")}
            gradient={t("landing.capabilities.titleGradient")}
          />
          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            {t("landing.demo.subtitle")}
          </p>
        </Reveal>

        {/* How it works — 3 steps */}
        <Reveal delay={80}>
          <div className="mt-12">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
              {t("landing.how.eyebrow")}
            </span>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {steps.map((step, i) => (
                <div key={step.title} className="surface-card rounded-xl p-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-medium text-gradient-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-r from-white/25 to-transparent" />
                  </div>
                  <h3 className="mt-4 text-[0.9375rem] font-semibold text-zinc-100">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Live simulation */}
        <Reveal delay={120}>
          <div className="mt-10">
            <DemoFrame />
          </div>
        </Reveal>

        {/* Capability grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = ICONS[item.icon] ?? MessageSquareText;
            return (
              <Reveal key={item.icon} delay={(i % 3) * 100}>
                <div className="surface-card group relative h-full overflow-hidden rounded-xl p-5">
                  <div className="pointer-events-none absolute -top-16 -end-16 h-40 w-40 rounded-full bg-white/0 blur-3xl transition-colors duration-500 group-hover:bg-white/[0.06]" />
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.06] ring-1 ring-inset ring-white/10">
                    <Icon className="h-4 w-4 text-zinc-200" />
                  </div>
                  <h3 className="mt-4 text-[0.9375rem] font-semibold text-zinc-100">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{item.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
