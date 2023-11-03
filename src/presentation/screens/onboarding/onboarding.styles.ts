import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Content = styled.View`
  flex: 1;
  padding: 24px;

  align-items: center;
  justify-content: flex-end;
`;

export const Footer = styled.View`
  width: 100%;

  gap: 24px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.neutral.white};

  padding: 16px;

  border-radius: 20px;

  margin-top: 24px;
`;

export const AuthWrapper = styled.View`
  gap: 16px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Circle = styled.View`
  height: 16px;
  width: 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 2px solid ${({ theme }) => theme.colors.neutral.white};

  border-radius: 8px;

  align-items: center;
  justify-content: center;
`;

export const CircleContent = styled.View`
  height: 8px;
  width: 8px;

  border-radius: 4px;

  background-color: ${({ theme }) => theme.colors.neutral.white};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;

  gap: 12px;
`;

export const ScrollArea = styled.View`
  flex: 1;

  width: ${Dimensions.get("window").width}px;

  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.View`
  align-self: center;
`;
