import { ReactNode } from "react";

export interface IPositionWrapperStyles {
  top: number;
  left: number;
  right: number;
  bottom: number;
}

export interface IBubbleRoot extends Partial<IPositionWrapperStyles> {
  children: ReactNode;
}

export interface IBubbleCircle {
  size: number;
}

export interface ICircleStyles extends IBubbleCircle {}
