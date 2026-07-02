import { useId } from "react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import type { TrendPoint } from "@/types";

interface SparklineProps {
  data: TrendPoint[];
  positive?: boolean;
  className?: string;
}

export function Sparkline({ data, positive = true, className }: SparklineProps) {
  const gradientId = useId();
  const stroke = positive ? "#9b85f7" : "#f87171";

  return (
    <div className={className} style={{ height: 44 }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 4, right: 0, bottom: 0, left: 0 }}>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={stroke} stopOpacity={0.35} />
              <stop offset="100%" stopColor={stroke} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke={stroke}
            strokeWidth={1.75}
            fill={`url(#${gradientId})`}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
