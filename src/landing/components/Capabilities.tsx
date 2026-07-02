import { useTranslation } from "react-i18next";
import {
  Bell,
  Brain,
  MessageSquareText,
  Network,
  Store,
  Sunrise,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

interface Capability {
  icon: string;
  title: string;
  body: string;
}

const ICONS: Record<string, LucideIcon> = {
  answers: MessageSquareText,
  alerts: Bell,
  integrations: Network,
  briefings: Sunrise,
  multiLocation: Store,
  decisions: Brain,
};

export function Capabilities() {
  const { t } = useTranslation();
  const items = t("landing.capabilities.items", { returnObjects: true }) as Capability[];

  return (
    <section id="capabilities" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t("landing.capabilities.eyebrow")}
            lead={t("landing.capabilities.titleLead")}
            gradient={t("landing.capabilities.titleGradient")}
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = ICONS[item.icon] ?? MessageSquareText;
            return (
              <Reveal key={item.icon} delay={(i % 3) * 100}>
                <div className="group relative h-full overflow-hidden rounded-xl bg-white/[0.02] p-5 transition-colors duration-300 hover:bg-white/[0.04]">
                  <div className="pointer-events-none absolute -top-16 -end-16 h-40 w-40 rounded-full bg-accent-500/0 blur-3xl transition-colors duration-500 group-hover:bg-accent-500/10" />
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-aurora-blue/20 to-aurora-violet/20 ring-1 ring-inset ring-white/10">
                    <Icon className="h-4 w-4 text-accent-300" />
                  </div>
                  <h3 className="mt-4 text-[0.9375rem] font-semibold text-zinc-100">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{item.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
