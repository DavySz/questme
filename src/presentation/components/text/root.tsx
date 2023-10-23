import React from "react";
import { ITextRoot } from "./types";
import { CustomText } from "./styles";

export const TextRoot = ({
  color,
  variant,
  children,
}: ITextRoot): ReturnType<React.FC> => {
  return (
    <CustomText variant={variant} color={color}>
      {children}
    </CustomText>
  );
};
