import { StatusBar } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Header = styled.View`
  flex-direction: row;

  align-items: center;

  width: 100%;

  padding: ${16 + Math.round(Number(StatusBar.currentHeight))}px 24px 0px 24px;

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

export const Content = styled(ScrollView).attrs({
  contentContainerStyle: { padding: 24, flex: 1 },
  showsVerticalScrollIndicator: false,
})``;
