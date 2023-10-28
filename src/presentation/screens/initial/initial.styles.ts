import styled from "styled-components/native";
import Constants from "expo-constants";

export const Content = styled.View`
  flex: 1;
  padding: 16px;
  margin-top: ${Constants.statusBarHeight}px;

  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.View`
  gap: 16px;
`;

export const Main = styled.View``;

export const Footer = styled.View`
  width: 100%;

  gap: 24px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.neutral.white};

  padding: 16px;

  border-radius: 20px;

  margin-top: 24px;
`;

export const TextWrapper = styled.View`
  gap: 8px;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const ButtonWrapper = styled.View`
  gap: 16px;
  align-items: center;
  justify-content: center;

  width: 100%;
`;
