import React from "react";
import { ITextRoot } from "./types";
import { CustomText } from "./styles";

export const TextRoot = ({
  align,
  color,
  testID,
  variant,
  children,
  ...rest
}: ITextRoot): ReturnType<React.FC> => {
  return (
    <CustomText
      color={color}
      align={align}
      testID={testID}
      variant={variant}
      {...rest}
    >
      {children}
    </CustomText>
  );
};
