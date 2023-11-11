import { TThemeColors } from "@presentation/styles";
import { ElementType, ReactNode } from "react";

export interface ICardRoot {
  children: ReactNode;
}

export interface ICardGroup {
  children: ReactNode;
}

export interface ICardIcon {
  icon: ElementType;
  color?: TThemeColors;
}
