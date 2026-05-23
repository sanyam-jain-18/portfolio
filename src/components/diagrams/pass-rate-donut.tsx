"use client";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { Figure } from "@/components/diagrams/figure";
import { useChartColors } from "@/components/diagrams/chart-colors";

const data = [
  { label: "Before", pass: 32, fail: 68 },
  { label: "After", pass: 87, fail: 13 },
];

export function PassRateDonut() {
  const c = useChartColors();

  return (
    <Figure caption="Share of consumer surfaces passing all three Core Web Vitals thresholds (LCP, CLS, INP), before and after the programme.">
      <div className="grid gap-8 sm:grid-cols-2">
        {data.map((d) => {
          const pieData = [
            { name: "Pass", value: d.pass, color: c.accent },
            { name: "Fail", value: d.fail, color: c.mutedFaint },
          ];
          return (
            <div key={d.label} className="flex flex-col items-center">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-2 mb-3 font-mono">
                {d.label}
              </p>
              <div className="relative w-40 h-40 sm:w-48 sm:h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      innerRadius="65%"
                      outerRadius="100%"
                      startAngle={90}
                      endAngle={-270}
                      stroke="none"
                      paddingAngle={2}
                    >
                      {pieData.map((entry) => (
                        <Cell key={entry.name} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <p className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
                    {d.pass}
                    <span className="text-base text-muted">%</span>
                  </p>
                  <p className="text-[10px] text-muted-2 font-mono uppercase tracking-wider mt-0.5">
                    passing
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Figure>
  );
}
