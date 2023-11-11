import { StatusBar } from "react-native";
import styled from "styled-components/native";

export const Header = styled.View`
  flex-direction: row;

  align-items: center;

  width: 100%;

  padding: ${16 + Math.round(Number(StatusBar.currentHeight))}px 24px 24px 24px;

  background-color: ${({ theme }) => theme.colors.transparent};
`;

export const AvatarWrapper = styled.View`
  width: 56px;
  height: 56px;

  border-radius: 28px;

  align-items: center;
  justify-content: center;

  background-color: red;
`;

export const Avatar = styled.Image``;

export const Row = styled.View`
  flex-direction: row;
  width: 100%;

  align-items: center;
  justify-content: space-between;
`;

export const GreetingRow = styled.View`
  flex-direction: row;
  width: 100%;

  align-items: center;

  gap: 8px;
`;

export const GreetingWrapper = styled.View`
  gap: 4px;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flexGrow: 1,
  },
})``;

export const Quizzes = styled.View`
  flex: 1;

  padding: 24px 24px 0 24px;

  border-top-left-radius: 32px;
  border-top-right-radius: 32px;

  background-color: ${({ theme }) => theme.colors.neutral.white};
`;

export const Main = styled.View`
  padding: 0 24px;
`;

export const CardWrapper = styled.View`
  margin-top: 16px;
`;
