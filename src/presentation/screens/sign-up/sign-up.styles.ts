import { ScrollView } from "react-native";
import styled from "styled-components/native";

export const Content = styled(ScrollView).attrs({
  contentContainerStyle: { padding: 16, alignItems: "center" },
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const KeyboardSafeArea = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Main = styled.View`
  gap: 16px;

  width: 100%;

  margin-bottom: 24px;
`;

export const Footer = styled.View`
  align-items: center;
  gap: 24px;
`;
