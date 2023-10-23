import React from "react";
import { Button } from "./styles";
import { IButtonRoot, IChildProps } from "./types";
import { cloneElementWithProps } from "@presentation/utils/clone-element";

export const ButtonRoot = ({
  variant = "primary",
  full = true,
  children,
}: IButtonRoot): ReturnType<React.FC<IButtonRoot>> => {
  const childrenWithProps = cloneElementWithProps<IChildProps>({
    props: { variant },
    children,
  });

  return (
    <Button variant={variant} full={full}>
      {childrenWithProps}
    </Button>
  );
};
