"use client";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { useChartColors } from "@/components/diagrams/chart-colors";

const data = [
  { name: "Prebid", value: 58 },
  { name: "GAM", value: 24 },
  { name: "AdX", value: 14 },
  { name: "House", value: 4 },
];

export function AdsRevenueCard() {
  const c = useChartColors();
  const palette = [c.accent, c.accentSoft, c.muted, c.mutedFaint];

  return (
    <div className="relative w-full h-32">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            innerRadius="62%"
            outerRadius="100%"
            startAngle={90}
            endAngle={-270}
            stroke="none"
            paddingAngle={2}
          >
            {data.map((entry, i) => (
              <Cell key={entry.name} fill={palette[i]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <p className="text-lg font-semibold text-foreground tracking-tight leading-none">
          58<span className="text-xs text-muted">%</span>
        </p>
        <p className="text-[7px] text-muted-2 font-mono uppercase tracking-wider mt-0.5">
          header bidding
        </p>
      </div>
    </div>
  );
}
