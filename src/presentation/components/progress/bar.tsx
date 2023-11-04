import { Bar, Progress, Wrapper } from "./styles";
import { IProgressBar } from "./types";

export const ProgressBar = ({
  progress,
  objective,
}: IProgressBar): ReturnType<React.FC<IProgressBar>> => {
  const calculateProgressPercentage = () => {
    return (progress / objective) * 100;
  };

  return (
    <Wrapper>
      <Progress progressPercentage={calculateProgressPercentage()} />
      <Bar />
    </Wrapper>
  );
};
