import { ScrollView } from "react-native";
import styled from "styled-components/native";

export const Content = styled(ScrollView).attrs({
  contentContainerStyle: {
    flex: 1,
    gap: 24,
    padding: 24,
    alignItems: "center",
  },
  showsVerticalScrollIndicator: false,
})``;

export const InputWrapper = styled.View``;

export const Main = styled.View`
  gap: 16px;
  padding: 0 24px;
`;
