import styled from "styled-components/native";

export const Line = styled.View`
  width: 100%;
  height: 1px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.neutral["grey-4"]};
  margin: 0 16px;
`;
