import { Text } from "../text";
import { IDividerText } from "./types";

export const DividerText = ({
  children,
}: IDividerText): ReturnType<React.FC<IDividerText>> => {
  return (
    <Text.Root color="neutral-grey-2" variant="body-normal-regular">
      {children}
    </Text.Root>
  );
};
