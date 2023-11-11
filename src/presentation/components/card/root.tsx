import { Wrapper } from "./styles";
import { ICardRoot } from "./types";

export const CardRoot = ({
  children,
}: ICardRoot): ReturnType<React.FC<ICardRoot>> => {
  return <Wrapper>{children}</Wrapper>;
};
