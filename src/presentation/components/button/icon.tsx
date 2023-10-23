import { IconWrapper } from "./styles";
import { IButtonIcon } from "./types";

export const ButtonIcon = ({
  icon: Icon,
  color,
  side,
}: IButtonIcon): ReturnType<React.FC> => {
  const renderIcon = () => {
    if (color) {
      return <Icon color={color} />;
    }
    return <Icon />;
  };

  return <IconWrapper side={side}>{renderIcon()}</IconWrapper>;
};
