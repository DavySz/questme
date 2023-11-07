import styled, { css } from "styled-components/native";
import { ICircleStyles, IPositionWrapperStyles } from "./types";

export const getWrapperPosition = (
  position: Partial<IPositionWrapperStyles>
) => {
  const customPosition = [];

  if (position.bottom) {
    customPosition.push(css`
      bottom: ${position.bottom}px;
    `);
  }

  if (position.left) {
    customPosition.push(css`
      left: ${position.left}px;
    `);
  }

  if (position.top) {
    customPosition.push(css`
      top: ${position.top}px;
    `);
  }

  if (position.right) {
    customPosition.push(css`
      right: ${position.right}px;
    `);
  }

  return customPosition;
};

export const CircleFill = styled.View<ICircleStyles>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  border-radius: ${({ size }) => size / 2}px;

  background-color: ${({ theme }) => theme.colors.support["accent-2"]};

  opacity: 0.1;
`;

export const CircleOutline = styled.View<ICircleStyles>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  border-radius: ${({ size }) => size / 2}px;

  background-color: ${({ theme }) => theme.colors.transparent};
  border: 1px solid ${({ theme }) => theme.colors.support["accent-2"]};

  opacity: 0.1;
`;

export const PositionWrapper = styled.View<Partial<IPositionWrapperStyles>>`
  position: absolute;
  ${(props) => getWrapperPosition(props as Partial<IPositionWrapperStyles>)};
`;
