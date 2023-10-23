import { Text } from "../text";
import { getButtonTextColor } from "./styles";
import { IButtonText } from "./types";

export const ButtonText = ({
  variant,
  children,
}: IButtonText): ReturnType<React.FC<IButtonText>> => {
  return (
    <Text.Root variant="body-normal-medium" color={getButtonTextColor(variant)}>
      {children}
    </Text.Root>
  );
};
