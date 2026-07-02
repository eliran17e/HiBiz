import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  lead: string;
  gradient: string;
  align?: "start" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  lead,
  gradient,
  align = "start",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", className)}>
      <span
        className={cn(
          "inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-zinc-500",
          align === "center" && "justify-center",
        )}
      >
        <span className="h-px w-6 bg-gradient-to-r from-transparent to-accent-500/70" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-[1.75rem] font-semibold leading-[1.12] text-zinc-50 sm:text-[2.125rem]">
        {lead}{" "}
        <span className="text-gradient-accent">{gradient}</span>
      </h2>
    </div>
  );
}
