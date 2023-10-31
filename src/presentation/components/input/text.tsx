import { CustomInput } from "./styles";
import { IInputText } from "./types";

export const InputText = ({
  handleBlur,
  handleFocus,
  ...rest
}: IInputText): ReturnType<React.FC<IInputText>> => {
  return (
    <CustomInput
      {...rest}
      onBlur={handleBlur}
      onFocus={handleFocus}
      testID="custom-input"
    />
  );
};
