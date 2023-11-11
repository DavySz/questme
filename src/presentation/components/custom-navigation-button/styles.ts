import styled from "styled-components/native";

export const Wrapper = styled.TouchableOpacity`
  border-radius: 24px;
  height: 48px;
  width: 48px;

  justify-content: center;
  align-items: center;

  margin-top: -20px;
`;

export const Container = styled.View`
  border-radius: 32px;
  height: 64px;
  width: 64px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.transparent};

  margin-top: -20px;
`;
