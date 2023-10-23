import styled, { css } from "styled-components/native";
import { IRootStyle, TButtonVariant } from "./types";
import { TTheme, TThemeColors } from "@presentation/styles";

export const getButtonBackground = (
  variant: TButtonVariant,
  theme: TTheme
): string => {
  const colors: Record<TButtonVariant, string> = {
    primary: theme.colors.primary,
    secondary: theme.colors.neutral["gey-5"],
    tertiary: theme.colors.transparent,
  };

  return colors[variant];
};

export const getButtonTextColor = (variant: TButtonVariant): TThemeColors => {
  const color: Record<TButtonVariant, TThemeColors> = {
    primary: "neutral-white",
    secondary: "primary",
    tertiary: "primary",
  };

  return color[variant] as TThemeColors;
};

const isFull = (isFull: boolean) => {
  if (isFull) {
    return css`
      width: 100%;
    `;
  }
};

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<IRootStyle>`
  ${({ full }) => isFull(full)};

  background-color: ${({ theme, variant }) =>
    getButtonBackground(variant, theme as TTheme)};

  border-radius: 20px;
  padding: 16px;

  align-items: center;
  justify-content: center;
`;
