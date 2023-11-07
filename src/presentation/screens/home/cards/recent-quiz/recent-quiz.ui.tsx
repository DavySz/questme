import { useTheme } from "styled-components/native";
import PieChart from "react-native-pie-chart";

import {
  Row,
  Quiz,
  Title,
  Wrapper,
  Percentage,
  ChartWrapper,
} from "./recent-quiz.styles";
import { IRecentQuizCard } from "./types";
import { Text } from "@presentation/components";

import HeadsetIcon from "@presentation/assets/icons/headset-icon.svg";

export const RecentQuizCardUI = ({
  progress,
  totalQuestions,
}: IRecentQuizCard): ReturnType<React.FC<IRecentQuizCard>> => {
  const { colors } = useTheme();

  const sliceColors = [colors.chart.primary, colors.chart.secondary];
  const series = [progress, totalQuestions - progress];

  const calculateProgressPercentage = () => {
    return (progress / totalQuestions) * 100;
  };

  return (
    <Wrapper>
      <Quiz>
        <Title variant="text-small" color="support-accent-4">
          RECENT QUIZ
        </Title>
        <Row>
          <HeadsetIcon />
          <Text.Root variant="body-large-medium" color="support-accent-4">
            A Basic Music Quiz
          </Text.Root>
        </Row>
      </Quiz>
      <ChartWrapper>
        <Percentage variant="body-small-medium" color="neutral-white">
          {calculateProgressPercentage()}%
        </Percentage>
        <PieChart
          sliceColor={sliceColors}
          widthAndHeight={48}
          series={series}
        />
      </ChartWrapper>
    </Wrapper>
  );
};
