import styled from "styled-components/native";
import { IInputWrapperStyles } from "./types";
import { TTheme } from "@presentation/styles";

const getBorderColor = (isFocused: boolean, theme: TTheme) => {
  if (isFocused) return theme.colors.primary;
  return theme.colors.neutral["grey-5"];
};

export const CustomInput = styled.TextInput`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
`;

export const InputWrapper = styled.View<IInputWrapperStyles>`
  flex-direction: row;

  width: 100%;
  padding: 16px;
  border-radius: 20px;

  gap: 16px;

  border: 2px solid
    ${({ isFocused, theme }) => getBorderColor(isFocused, theme as TTheme)};

  background-color: ${({ theme }) => theme.colors.neutral.white};
`;

export const Wrapper = styled.View`
  margin-bottom: 8px;
`;
