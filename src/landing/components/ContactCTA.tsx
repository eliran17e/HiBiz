import { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";

const INDUSTRY_OPTIONS = ["retail", "restaurant", "service", "other"] as const;

export function ContactCTA() {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [industry, setIndustry] = useState<string>("retail");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-zinc-800/80 bg-ambient p-8 sm:p-10">
            <div className="pointer-events-none absolute -top-24 start-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent-500/10 blur-3xl" />

            <div className="relative text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-accent-200">
                {t("landing.contact.badge")}
              </span>
              <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-zinc-50 sm:text-4xl">
                {t("landing.contact.titleLead")}{" "}
                <span className="text-gradient-accent">{t("landing.contact.titleGradient")}</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-400 sm:text-base">
                {t("landing.contact.subtitle")}
              </p>
            </div>

            {submitted ? (
              <div className="relative mx-auto mt-10 flex max-w-md flex-col items-center rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.06] px-6 py-10 text-center">
                <CheckCircle2 className="h-10 w-10 text-emerald-400" />
                <p className="mt-4 text-lg font-semibold text-zinc-100">
                  {t("landing.contact.successTitle")}
                </p>
                <p className="mt-1.5 text-sm text-zinc-400">{t("landing.contact.successBody")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative mx-auto mt-10 max-w-xl">
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    required
                    type="text"
                    placeholder={t("landing.contact.name")}
                    className="h-11 w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-accent-500/50 focus:outline-none focus:ring-2 focus:ring-accent-500/30"
                  />
                  <input
                    required
                    type="email"
                    placeholder={t("landing.contact.email")}
                    className="h-11 w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-accent-500/50 focus:outline-none focus:ring-2 focus:ring-accent-500/30"
                  />
                </div>
                <input
                  required
                  type="text"
                  placeholder={t("landing.contact.business")}
                  className="mt-3 h-11 w-full rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-accent-500/50 focus:outline-none focus:ring-2 focus:ring-accent-500/30"
                />

                <div className="mt-4">
                  <p className="mb-2 text-xs font-medium text-zinc-500">
                    {t("landing.contact.industry")}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {INDUSTRY_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setIndustry(opt)}
                        className={
                          "rounded-full border px-3.5 py-1.5 text-sm transition-colors " +
                          (industry === opt
                            ? "border-transparent bg-gradient-accent font-medium text-white"
                            : "border-zinc-800 bg-zinc-900/60 text-zinc-300 hover:bg-zinc-800/60")
                        }
                      >
                        {t(`landing.contact.industryOptions.${opt}`)}
                      </button>
                    ))}
                  </div>
                </div>

                <textarea
                  rows={3}
                  placeholder={t("landing.contact.message")}
                  className="mt-4 w-full resize-none rounded-xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-accent-500/50 focus:outline-none focus:ring-2 focus:ring-accent-500/30"
                />

                <button
                  type="submit"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg glow-accent transition-all hover:brightness-110"
                >
                  {t("landing.contact.submit")}
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
