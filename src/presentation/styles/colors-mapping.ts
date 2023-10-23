import { theme } from "./theme";
import { TThemeColors } from "./types";

export function colorMapping(color: TThemeColors) {
  const { colors } = theme;

  const colorsMap: Record<TThemeColors, string> = {
    primary: colors.primary,
    secondary: colors.secondary,
    tertiary: colors.tertiary,

    transparent: colors.transparent,

    "support-accent-1": colors.support["accent-1"],
    "support-accent-2": colors.support["accent-2"],
    "support-accent-3": colors.support["accent-3"],

    "neutral-black": colors.neutral.black,
    "neutral-white": colors.neutral.white,

    "neutral-gey-1": colors.neutral["gey-1"],
    "neutral-gey-2": colors.neutral["gey-2"],
    "neutral-gey-3": colors.neutral["gey-3"],
    "neutral-gey-4": colors.neutral["gey-4"],
    "neutral-gey-5": colors.neutral["gey-5"],
  };

  return colorsMap[color];
}
