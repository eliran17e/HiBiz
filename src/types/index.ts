export interface TrendPoint {
  label: string;
  value: number;
}

export interface KpiCardData {
  key: "totalRevenue" | "footTraffic" | "avgTicket" | "csat";
  value: number;
  unit: "currency" | "number" | "percent" | "score";
  deltaPercent: number;
  trend: TrendPoint[];
}
