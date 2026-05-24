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
  { service: "orders", publishes: 2, subscribes: 4 },
  { service: "tickets", publishes: 2, subscribes: 2 },
  { service: "payments", publishes: 1, subscribes: 2 },
  { service: "expiration", publishes: 1, subscribes: 1 },
  { service: "auth", publishes: 0, subscribes: 0 },
];

export function EventsPerService() {
  const c = useChartColors();

  return (
    <Figure caption="Event surface per service, counted from the codebase. Orders is the coordinator — it talks to the most peers, which is why optimistic concurrency on its model matters. Auth stays stateless and off the bus entirely.">
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 8, right: 24, left: 0, bottom: 8 }}
            barCategoryGap="22%"
          >
            <CartesianGrid
              horizontal={false}
              stroke={c.grid}
              strokeDasharray="2 4"
            />
            <XAxis
              type="number"
              tick={{ fill: c.label, fontSize: 11 }}
              tickLine={false}
              axisLine={{ stroke: c.grid }}
              allowDecimals={false}
            />
            <YAxis
              dataKey="service"
              type="category"
              tick={{
                fill: c.label,
                fontSize: 12,
                fontFamily: "ui-monospace, monospace",
              }}
              tickLine={false}
              axisLine={false}
              width={88}
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
                String(v),
                name === "publishes" ? "Publishes" : "Subscribes to",
              ]}
              labelStyle={{ color: c.label }}
            />
            <Legend
              iconType="square"
              wrapperStyle={{
                fontSize: 11,
                color: c.label,
                paddingTop: 8,
              }}
              formatter={(v) =>
                v === "publishes" ? "Publishes" : "Subscribes to"
              }
            />
            <Bar dataKey="publishes" stackId="a" fill={c.accent} radius={[0, 0, 0, 0]} />
            <Bar dataKey="subscribes" stackId="a" fill={c.mutedFaint} radius={[0, 3, 3, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Figure>
  );
}
