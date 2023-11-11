import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 8px;

  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.colors.neutral["grey-5"]};

  background-color: ${({ theme }) => theme.colors.neutral.white};
`;

export const Content = styled.View`
  gap: 6px;
`;

export const Group = styled.View`
  gap: 6px;
`;
