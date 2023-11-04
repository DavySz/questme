import { ScrollView } from "react-native";
import styled from "styled-components/native";

export const Content = styled(ScrollView).attrs({
  contentContainerStyle: { padding: 24, flex: 1 },
  showsVerticalScrollIndicator: false,
})``;

export const Main = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  width: 100%;
  gap: 24px;
`;
