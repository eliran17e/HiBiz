import { useTranslation } from "react-i18next";
import { Mail } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { ContactForm } from "../components/ContactForm";

export default function ContactPage() {
  const { t } = useTranslation();
  const steps = t("landing.contact.page.expectSteps", { returnObjects: true }) as string[];

  return (
    <div className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-ambient opacity-60" />

      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left — heading + expectations */}
        <Reveal>
          <div>
            <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-zinc-500">
              <span className="h-px w-6 bg-gradient-to-r from-transparent to-accent-500/70" />
              {t("landing.contact.page.eyebrow")}
            </span>
            <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-4xl">
              {t("landing.contact.titleLead")}{" "}
              <span className="text-gradient-accent">{t("landing.contact.titleGradient")}</span>
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base">
              {t("landing.contact.subtitle")}
            </p>

            <div className="mt-10">
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                {t("landing.contact.page.expectTitle")}
              </span>
              <ol className="mt-4 flex flex-col gap-4">
                {steps.map((step, i) => (
                  <li key={step} className="flex gap-3">
                    <span className="font-mono text-sm font-medium text-gradient-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-relaxed text-zinc-300">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-10 flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-zinc-500" />
              <span className="text-zinc-500">{t("landing.contact.page.emailLabel")}</span>
              <a
                href="mailto:eyal@hibiz.dev"
                className="text-zinc-200 underline decoration-zinc-600 underline-offset-4 transition-colors hover:text-accent-300 hover:decoration-accent-400/60"
              >
                eyal@hibiz.dev
              </a>
            </div>
          </div>
        </Reveal>

        {/* Right — form card */}
        <Reveal delay={100}>
          <div className="relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-ambient p-6 sm:p-8">
            <div className="pointer-events-none absolute -top-24 start-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent-500/10 blur-3xl" />
            <div className="relative">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
