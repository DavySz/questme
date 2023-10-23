import React from "react";
import { Button } from "./styles";
import { IRoot } from "./types";

export const ButtonRoot = ({
  variant = "primary",
}: IRoot): ReturnType<React.FC<IRoot>> => {
  return <Button variant={variant}></Button>;
};
