import { ElementType } from "react";

export type TButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "google"
  | "facebook";

export type TIconSide = "left" | "right";

export interface IButtonRoot {
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
}

export interface IButtonIconStyles {
  side: TIconSide;
}
