import { Circle, CircleContent } from "./onboarding.styles";
import { IOboardingDot } from "./types";

export const OnboardingDot = ({
  isSelected,
}: IOboardingDot): ReturnType<React.FC<IOboardingDot>> => {
  if (isSelected) {
    return (
      <Circle>
        <CircleContent />
      </Circle>
    );
  }

  return <CircleContent />;
};
