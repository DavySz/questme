import React from "react";
import { ITextRoot } from "./types";
import { CustomText } from "./styles";

export const TextRoot = ({
  color,
  testID,
  variant,
  children,
}: ITextRoot): ReturnType<React.FC> => {
  return (
    <CustomText testID={testID} variant={variant} color={color}>
      {children}
    </CustomText>
  );
};
