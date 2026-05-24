"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { useChartColors } from "@/components/diagrams/chart-colors";

const data = [
  { type: "attribute", baseline: 0.82, hybrid: 0.91 },
  { type: "multi-attr", baseline: 0.61, hybrid: 0.84 },
  { type: "vague", baseline: 0.18, hybrid: 0.76 },
];

export function RagRecallCard() {
  const c = useChartColors();
  return (
    <div className="w-full h-32">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 4, right: 4, left: 0, bottom: 0 }}
          barCategoryGap="22%"
        >
          <CartesianGrid
            vertical={false}
            stroke={c.grid}
            strokeDasharray="2 4"
          />
          <XAxis
            dataKey="type"
            tick={{ fill: c.label, fontSize: 9 }}
            tickLine={false}
            axisLine={{ stroke: c.grid }}
          />
          <YAxis hide domain={[0, 1]} />
          <Bar dataKey="baseline" fill={c.mutedFaint} radius={[2, 2, 0, 0]} />
          <Bar dataKey="hybrid" fill={c.accent} radius={[2, 2, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
