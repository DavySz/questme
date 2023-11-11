import { ElementType } from "react";

export interface IRoute {
  name: string;
  component: () => React.ReactNode;
}

export interface IIconProps {
  focused: boolean;
  color: string;
  size: number;
}

export interface IRenderTabIcon {
  iconProps: IIconProps;
  focusedIcon: ElementType;
  inactiveIcon: ElementType;
}
