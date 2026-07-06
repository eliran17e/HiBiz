import { useTranslation } from "react-i18next";

const LEGAL_LINKS = [
  { key: "privacy", href: "/privacy" },
  { key: "terms", href: "/terms" },
  { key: "accessibility", href: "/accessibility" },
] as const;

export function LandingFooter() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-start">
            <a href="/" className="inline-flex items-center">
              <img src="/logo_full.png" alt="HiBiz AI" className="h-7 object-contain" />
            </a>
            <p className="mt-3 max-w-xs text-sm text-zinc-500">{t("landing.footer.tagline")}</p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            {LEGAL_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-zinc-400 transition-colors hover:text-zinc-100"
              >
                {t(`landing.footer.${link.key}`)}
              </a>
            ))}
            <a
              href="mailto:eyal@hibiz.dev"
              className="text-zinc-400 transition-colors hover:text-zinc-100"
            >
              {t("landing.footer.contact")}
            </a>
          </nav>
        </div>

        <div className="mt-10 border-t border-zinc-800/60 pt-6 text-center text-xs text-zinc-600">
          © {year} HiBiz AI. {t("landing.footer.rights")}
        </div>
      </div>
    </footer>
  );
}
