import { theme } from "./theme";
import { TThemeFonts } from "./types";

export function fontMapping(font: TThemeFonts) {
  const { fonts } = theme;

  const fontsMap: Record<TThemeFonts, string> = {
    regular: fonts.regular,
    medium: fonts.medium,
    bold: fonts.bold,
  };

  return fontsMap[font];
}
