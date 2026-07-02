import { useTranslation } from "react-i18next";

export function Marquee() {
  const { t } = useTranslation();
  const items = t("landing.marquee", { returnObjects: true }) as string[];
  const loop = [...items, ...items];

  return (
    <div className="border-y border-zinc-800/70 bg-zinc-950/40 py-4">
      <div className="mask-fade-x overflow-hidden">
        <div className="pause-on-hover flex w-max">
          <ul className="flex w-max shrink-0 animate-marquee items-center gap-10 pe-10">
            {loop.map((item, i) => (
              <li key={i} className="flex items-center gap-10 whitespace-nowrap">
                <span className="font-mono text-[13px] tracking-tight text-zinc-500">{item}</span>
                <span className="h-1 w-1 rounded-full bg-accent-500/60" aria-hidden />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
