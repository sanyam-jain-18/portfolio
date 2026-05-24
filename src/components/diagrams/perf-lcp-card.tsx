"use client";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  YAxis,
} from "recharts";
import { useChartColors } from "@/components/diagrams/chart-colors";

const data = [
  { w: 1, lcp: 4.2 },
  { w: 2, lcp: 4.0 },
  { w: 3, lcp: 3.6 },
  { w: 4, lcp: 3.1 },
  { w: 5, lcp: 2.8 },
  { w: 6, lcp: 2.6 },
  { w: 7, lcp: 2.3 },
  { w: 8, lcp: 2.1 },
  { w: 9, lcp: 2.0 },
  { w: 10, lcp: 1.9 },
  { w: 11, lcp: 1.8 },
  { w: 12, lcp: 1.8 },
];

export function PerfLcpCard() {
  const c = useChartColors();
  return (
    <div className="relative w-full h-32">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 14, right: 4, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="lcp-card-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={c.accent} stopOpacity={0.4} />
              <stop offset="100%" stopColor={c.accent} stopOpacity={0} />
            </linearGradient>
          </defs>
          <YAxis hide domain={[0, 5]} />
          <Area
            type="monotone"
            dataKey="lcp"
            stroke={c.accent}
            strokeWidth={2}
            fill="url(#lcp-card-gradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="absolute top-1 left-2 right-2 flex items-baseline justify-between">
        <span className="text-[9px] font-mono text-muted-2 uppercase tracking-wider">
          p75 LCP
        </span>
        <span className="text-xs font-mono text-foreground">
          4.2s <span className="text-muted-2">→</span>{" "}
          <span className="text-accent">1.8s</span>
        </span>
      </div>
    </div>
  );
}
