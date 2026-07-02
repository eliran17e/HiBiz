import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

interface DemoScenario {
  key: string;
  label: string;
  desc: string;
  question?: string;
  answer: string;
}

const TYPING_MS = 1300;
const ADVANCE_MS = 7000;

function usePrefersReducedMotion() {
  return useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );
}

export function ProductDemo() {
  const { t } = useTranslation();
  const scenarios = t("landing.demo.scenarios", { returnObjects: true }) as DemoScenario[];
  const reducedMotion = usePrefersReducedMotion();

  const [active, setActive] = useState(0);
  const [phase, setPhase] = useState<"typing" | "answer">(reducedMotion ? "answer" : "typing");
  const scenario = scenarios[active];

  // Typing phase: show dots briefly before the agent's answer lands.
  useEffect(() => {
    if (reducedMotion) {
      setPhase("answer");
      return;
    }
    setPhase("typing");
    const id = setTimeout(() => setPhase("answer"), TYPING_MS);
    return () => clearTimeout(id);
  }, [active, reducedMotion]);

  // Auto-advance to the next scenario; the timer resets on manual selection.
  useEffect(() => {
    const id = setTimeout(() => setActive((a) => (a + 1) % scenarios.length), ADVANCE_MS);
    return () => clearTimeout(id);
  }, [active, scenarios.length]);

  return (
    <section id="product" className="relative scroll-mt-20 overflow-hidden py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-ambient opacity-60" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <SectionHeading
            eyebrow={t("landing.demo.eyebrow")}
            lead={t("landing.demo.titleLead")}
            gradient={t("landing.demo.titleGradient")}
          />
          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            {t("landing.demo.subtitle")}
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative mt-12">
            <div className="pointer-events-none absolute -inset-x-8 -top-8 bottom-0 -z-10 rounded-[2rem] bg-[radial-gradient(55%_60%_at_50%_0%,color-mix(in_srgb,var(--color-aurora-indigo)_20%,transparent),transparent_70%)] blur-2xl" />

            <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)] backdrop-blur-xl">
              {/* Window chrome */}
              <div className="flex items-center gap-3 border-b border-zinc-800/80 bg-zinc-950/50 px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                </div>
                <span className="ms-auto flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-live motion-safe:animate-pulse" />
                  {t("landing.demo.frameTag")}
                </span>
              </div>

              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                {/* Scenario selector */}
                <div className="flex flex-col justify-center gap-1 border-b border-zinc-800/80 p-4 sm:p-6 lg:border-b-0 lg:border-e">
                  {scenarios.map((s, i) => {
                    const isActive = i === active;
                    return (
                      <button
                        key={s.key}
                        type="button"
                        onClick={() => setActive(i)}
                        aria-pressed={isActive}
                        className={cn(
                          "rounded-xl border-s-2 px-4 py-3.5 text-start transition-all duration-200",
                          isActive
                            ? "border-accent-400 bg-white/[0.04]"
                            : "border-transparent opacity-60 hover:opacity-100 hover:bg-white/[0.02]",
                        )}
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="font-mono text-xs text-gradient-accent">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-sm font-semibold text-zinc-100">{s.label}</span>
                        </span>
                        <span className="mt-1 block text-[13px] leading-relaxed text-zinc-500">
                          {s.desc}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Chat replay */}
                <div className="flex min-h-[300px] flex-col bg-zinc-950/40 sm:min-h-[340px]">
                  <div className="flex items-center gap-2.5 border-b border-zinc-800/60 px-5 py-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-accent">
                      <img src="/logo_mark.png" alt="" className="h-4 w-4 object-contain" />
                    </div>
                    <span className="text-sm font-semibold text-zinc-100">HiBiz AI</span>
                    <span className="ms-auto rounded-md border border-zinc-800 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                      WhatsApp
                    </span>
                  </div>

                  <div key={active} className="flex flex-1 flex-col justify-center gap-3 px-5 py-6">
                    {scenario.question && (
                      <div className="flex justify-end motion-safe:animate-chat-in">
                        <div className="max-w-[85%] rounded-2xl rounded-ee-md bg-gradient-accent px-4 py-2.5 text-sm text-white">
                          {scenario.question}
                        </div>
                      </div>
                    )}

                    {phase === "typing" ? (
                      <div className="flex justify-start motion-safe:animate-chat-in">
                        <div className="flex items-center gap-1.5 rounded-2xl rounded-ss-md border border-zinc-800 bg-zinc-900 px-4 py-3.5">
                          {[0, 1, 2].map((d) => (
                            <span
                              key={d}
                              className="h-1.5 w-1.5 rounded-full bg-zinc-400 animate-typing-dot"
                              style={{ animationDelay: `${d * 0.18}s` }}
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="flex justify-start motion-safe:animate-chat-in">
                        <div className="max-w-[90%] rounded-2xl rounded-ss-md border border-zinc-800 bg-zinc-900 px-4 py-2.5 text-sm leading-relaxed text-zinc-200">
                          {scenario.answer}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Progress dots */}
                  <div className="flex items-center justify-center gap-1.5 pb-4">
                    {scenarios.map((s, i) => (
                      <span
                        key={s.key}
                        className={cn(
                          "h-1 rounded-full transition-all duration-300",
                          i === active ? "w-5 bg-accent-400" : "w-1.5 bg-zinc-700",
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
