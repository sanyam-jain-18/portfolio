"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export type ChartColors = {
  accent: string;
  accentSoft: string;
  muted: string;
  mutedFaint: string;
  grid: string;
  label: string;
  bg: string;
  surface: string;
  border: string;
  good: string;
};

const DARK: ChartColors = {
  accent: "#e8b04a",
  accentSoft: "#f5d693",
  muted: "#71717a",
  mutedFaint: "#3f3f46",
  grid: "#27272a",
  label: "#a1a1aa",
  bg: "#08080a",
  surface: "#111114",
  border: "#27272a",
  good: "#4ade80",
};

const LIGHT: ChartColors = {
  accent: "#b8801f",
  accentSoft: "#d4a04a",
  muted: "#52525b",
  mutedFaint: "#d4d4d8",
  grid: "#e4e4e7",
  label: "#52525b",
  bg: "#fafaf9",
  surface: "#ffffff",
  border: "#e4e4e7",
  good: "#16a34a",
};

export function useChartColors(): ChartColors {
  const { resolvedTheme } = useTheme();
  const [colors, setColors] = useState<ChartColors>(DARK);

  useEffect(() => {
    setColors(resolvedTheme === "light" ? LIGHT : DARK);
  }, [resolvedTheme]);

  return colors;
}
