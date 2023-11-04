import { colorMapping } from "@presentation/styles";
import { IconWrapper } from "./styles";
import { IButtonIcon } from "./types";

export const ButtonIcon = ({
  icon: Icon,
  color,
  side,
}: IButtonIcon): ReturnType<React.FC> => {
  const renderIcon = () => {
    if (color) {
      return <Icon color={colorMapping(color)} testID="icon-with-color" />;
    }
    return <Icon testID="icon-without-color" />;
  };

  return (
    <IconWrapper side={side} testID="icon-wrapper">
      {renderIcon()}
    </IconWrapper>
  );
};
