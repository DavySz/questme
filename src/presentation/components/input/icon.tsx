import { IInputIcon } from "./types";

export const InputIcon = ({
  icon: Icon,
}: IInputIcon): ReturnType<React.FC<IInputIcon>> => {
  return <Icon />;
};
