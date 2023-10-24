import { TThemeColors } from "@presentation/styles";

export type TTextVariant =
  | "heading-1"
  | "heading-2"
  | "heading-3"
  | "body-x-large"
  | "body-large-medium"
  | "body-large-regular"
  | "body-normal-bold"
  | "body-normal-medium"
  | "body-normal-regular"
  | "body-small-bold"
  | "body-small-medium"
  | "body-small-regular"
  | "body-x-small-medium"
  | "body-x-small-regular"
  | "text-small"
  | "text-x-small";

export interface ITextRoot {
  testID?: string;
  color: TThemeColors;
  variant: TTextVariant;
  children: React.ReactNode;
}

export interface ITextRootStyle {
  variant: TTextVariant;
  color: TThemeColors;
}

export interface TTypography {
  size: string;
  height: string;
  family: string;
}
