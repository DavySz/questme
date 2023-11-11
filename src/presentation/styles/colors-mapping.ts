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
    "support-accent-4": colors.support["accent-4"],

    "neutral-black": colors.neutral.black,
    "neutral-white": colors.neutral.white,

    "neutral-grey-1": colors.neutral["grey-1"],
    "neutral-grey-2": colors.neutral["grey-2"],
    "neutral-grey-3": colors.neutral["grey-3"],
    "neutral-grey-4": colors.neutral["grey-4"],
    "neutral-grey-5": colors.neutral["grey-5"],

    "company-facebook": colors.company.facebook,
  };

  return colorsMap[color];
}
