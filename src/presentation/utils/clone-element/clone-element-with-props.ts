import React from "react";
import { ICloneElement } from "./types";

export function cloneElementWithProps<T>({
  children,
  props,
}: ICloneElement<T>) {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, props);
    }

    return child;
  });

  return childrenWithProps;
}
