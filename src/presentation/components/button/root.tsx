import React from "react";
import { Button } from "./styles";
import { IButtonRoot, IChildProps } from "./types";
import { cloneElementWithProps } from "@presentation/utils/clone-element";

export const ButtonRoot = ({
  variant = "primary",
  full = true,
  children,
  ...rest
}: IButtonRoot): ReturnType<React.FC<IButtonRoot>> => {
  const childrenWithProps = cloneElementWithProps<IChildProps>({
    props: { variant },
    children,
  });

  return (
    <Button {...rest} variant={variant} full={full}>
      {childrenWithProps}
    </Button>
  );
};
