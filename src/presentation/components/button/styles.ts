import styled, { css } from "styled-components/native";
import {
  IButtonIconStyles,
  IRootStyle,
  TButtonVariant,
  TIconSide,
} from "./types";
import { TTheme, TThemeColors } from "@presentation/styles";

export const getButtonBackground = (
  variant: TButtonVariant,
  theme: TTheme
): string => {
  const colors: Record<TButtonVariant, string> = {
    primary: theme.colors.primary,
    secondary: theme.colors.neutral["grey-5"],
    tertiary: theme.colors.transparent,
    facebook: theme.colors.company.facebook,
    google: theme.colors.neutral.white,
    location: theme.colors.neutral.white,
  };

  return colors[variant];
};

export const getButtonTextColor = (variant: TButtonVariant): TThemeColors => {
  const color: Record<TButtonVariant, TThemeColors> = {
    primary: "neutral-white",
    secondary: "primary",
    tertiary: "primary",
    facebook: "neutral-white",
    google: "neutral-black",
    location: "primary",
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

const getIconSide = (side: TIconSide) => {
  if (side === "left") {
    return css`
      margin-right: 16px;
    `;
  }

  if (side === "right") {
    return css`
      margin-left: 16px;
    `;
  }

  return null;
};

const getBorder = (variant: TButtonVariant, theme: TTheme) => {
  if (variant === "google") {
    return css`
      border: 1px solid ${theme.colors.neutral["grey-4"]};
    `;
  }
};

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<IRootStyle>`
  ${({ full }) => isFull(full)};
  ${({ variant, theme }) => getBorder(variant, theme as TTheme)};

  background-color: ${({ theme, variant }) =>
    getButtonBackground(variant, theme as TTheme)};

  border-radius: 20px;
  padding: 16px;

  flex-direction: row;

  align-items: center;
  justify-content: center;
`;

export const IconWrapper = styled.View<IButtonIconStyles>`
  ${({ side }) => getIconSide(side)}
`;
