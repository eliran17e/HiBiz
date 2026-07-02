import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";
import { Sparkline } from "@/components/charts/Sparkline";
import { kpiCards } from "@/data/mockData";

export function HeroVisual() {
  const { t } = useTranslation();
  const c = (k: string) => t(`landing.hero.chat.${k}`);
  const spark = kpiCards[0].trend;

  return (
    <div className="relative mx-auto w-full max-w-[440px]">
      {/* Aurora glow */}
      <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[3rem] bg-[radial-gradient(50%_50%_at_60%_35%,color-mix(in_srgb,var(--color-aurora-indigo)_35%,transparent),transparent_70%)] blur-2xl" />

      {/* Live metric card peeking behind */}
      <div className="absolute -end-3 -top-8 hidden w-56 rotate-[3deg] rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4 shadow-2xl backdrop-blur-sm sm:block">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
            Revenue · today
          </span>
          <ArrowUpRight className="h-3.5 w-3.5 text-live" />
        </div>
        <p className="mt-1.5 font-mono text-2xl font-semibold text-zinc-50">$9,120</p>
        <Sparkline data={spark} className="mt-1" />
      </div>

      {/* Chat card */}
      <div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/70 shadow-[0_30px_80px_-24px_rgba(0,0,0,0.85)] backdrop-blur-xl">
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-zinc-800/80 px-5 py-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-accent">
            <img src="/logo_mark.png" alt="" className="h-5 w-5 object-contain" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-semibold text-zinc-100">{c("name")}</p>
            <p className="flex items-center gap-1.5 font-mono text-[11px] text-live">
              <span className="h-1.5 w-1.5 rounded-full bg-live" />
              {c("status")}
            </p>
          </div>
          <span className="rounded-md border border-zinc-800 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-zinc-500">
            WhatsApp
          </span>
        </div>

        {/* Messages */}
        <div className="flex flex-col gap-3 px-5 py-6">
          <div className="flex justify-end motion-safe:animate-chat-in" style={{ animationDelay: "0.25s" }}>
            <div className="max-w-[82%] rounded-2xl rounded-ee-md bg-gradient-accent px-4 py-2.5 text-sm text-white">
              {c("q1")}
              <span className="mt-1 block text-end font-mono text-[10px] text-white/60">{c("time")}</span>
            </div>
          </div>

          <div className="flex justify-start motion-safe:animate-chat-in" style={{ animationDelay: "0.95s" }}>
            <div className="max-w-[88%] rounded-2xl rounded-ss-md border border-zinc-800 bg-zinc-950/60 px-4 py-2.5 text-sm leading-relaxed text-zinc-200">
              {c("a1Pre")}
              <span className="font-semibold text-white">{c("a1Amount")}</span>
              {c("a1Mid")}
              <span className="font-semibold text-live">{c("a1Delta")}</span>
              {c("a1Post")}
              <span className="mt-1 block font-mono text-[10px] text-zinc-500">{c("time")}</span>
            </div>
          </div>

          <div className="flex justify-start motion-safe:animate-chat-in" style={{ animationDelay: "1.55s" }}>
            <div className="max-w-[88%] rounded-2xl rounded-ss-md border border-zinc-800 bg-zinc-950/60 px-4 py-2.5 text-sm leading-relaxed text-zinc-200">
              {c("a2")}
              <span className="mt-1 block font-mono text-[10px] text-zinc-500">{c("time")}</span>
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="flex items-center gap-3 border-t border-zinc-800/80 px-5 py-3.5">
          <div className="flex-1 rounded-full border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-xs text-zinc-500">
            {c("placeholder")}
          </div>
        </div>
      </div>
    </div>
  );
}
