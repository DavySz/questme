import { Text } from "@presentation/components";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  border-radius: 20px;

  padding: 16px 24px;

  background-color: ${({ theme }) => theme.colors.support["accent-1"]};

  margin-bottom: 24px;
`;

export const Quiz = styled.View`
  gap: 8px;
`;

export const Title = styled(Text.Root)`
  opacity: 0.5;
`;

export const Row = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const ChartWrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Percentage = styled(Text.Root)`
  position: absolute;
  z-index: 1;
`;
