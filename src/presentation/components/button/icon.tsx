import { IconWrapper } from "./styles";
import { IButtonIcon } from "./types";

export const ButtonIcon = ({
  icon: Icon,
  side,
}: IButtonIcon): ReturnType<React.FC> => {
  return (
    <IconWrapper side={side}>
      <Icon />
    </IconWrapper>
  );
};
