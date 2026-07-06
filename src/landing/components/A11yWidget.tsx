import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { PersonStanding, X } from "lucide-react";
import { cn } from "@/lib/utils";

const OPTIONS = [
  { key: "largeText", cls: "a11y-large" },
  { key: "contrast", cls: "a11y-contrast" },
  { key: "noMotion", cls: "a11y-no-motion" },
  { key: "links", cls: "a11y-links" },
] as const;

const STORAGE_KEY = "hibiz-a11y";

function loadPrefs(): Record<string, boolean> {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}");
  } catch {
    return {};
  }
}

export function A11yWidget() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<Record<string, boolean>>(loadPrefs);
  const panelRef = useRef<HTMLDivElement>(null);

  // Apply saved preferences as classes on <html> and persist changes.
  useEffect(() => {
    const root = document.documentElement;
    for (const opt of OPTIONS) {
      root.classList.toggle(opt.cls, Boolean(prefs[opt.key]));
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  }, [prefs]);

  // Close on Escape or outside click.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const toggle = (key: string) => setPrefs((p) => ({ ...p, [key]: !p[key] }));

  return (
    <div ref={panelRef} className="fixed bottom-4 start-4 z-[70]">
      {open && (
        <div
          role="dialog"
          aria-label={t("landing.a11y.title")}
          className="mb-3 w-64 rounded-2xl border border-zinc-700 bg-zinc-900 p-4 shadow-2xl"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-zinc-100">{t("landing.a11y.title")}</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t("landing.a11y.title")}
              className="flex h-7 w-7 items-center justify-center rounded-lg text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-3 flex flex-col gap-1.5">
            {OPTIONS.map((opt) => {
              const on = Boolean(prefs[opt.key]);
              return (
                <button
                  key={opt.key}
                  type="button"
                  role="switch"
                  aria-checked={on}
                  onClick={() => toggle(opt.key)}
                  className={cn(
                    "flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors",
                    on ? "bg-white/10 text-zinc-50" : "text-zinc-300 hover:bg-zinc-800",
                  )}
                >
                  {t(`landing.a11y.${opt.key}`)}
                  <span
                    aria-hidden
                    className={cn(
                      "flex h-5 w-9 items-center rounded-full p-0.5 transition-colors",
                      on ? "justify-end bg-white" : "justify-start bg-zinc-700",
                    )}
                  >
                    <span
                      className={cn(
                        "h-4 w-4 rounded-full",
                        on ? "bg-zinc-950" : "bg-zinc-400",
                      )}
                    />
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-zinc-800 pt-3">
            <button
              type="button"
              onClick={() => setPrefs({})}
              className="text-xs text-zinc-400 underline-offset-2 hover:text-zinc-100 hover:underline"
            >
              {t("landing.a11y.reset")}
            </button>
            <a
              href="/accessibility"
              className="text-xs text-zinc-400 underline-offset-2 hover:text-zinc-100 hover:underline"
            >
              {t("landing.a11y.statement")}
            </a>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t("landing.a11y.openLabel")}
        aria-expanded={open}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-zinc-100 shadow-xl transition-colors hover:bg-zinc-800"
      >
        <PersonStanding className="h-5 w-5" />
      </button>
    </div>
  );
}
