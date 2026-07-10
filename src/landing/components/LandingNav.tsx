import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const INDUSTRY_LINKS = [
  { key: "retail", to: "/industries/retail" },
  { key: "restaurants", to: "/industries/restaurants" },
  { key: "hospitality", to: "/industries/hospitality" },
  { key: "services", to: "/industries/services" },
] as const;

export function LandingNav() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const platformRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the Platform dropdown on outside click or Escape.
  useEffect(() => {
    if (!platformOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (platformRef.current && !platformRef.current.contains(e.target as Node)) {
        setPlatformOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPlatformOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [platformOpen]);

  const closeAll = () => {
    setPlatformOpen(false);
    setMobileOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "glass border-b border-zinc-800/80"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <a
        href="#main"
        className="sr-only z-[60] rounded-lg bg-white px-4 py-2 text-sm font-semibold text-zinc-950 focus:not-sr-only focus:fixed focus:start-4 focus:top-4"
      >
        {t("landing.nav.skipToContent")}
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" onClick={closeAll} className="flex shrink-0 items-center gap-2">
          <img src="/logo_full.png" alt="HiBiz AI" className="h-7 object-contain" />
        </Link>

        <nav className="mx-auto hidden items-center gap-8 md:flex">
          {/* Platform ▾ — industry pages */}
          <div
            ref={platformRef}
            className="relative"
            onMouseEnter={() => setPlatformOpen(true)}
            onMouseLeave={() => setPlatformOpen(false)}
          >
            <button
              type="button"
              onClick={() => setPlatformOpen((v) => !v)}
              aria-expanded={platformOpen}
              aria-haspopup="menu"
              className={cn(
                "inline-flex items-center gap-1 py-2 text-sm font-medium transition-colors",
                platformOpen ? "text-zinc-100" : "text-zinc-400 hover:text-zinc-100",
              )}
            >
              {t("landing.nav.platform")}
              <ChevronDown
                className={cn("h-3.5 w-3.5 transition-transform", platformOpen && "rotate-180")}
              />
            </button>

            {platformOpen && (
              <div className="absolute start-0 top-full w-52 pt-2">
                <div className="glass overflow-hidden rounded-xl border border-zinc-800/80 py-1.5 shadow-xl">
                  {INDUSTRY_LINKS.map((link) => (
                    <Link
                      key={link.key}
                      to={link.to}
                      onClick={closeAll}
                      className="block px-4 py-2.5 text-sm text-zinc-300 transition-colors hover:bg-zinc-800/60 hover:text-zinc-100"
                    >
                      {t(`landing.industries.tabs.${link.key}`)}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            to="/#capabilities"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
          >
            {t("landing.nav.capabilities")}
          </Link>

          <Link
            to="/blog"
            className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-100"
          >
            {t("landing.nav.blog")}
          </Link>
        </nav>

        <div className="ms-auto flex items-center gap-2 md:ms-0">
          <button
            type="button"
            className="rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-800/60 hover:text-zinc-100"
          >
            {t("landing.nav.login")}
          </button>
          <Link
            to="/contact"
            className="hidden rounded-full bg-gradient-accent px-4 py-1.5 text-sm font-semibold text-zinc-950 shadow-sm transition-all hover:brightness-90 sm:inline-flex"
          >
            {t("landing.nav.contact")}
          </Link>
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
            <span className="px-3 pt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              {t("landing.nav.platform")}
            </span>
            {INDUSTRY_LINKS.map((link) => (
              <Link
                key={link.key}
                to={link.to}
                onClick={closeAll}
                className="rounded-lg px-3 py-2.5 ps-6 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800/60"
              >
                {t(`landing.industries.tabs.${link.key}`)}
              </Link>
            ))}
            <Link
              to="/#capabilities"
              onClick={closeAll}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800/60"
            >
              {t("landing.nav.capabilities")}
            </Link>
            <Link
              to="/blog"
              onClick={closeAll}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-zinc-800/60"
            >
              {t("landing.nav.blog")}
            </Link>
            <Link
              to="/contact"
              onClick={closeAll}
              className="mt-1 rounded-lg bg-gradient-accent px-3 py-2.5 text-center text-sm font-semibold text-zinc-950"
            >
              {t("landing.nav.contact")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
