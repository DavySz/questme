import { ScrollView } from "react-native";
import styled from "styled-components/native";

export const Content = styled(ScrollView).attrs({
  contentContainerStyle: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  showsVerticalScrollIndicator: false,
})``;

export const Main = styled.View`
  flex: 1;
  padding: 0 24px;

  gap: 24px;
`;

export const InputWrapper = styled.View``;
