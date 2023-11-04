import { TThemeColors } from "@presentation/styles";
import { ElementType, ReactNode } from "react";
import { TextInputProps } from "react-native";

export type TIconSide = "left" | "right";

export interface IInputIcon {
  icon: ElementType;
  color?: TThemeColors;
}

export interface IInputRoot {
  children: ReactNode;
}

export interface IChildProps {
  handleBlur: () => void;
  handleFocus: () => void;
}

export interface IInputWrapperStyles {
  isFocused: boolean;
}

export interface IInputLabel {
  children: ReactNode;
}

export interface IInputText extends TextInputProps, Partial<IChildProps> {}
