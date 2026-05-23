"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Figure } from "@/components/diagrams/figure";
import { useChartColors } from "@/components/diagrams/chart-colors";

const data = [
  { timeout: 500, revenue: 62, lcpDelta: 40 },
  { timeout: 750, revenue: 78, lcpDelta: 90 },
  { timeout: 1000, revenue: 88, lcpDelta: 160 },
  { timeout: 1250, revenue: 93, lcpDelta: 240 },
  { timeout: 1500, revenue: 96, lcpDelta: 330 },
  { timeout: 2000, revenue: 98, lcpDelta: 520 },
  { timeout: 2500, revenue: 99, lcpDelta: 720 },
  { timeout: 3000, revenue: 100, lcpDelta: 950 },
];

export function TimeoutTradeoff() {
  const c = useChartColors();

  return (
    <Figure caption="Auction timeout vs. captured revenue vs. LCP cost. The sweet spot is where the revenue curve flattens and the LCP curve hasn’t taken off — we landed at 1500 ms.">
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 12, right: 40, left: 12, bottom: 8 }}
          >
            <CartesianGrid
              vertical={false}
              stroke={c.grid}
              strokeDasharray="2 4"
            />
            <XAxis
              dataKey="timeout"
              tick={{ fill: c.label, fontSize: 11 }}
              tickLine={false}
              axisLine={{ stroke: c.grid }}
              tickFormatter={(v) => `${v}ms`}
              label={{
                value: "Auction timeout",
                position: "insideBottom",
                offset: -2,
                fill: c.label,
                fontSize: 11,
              }}
            />
            <YAxis
              yAxisId="left"
              tick={{ fill: c.accent, fontSize: 11 }}
              tickLine={false}
              axisLine={false}
              width={44}
              domain={[50, 100]}
              tickFormatter={(v) => `${v}%`}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tick={{ fill: c.muted, fontSize: 11 }}
              tickLine={false}
              axisLine={false}
              width={56}
              tickFormatter={(v) => `+${v}ms`}
            />
            <Tooltip
              cursor={{ stroke: c.accent, strokeDasharray: "3 3" }}
              contentStyle={{
                background: c.surface,
                border: `1px solid ${c.border}`,
                borderRadius: 6,
                fontSize: 12,
                color: c.label,
              }}
              labelFormatter={(l) => `${l}ms timeout`}
              formatter={(v, name) =>
                name === "revenue"
                  ? [`${v}%`, "Revenue captured"]
                  : [`+${v}ms`, "LCP cost"]
              }
            />
            <Legend
              iconType="line"
              wrapperStyle={{ fontSize: 11, color: c.label, paddingTop: 8 }}
              formatter={(v) =>
                v === "revenue" ? "Revenue captured" : "LCP cost"
              }
            />
            <ReferenceLine
              yAxisId="left"
              x={1500}
              stroke={c.accent}
              strokeDasharray="4 4"
              label={{
                value: "sweet spot · 1500ms",
                position: "top",
                fill: c.accent,
                fontSize: 10,
              }}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="revenue"
              stroke={c.accent}
              strokeWidth={2.5}
              dot={{ fill: c.accent, r: 3, strokeWidth: 0 }}
              activeDot={{ r: 5, fill: c.accent, stroke: c.bg, strokeWidth: 2 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="lcpDelta"
              stroke={c.muted}
              strokeWidth={2}
              strokeDasharray="6 4"
              dot={{ fill: c.muted, r: 3, strokeWidth: 0 }}
              activeDot={{ r: 5, fill: c.muted, stroke: c.bg, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Figure>
  );
}
