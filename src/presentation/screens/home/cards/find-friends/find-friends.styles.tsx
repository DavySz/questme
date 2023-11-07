import { Text } from "@presentation/components";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  width: 100%;

  border-radius: 20px;

  padding: 32px 16px;

  background-color: ${({ theme }) => theme.colors.secondary};

  align-items: center;

  gap: 16px;

  margin-bottom: 24px;
`;

export const Title = styled(Text.Root)`
  opacity: 0.8;
`;

export const GuyIconWrapper = styled.View`
  position: absolute;
  left: 16px;
  top: 16px;
`;

export const GirlIconWrapper = styled.View`
  position: absolute;
  bottom: 42px;
  right: 16px;
`;
