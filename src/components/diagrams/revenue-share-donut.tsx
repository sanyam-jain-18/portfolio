"use client";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { Figure } from "@/components/diagrams/figure";
import { useChartColors } from "@/components/diagrams/chart-colors";

const data = [
  { name: "Prebid (header bidding)", value: 58 },
  { name: "GAM direct sold", value: 24 },
  { name: "AdX exchange", value: 14 },
  { name: "House / promo", value: 4 },
];

export function RevenueShareDonut() {
  const c = useChartColors();
  const palette = [c.accent, c.accentSoft, c.muted, c.mutedFaint];

  return (
    <Figure caption="Revenue mix after the rebuild. Header bidding became the dominant demand path because the integration surface was no longer the bottleneck on adding partners.">
      <div className="grid gap-8 sm:grid-cols-[minmax(0,260px)_1fr] items-center">
        <div className="relative w-full h-60 sm:h-64">
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
            <p className="text-3xl font-semibold text-foreground tracking-tight">
              58
              <span className="text-base text-muted">%</span>
            </p>
            <p className="text-[10px] text-muted-2 font-mono uppercase tracking-wider mt-0.5">
              header bidding
            </p>
          </div>
        </div>
        <ul className="space-y-3 text-sm">
          {data.map((d, i) => (
            <li key={d.name} className="flex items-center justify-between gap-4">
              <span className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="inline-block w-3 h-3 rounded-sm flex-shrink-0"
                  style={{ background: palette[i] }}
                />
                <span className="text-foreground">{d.name}</span>
              </span>
              <span className="text-muted-2 font-mono text-xs">{d.value}%</span>
            </li>
          ))}
        </ul>
      </div>
    </Figure>
  );
}
