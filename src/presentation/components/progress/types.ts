import { ReactNode } from "react";

export interface IChildProps {
  objective: number;
  progress: number;
}

export interface IProgressRoot extends IChildProps {
  children: ReactNode;
}

export interface IProgressBar extends Partial<IChildProps> {}

export interface IProgressLabel extends Partial<IChildProps> {}

export interface IProgressStyles {
  progressPercentage: number;
}
