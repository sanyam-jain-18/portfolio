"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Figure } from "@/components/diagrams/figure";
import { useChartColors } from "@/components/diagrams/chart-colors";

const data = [
  { type: "Exact match", baseline: 0.94, hybrid: 0.96 },
  { type: "Attribute query", baseline: 0.82, hybrid: 0.91 },
  { type: "Multi-attribute", baseline: 0.61, hybrid: 0.84 },
  { type: "Vague intent", baseline: 0.18, hybrid: 0.76 },
];

export function RecallChart() {
  const c = useChartColors();

  return (
    <Figure caption="Recall@10 across query types — sparse-only baseline vs. hybrid retrieval with HyDE. The win is in the queries users actually struggle with.">
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 8, right: 16, left: 0, bottom: 0 }}
            barCategoryGap="22%"
          >
            <CartesianGrid
              vertical={false}
              stroke={c.grid}
              strokeDasharray="2 4"
            />
            <XAxis
              dataKey="type"
              tick={{ fill: c.label, fontSize: 11 }}
              tickLine={false}
              axisLine={{ stroke: c.grid }}
            />
            <YAxis
              tick={{ fill: c.label, fontSize: 11 }}
              tickLine={false}
              axisLine={false}
              width={40}
              domain={[0, 1]}
              tickFormatter={(v) => `${Math.round(v * 100)}%`}
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
              formatter={(v, name) => [
                `${Math.round(Number(v) * 100)}%`,
                name === "baseline" ? "Sparse baseline" : "Hybrid + HyDE",
              ]}
              labelStyle={{ color: c.label }}
            />
            <Legend
              iconType="square"
              wrapperStyle={{
                fontSize: 11,
                color: c.label,
                paddingTop: 12,
              }}
              formatter={(v) =>
                v === "baseline" ? "Sparse baseline" : "Hybrid + HyDE"
              }
            />
            <Bar dataKey="baseline" fill={c.mutedFaint} radius={[3, 3, 0, 0]} />
            <Bar dataKey="hybrid" fill={c.accent} radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Figure>
  );
}
