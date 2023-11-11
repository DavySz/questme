import { Group } from "./styles";
import { ICardGroup } from "./types";

export const CardGroup = ({
  children,
}: ICardGroup): ReturnType<React.FC<ICardGroup>> => {
  return <Group>{children}</Group>;
};
