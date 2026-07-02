import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/hooks/useLanguage";

const NAV_LINKS = [
  { key: "howItWorks", href: "#how" },
  { key: "capabilities", href: "#capabilities" },
  { key: "industries", href: "#industries" },
  { key: "getAccess", href: "#contact" },
] as const;

export function LandingNav() {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLanguage = () => setLanguage(language === "en" ? "he" : "en");

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "glass border-b border-zinc-800/80"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <img src="/logo_full.png" alt="HiBiz AI" className="h-7 object-contain" />
        </Link>

        <nav className="mx-auto hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
            >
              {t(`landing.nav.${link.key}`)}
            </a>
          ))}
        </nav>

        <div className="ms-auto flex items-center gap-2 md:ms-0">
          <button
            type="button"
            onClick={toggleLanguage}
            className="rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 font-mono text-xs font-medium text-zinc-400 transition-colors hover:bg-zinc-800/60 hover:text-zinc-100"
          >
            {language === "en" ? "עברית" : "EN"}
          </button>
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-accent px-4 py-1.5 text-sm font-semibold text-white shadow-sm transition-all hover:brightness-110 sm:inline-flex"
          >
            {t("landing.hero.bookDemo")}
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 text-zinc-300 md:hidden"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="glass border-t border-zinc-800/80 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800/60"
              >
                {t(`landing.nav.${link.key}`)}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-1 rounded-lg bg-gradient-accent px-3 py-2.5 text-center text-sm font-semibold text-white"
            >
              {t("landing.hero.bookDemo")}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
