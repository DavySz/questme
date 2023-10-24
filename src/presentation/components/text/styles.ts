import styled, { css } from "styled-components/native";
import { ITextRootStyle, TTextAlign, TTextVariant, TTypography } from "./types";
import { TTheme, colorMapping } from "@presentation/styles";

export const getTypography = (variant: TTextVariant, theme: TTheme) => {
  const typography: Record<TTextVariant, TTypography> = {
    "heading-1": {
      size: "32px",
      height: "48px",
      family: theme.fonts.bold,
    },
    "heading-2": {
      size: "28px",
      height: "42px",
      family: theme.fonts.bold,
    },
    "heading-3": {
      size: "24px",
      height: "36px",
      family: theme.fonts.medium,
    },
    "body-x-large": {
      size: "20px",
      height: "28px",
      family: theme.fonts.medium,
    },
    "body-large-medium": {
      size: "18px",
      height: "24px",
      family: theme.fonts.medium,
    },
    "body-large-regular": {
      size: "18px",
      height: "24px",
      family: theme.fonts.regular,
    },
    "body-normal-bold": {
      size: "16px",
      height: "24px",
      family: theme.fonts.bold,
    },
    "body-normal-medium": {
      size: "16px",
      height: "24px",
      family: theme.fonts.medium,
    },
    "body-normal-regular": {
      size: "16px",
      height: "24px",
      family: theme.fonts.regular,
    },
    "body-small-bold": {
      size: "14px",
      height: "20px",
      family: theme.fonts.bold,
    },
    "body-small-medium": {
      size: "14px",
      height: "20px",
      family: theme.fonts.medium,
    },
    "body-small-regular": {
      size: "14px",
      height: "20px",
      family: theme.fonts.regular,
    },
    "body-x-small-medium": {
      size: "12px",
      height: "18px",
      family: theme.fonts.medium,
    },
    "body-x-small-regular": {
      size: "12px",
      height: "18px",
      family: theme.fonts.regular,
    },
    "text-small": {
      size: "14px",
      height: "20px",
      family: theme.fonts.medium,
    },
    "text-x-small": {
      size: "12px",
      height: "18px",
      family: theme.fonts.medium,
    },
  };

  return css`
    font-size: ${typography[variant].size};
    font-family: ${typography[variant].family};
    line-height: ${typography[variant].height};
  `;
};

export const getTextAlign = (align: TTextAlign) => {
  if (align) {
    return css`
      text-align: ${align};
    `;
  }

  return null;
};

export const CustomText = styled.Text<ITextRootStyle>`
  ${({ theme, variant }) => getTypography(variant, theme as TTheme)};
  color: ${({ color }) => colorMapping(color)};

  ${({ align }) => getTextAlign(align)}
`;
