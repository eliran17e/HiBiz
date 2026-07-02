import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  BedDouble,
  Quote,
  ShoppingBag,
  UtensilsCrossed,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

interface StoryMetric {
  value: string;
  label: string;
}
interface Story {
  key: string;
  company: string;
  quote: string;
  person: string;
  role: string;
  metrics: StoryMetric[];
}

const COMPANY_ICONS: Record<string, LucideIcon> = {
  retail: ShoppingBag,
  restaurants: UtensilsCrossed,
  hospitality: BedDouble,
  services: Wrench,
};

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

export function SuccessStories() {
  const { t } = useTranslation();
  const stories = t("landing.success.stories", { returnObjects: true }) as Story[];
  const [active, setActive] = useState(0);
  const story = stories[active];

  return (
    <section id="customers" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <SectionHeading
            eyebrow={t("landing.success.eyebrow")}
            lead={t("landing.success.titleLead")}
            gradient={t("landing.success.titleGradient")}
          />
          <p className="mt-4 text-base leading-relaxed text-zinc-400">
            {t("landing.success.subtitle")}
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 grid gap-4 lg:grid-cols-[230px_1fr_250px]">
            {/* Customer list */}
            <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
              {stories.map((s, i) => {
                const Icon = COMPANY_ICONS[s.key] ?? ShoppingBag;
                const isActive = i === active;
                return (
                  <button
                    key={s.key}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={isActive}
                    className={cn(
                      "flex shrink-0 items-center gap-2.5 rounded-xl px-4 py-3 text-start transition-all duration-200",
                      isActive
                        ? "surface-card ring-1 ring-accent-500/40"
                        : "opacity-55 hover:opacity-100 hover:bg-white/[0.02]",
                    )}
                  >
                    <Icon
                      className={cn("h-4 w-4 shrink-0", isActive ? "text-accent-300" : "text-zinc-500")}
                      strokeWidth={2}
                    />
                    <span className="whitespace-nowrap font-display text-sm font-semibold text-zinc-200 lg:whitespace-normal">
                      {s.company}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Central quote card */}
            <div key={`q-${active}`} className="surface-card animate-fade-in flex flex-col rounded-2xl p-7 sm:p-9">
              <Quote className="h-7 w-7 -scale-x-100 text-accent-400/70 rtl:scale-x-100" />
              <blockquote className="mt-5 flex-1 font-display text-lg font-medium leading-relaxed text-zinc-100 sm:text-xl">
                “{story.quote}”
              </blockquote>
              <div className="mt-7 flex items-center gap-3.5 border-t border-zinc-800/70 pt-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-accent text-sm font-semibold text-white">
                  {initials(story.person)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-zinc-100">{story.person}</p>
                  <p className="text-xs text-zinc-500">
                    {story.role} · {story.company}
                  </p>
                </div>
              </div>
            </div>

            {/* Metric highlight cards */}
            <div key={`m-${active}`} className="grid animate-fade-in grid-cols-2 gap-4 lg:grid-cols-1">
              <div className="flex flex-col justify-center rounded-2xl bg-live/[0.08] p-5 ring-1 ring-inset ring-live/25">
                <p className="font-mono text-3xl font-semibold text-live">{story.metrics[0]?.value}</p>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400">{story.metrics[0]?.label}</p>
              </div>
              <div className="surface-card flex flex-col justify-center rounded-2xl p-5">
                <p className="font-mono text-3xl font-semibold text-zinc-50">{story.metrics[1]?.value}</p>
                <p className="mt-2 text-xs leading-relaxed text-zinc-500">{story.metrics[1]?.label}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
