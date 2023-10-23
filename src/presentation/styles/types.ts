import { theme } from "./theme";

export type TTheme = typeof theme;

export type TThemeFonts = "regular" | "medium" | "bold";

export type TThemeColors =
  | "primary"
  | "secondary"
  | "tertiary"
  | "transparent"
  | "support-accent-1"
  | "support-accent-2"
  | "support-accent-3"
  | "neutral-black"
  | "neutral-white"
  | "neutral-gey-1"
  | "neutral-gey-2"
  | "neutral-gey-3"
  | "neutral-gey-4"
  | "neutral-gey-5";
