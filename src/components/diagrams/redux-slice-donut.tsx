"use client";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { useChartColors } from "@/components/diagrams/chart-colors";

const data = [
  { name: "cart", value: 38 },
  { name: "product", value: 30 },
  { name: "user", value: 22 },
  { name: "alert", value: 10 },
];

export function ReduxSliceDonut() {
  const c = useChartColors();
  const palette = [c.accent, c.accentSoft, c.muted, c.mutedFaint];

  return (
    <div className="grid gap-5 grid-cols-[minmax(0,140px)_1fr] items-center w-full">
      <div className="relative w-full h-32">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius="60%"
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
          <p className="text-base font-semibold text-foreground tracking-tight">
            4
          </p>
          <p className="text-[8px] text-muted-2 font-mono uppercase tracking-wider">
            slices
          </p>
        </div>
      </div>
      <ul className="space-y-1.5 text-xs">
        {data.map((d, i) => (
          <li
            key={d.name}
            className="flex items-center justify-between gap-3"
          >
            <span className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-block w-2.5 h-2.5 rounded-sm flex-shrink-0"
                style={{ background: palette[i] }}
              />
              <span className="text-foreground font-mono">{d.name}</span>
            </span>
            <span className="text-muted-2 font-mono">{d.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
