import { useTranslation } from "react-i18next";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

interface Step {
  title: string;
  body: string;
}

export function HowItWorks() {
  const { t } = useTranslation();
  const steps = t("landing.how.steps", { returnObjects: true }) as Step[];

  return (
    <section id="how" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t("landing.how.eyebrow")}
            lead={t("landing.how.titleLead")}
            gradient={t("landing.how.titleGradient")}
          />
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={i} delay={i * 120}>
              <div className="group relative h-full rounded-xl bg-white/[0.02] p-6 transition-colors duration-300 hover:bg-white/[0.04]">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm font-medium text-gradient-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-accent-500/40 to-transparent" />
                </div>
                <h3 className="mt-5 text-[0.9375rem] font-semibold text-zinc-100">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
