import { Text } from "../text";
import { IProgressLabel } from "./types";

export const ProgressLabel = ({
  progress,
  objective,
}: IProgressLabel): ReturnType<React.FC<IProgressLabel>> => {
  return (
    <Text.Root variant="body-normal-medium" color="primary">
      {progress} of {objective}
    </Text.Root>
  );
};
