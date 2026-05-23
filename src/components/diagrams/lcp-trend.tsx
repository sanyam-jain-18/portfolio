"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Figure } from "@/components/diagrams/figure";
import { useChartColors } from "@/components/diagrams/chart-colors";

const data = [
  { week: "W1", lcp: 4.2 },
  { week: "W2", lcp: 4.0 },
  { week: "W3", lcp: 3.6 },
  { week: "W4", lcp: 3.4 },
  { week: "W5", lcp: 3.1 },
  { week: "W6", lcp: 2.8 },
  { week: "W7", lcp: 2.6 },
  { week: "W8", lcp: 2.4 },
  { week: "W9", lcp: 2.2 },
  { week: "W10", lcp: 2.0 },
  { week: "W11", lcp: 1.9 },
  { week: "W12", lcp: 1.8 },
];

export function LcpTrend() {
  const c = useChartColors();

  return (
    <Figure caption="Median LCP across landing surfaces over the twelve-week perf programme. Dashed line marks the 2.5s good-threshold.">
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 12, right: 16, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="lcpFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={c.accent} stopOpacity={0.35} />
                <stop offset="100%" stopColor={c.accent} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              vertical={false}
              stroke={c.grid}
              strokeDasharray="2 4"
            />
            <XAxis
              dataKey="week"
              tick={{ fill: c.label, fontSize: 11 }}
              tickLine={false}
              axisLine={{ stroke: c.grid }}
            />
            <YAxis
              tick={{ fill: c.label, fontSize: 11 }}
              tickLine={false}
              axisLine={false}
              width={36}
              domain={[0, 5]}
              tickFormatter={(v) => `${v}s`}
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
              formatter={(v) => [`${Number(v).toFixed(1)}s`, "LCP"]}
              labelStyle={{ color: c.label, fontSize: 11 }}
            />
            <ReferenceLine
              y={2.5}
              stroke={c.good}
              strokeDasharray="4 4"
              label={{
                value: "Good · 2.5s",
                position: "right",
                fill: c.good,
                fontSize: 10,
                offset: 8,
              }}
            />
            <Area
              type="monotone"
              dataKey="lcp"
              stroke={c.accent}
              strokeWidth={2}
              fill="url(#lcpFill)"
              dot={{ fill: c.accent, r: 3, strokeWidth: 0 }}
              activeDot={{ r: 5, fill: c.accent, stroke: c.bg, strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Figure>
  );
}
