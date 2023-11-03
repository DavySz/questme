import { StatusBar } from "react-native";
import styled, { css } from "styled-components/native";
import {
  IScreenTemplateBubbleStyles,
  IScreenTemplateRootStyles,
  ScreenTemplateBubblesBackgroundStyles,
  TBubbleType,
  TScreenTemplateVariant,
} from "./types";
import { TTheme, TThemeColors } from "@presentation/styles";

export const getIconColor = (
  theme: TTheme,
  variant: TScreenTemplateVariant
) => {
  const color: Record<TScreenTemplateVariant, string> = {
    primary: theme.colors.neutral.white,
    secondary: theme.colors.neutral.black,
    tertiary: theme.colors.neutral.white,
  };

  return color[variant];
};

export const getBackgroundColor = (
  theme: TTheme,
  variant: TScreenTemplateVariant
) => {
  const color: Record<TScreenTemplateVariant, string> = {
    primary: theme.colors.primary,
    secondary: theme.colors.neutral["gey-5"],
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

export const getBubbleType = (bubbleType: TBubbleType) => {
  if (bubbleType === "fill") {
    return css`
      background-color: ${({ theme }) => theme.colors.support["accent-2"]};
    `;
  }

  return css`
    background-color: ${({ theme }) => theme.colors.transparent};
    border: 1px solid ${({ theme }) => theme.colors.support["accent-2"]};
  `;
};

export const getWrapperPosition = (
  position: Partial<ScreenTemplateBubblesBackgroundStyles>
) => {
  const customPosition = [];

  if (position.bottom) {
    customPosition.push(css`
      bottom: ${position.bottom}px;
    `);
  }

  if (position.left) {
    customPosition.push(css`
      left: ${position.left}px;
    `);
  }

  if (position.top) {
    customPosition.push(css`
      top: ${position.top}px;
    `);
  }

  if (position.right) {
    customPosition.push(css`
      right: ${position.right}px;
    `);
  }

  return customPosition;
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

export const Circle = styled.View<IScreenTemplateBubbleStyles>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  border-radius: ${({ size }) => size / 2}px;

  ${({ type }) => getBubbleType(type)};

  opacity: 0.1;
`;

export const PositionWrapper = styled.View<
  Partial<ScreenTemplateBubblesBackgroundStyles>
>`
  position: absolute;
  ${(props) =>
    getWrapperPosition(
      props as Partial<ScreenTemplateBubblesBackgroundStyles>
    )};
`;
