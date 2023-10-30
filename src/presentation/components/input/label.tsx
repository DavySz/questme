import { Text } from "../text";
import { Wrapper } from "./styles";
import { IInputLabel } from "./types";

export const InputLabel = ({
  children,
}: IInputLabel): ReturnType<React.FC<IInputLabel>> => {
  return (
    <Wrapper>
      <Text.Root variant="body-small-regular" color="neutral-black">
        {children}
      </Text.Root>
    </Wrapper>
  );
};
