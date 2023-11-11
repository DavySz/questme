import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";

import { TThemeColors } from "@presentation/styles";
import { ElementType, ReactNode } from "react";

export interface ICustomNavigationIcon {
  icon: ElementType;
  color?: TThemeColors;
}

export interface ICustomNavigationButtonRoot extends BottomTabBarButtonProps {
  children: ReactNode;
}
