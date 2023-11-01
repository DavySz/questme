import styled from "styled-components/native";
import { ScrollView } from "react-native";

export const Content = styled(ScrollView).attrs({
  contentContainerStyle: { padding: 16 },
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const ButtonWrapper = styled.View`
  gap: 16px;
  align-items: center;
  justify-content: center;

  width: 100%;

  margin-bottom: 24px;
`;

export const Row = styled.View`
  flex-direction: row;
  width: 100%;

  align-items: center;
  justify-content: center;

  margin-bottom: 24px;
`;

export const Form = styled.View`
  gap: 16px;
  margin-bottom: 24px;
`;

export const InputWrapper = styled.View``;

export const KeyboardSafeArea = styled.KeyboardAvoidingView`
  flex: 1;
`;
