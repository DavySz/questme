import styled from "styled-components/native";
import { IProgressStyles } from "./types";

export const Container = styled.View`
  width: 100%;
  gap: 8px;

  align-items: flex-end;
`;

export const Wrapper = styled.View`
  width: 100%;
`;

export const Bar = styled.View`
  width: 100%;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.primary};

  opacity: 0.1;
  height: 8px;

  position: absolute;
  left: 0px;
  top: 0px;
`;

export const Progress = styled.View<IProgressStyles>`
  width: ${({ progressPercentage }) => progressPercentage}%;
  background-color: ${({ theme }) => theme.colors.primary};

  border-radius: 8px;
  height: 8px;

  position: absolute;
  left: 0px;
  top: 0px;
`;
