import React from "react";
import { ITextRoot } from "./types";
import { CustomText } from "./styles";

export const TextRoot = ({
  align,
  color,
  testID,
  variant,
  children,
}: ITextRoot): ReturnType<React.FC> => {
  return (
    <CustomText align={align} testID={testID} variant={variant} color={color}>
      {children}
    </CustomText>
  );
};
