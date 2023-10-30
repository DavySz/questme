import { InputWrapper } from "./styles";
import { IChildProps, IInputRoot } from "./types";
import { useState } from "react";
import { cloneElementWithProps } from "@presentation/utils/clone-element";

export const InputRoot = ({
  children,
}: IInputRoot): ReturnType<React.FC<IInputRoot>> => {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  const childrenWithProps = cloneElementWithProps<IChildProps>({
    children,
    props: {
      handleBlur,
      handleFocus,
    },
  });

  return <InputWrapper isFocused={isFocused}>{childrenWithProps}</InputWrapper>;
};
