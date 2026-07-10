import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import { LandingFooter } from "./components/LandingFooter";

export type LegalKind = "privacy" | "terms" | "accessibility";

interface LegalSection {
  h: string;
  p: string;
}

export default function LegalPage({ kind }: { kind: LegalKind }) {
  const { t } = useTranslation();
  const sections = t(`landing.legal.${kind}.sections`, { returnObjects: true }) as LegalSection[];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="glass fixed inset-x-0 top-0 z-50 border-b border-zinc-800/80">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 sm:px-6">
          <a href="/" className="flex items-center">
            <img src="/logo_full.png" alt="HiBiz AI" className="h-7 object-contain" />
          </a>
          <div className="flex items-center gap-2">
            <a
              href="/"
              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 px-3.5 py-1.5 text-sm text-zinc-300 transition-colors hover:bg-zinc-800/60 hover:text-zinc-100"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              {t("landing.legal.backHome")}
            </a>
          </div>
        </div>
      </header>

      <main id="main" className="mx-auto max-w-3xl px-4 pt-32 pb-20 sm:px-6">
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          {t(`landing.legal.${kind}.title`)}
        </h1>
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.16em] text-zinc-500">
          {t("landing.legal.updated")}
        </p>

        <div className="mt-10 flex flex-col gap-8">
          {sections.map((section) => (
            <section key={section.h}>
              <h2 className="text-lg font-semibold text-zinc-100">{section.h}</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-zinc-400">{section.p}</p>
            </section>
          ))}
        </div>
      </main>

      <LandingFooter />
    </div>
  );
}
