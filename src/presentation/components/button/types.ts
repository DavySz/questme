import { TThemeColors } from "@presentation/styles";
import { ElementType } from "react";
import { TouchableOpacityProps } from "react-native";

export type TButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "google"
  | "facebook";

export type TIconSide = "left" | "right" | "none";

export interface IButtonRoot extends TouchableOpacityProps {
  variant?: TButtonVariant;
  children: React.ReactNode;
  full?: boolean;
}

export interface IButtonText {
  variant?: TButtonVariant;
  children: React.ReactNode;
}

export interface IRootStyle {
  variant: TButtonVariant;
  full: boolean;
}

export interface IChildProps {
  variant: TButtonVariant;
}

export interface IButtonIcon {
  icon: ElementType;
  side: TIconSide;
  color?: TThemeColors;
}

export interface IButtonIconStyles {
  side: TIconSide;
}
