import type { KpiCardData } from "@/types";

// Sample week-over-week KPI trend used by the hero's live-metric card.
export const kpiCards: KpiCardData[] = [
  {
    key: "totalRevenue",
    value: 284650,
    unit: "currency",
    deltaPercent: 12.4,
    trend: [
      { label: "Mon", value: 210 },
      { label: "Tue", value: 228 },
      { label: "Wed", value: 219 },
      { label: "Thu", value: 248 },
      { label: "Fri", value: 275 },
      { label: "Sat", value: 291 },
      { label: "Sun", value: 285 },
    ],
  },
];
