import styled from "styled-components/native";
import { IRootStyle, TButtonVariant } from "./types";
import { TTheme } from "@presentation/styles";

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

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<IRootStyle>`
  background-color: ${({ theme, variant }) =>
    getButtonBackground(variant, theme as TTheme)};
`;
