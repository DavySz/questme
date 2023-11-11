import { StatusBar } from "react-native";
import styled from "styled-components/native";
import { IScreenTemplateRootStyles, TScreenTemplateVariant } from "./types";
import { TTheme, TThemeColors } from "@presentation/styles";

export const getIconColor = (variant: TScreenTemplateVariant) => {
  const color: Record<TScreenTemplateVariant, TThemeColors> = {
    primary: "neutral-white",
    secondary: "neutral-black",
    tertiary: "neutral-white",
  };

  return color[variant];
};

export const getBackgroundColor = (
  theme: TTheme,
  variant: TScreenTemplateVariant
) => {
  const color: Record<TScreenTemplateVariant, string> = {
    primary: theme.colors.primary,
    secondary: theme.colors.neutral["grey-5"],
    tertiary: theme.colors.primary,
  };

  return color[variant];
};

export const getTextColor = (variant: TScreenTemplateVariant) => {
  const color: Record<TScreenTemplateVariant, TThemeColors> = {
    primary: "neutral-white",
    secondary: "neutral-black",
    tertiary: "neutral-white",
  };

  return color[variant];
};

export const HeaderContainer = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: center;

  width: 100%;

  padding: ${16 + Math.round(Number(StatusBar.currentHeight))}px 16px 16px 16px;

  background-color: ${({ theme }) => theme.colors.transparent};
`;

export const Wrapper = styled.View`
  position: absolute;

  top: ${8 + Math.round(Number(StatusBar.currentHeight))}px;
  left: 16px;
`;

export const Container = styled.View<IScreenTemplateRootStyles>`
  flex: 1;
  background-color: ${({ theme, variant }) =>
    getBackgroundColor(theme as TTheme, variant)};
`;

export const BubbleWrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;
