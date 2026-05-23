"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Figure } from "@/components/diagrams/figure";
import { useChartColors } from "@/components/diagrams/chart-colors";

type Metric = {
  key: string;
  label: string;
  unit: string;
  good: number;
  data: { phase: "Before" | "After"; value: number }[];
};

const metrics: Metric[] = [
  {
    key: "lcp",
    label: "LCP",
    unit: "s",
    good: 2.5,
    data: [
      { phase: "Before", value: 4.2 },
      { phase: "After", value: 1.8 },
    ],
  },
  {
    key: "cls",
    label: "CLS",
    unit: "",
    good: 0.1,
    data: [
      { phase: "Before", value: 0.34 },
      { phase: "After", value: 0.04 },
    ],
  },
  {
    key: "inp",
    label: "INP",
    unit: "ms",
    good: 200,
    data: [
      { phase: "Before", value: 410 },
      { phase: "After", value: 160 },
    ],
  },
];

export function PerfMetricsChart() {
  const c = useChartColors();

  return (
    <Figure caption="Median real-user metrics across primary landing surfaces, before and after the perf programme. Lower is better.">
      <ul className="grid gap-6 sm:gap-8 sm:grid-cols-3">
        {metrics.map((m) => {
          const before = m.data[0].value;
          const after = m.data[1].value;
          const delta = Math.round(((before - after) / before) * 100);
          const passing = after <= m.good;
          return (
            <li key={m.key}>
              <div className="flex items-baseline justify-between mb-2">
                <p className="text-sm font-semibold text-foreground font-mono">
                  {m.label}
                </p>
                <p className="text-xs text-accent font-mono">−{delta}%</p>
              </div>
              <p className="text-[10px] text-muted-2 font-mono mb-3 uppercase tracking-wider">
                target ≤ {m.good}
                {m.unit} · {passing ? "passing" : "approaching"}
              </p>
              <div className="h-44">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={m.data}
                    margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
                    barCategoryGap="30%"
                  >
                    <CartesianGrid
                      vertical={false}
                      stroke={c.grid}
                      strokeDasharray="2 4"
                    />
                    <XAxis
                      dataKey="phase"
                      tick={{ fill: c.label, fontSize: 11 }}
                      tickLine={false}
                      axisLine={{ stroke: c.grid }}
                    />
                    <YAxis
                      tick={{ fill: c.label, fontSize: 10 }}
                      tickLine={false}
                      axisLine={false}
                      width={32}
                    />
                    <Tooltip
                      cursor={{ fill: c.surface, opacity: 0.4 }}
                      contentStyle={{
                        background: c.surface,
                        border: `1px solid ${c.border}`,
                        borderRadius: 6,
                        fontSize: 12,
                        color: c.label,
                      }}
                      formatter={(v) => [`${v}${m.unit}`, m.label]}
                    />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                      {m.data.map((d) => (
                        <Cell
                          key={d.phase}
                          fill={d.phase === "After" ? c.accent : c.mutedFaint}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </li>
          );
        })}
      </ul>
    </Figure>
  );
}
