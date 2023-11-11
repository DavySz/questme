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
  | "support-accent-4"
  | "neutral-black"
  | "neutral-white"
  | "neutral-grey-1"
  | "neutral-grey-2"
  | "neutral-grey-3"
  | "neutral-grey-4"
  | "neutral-grey-5"
  | "company-facebook";
