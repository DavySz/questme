import React from "react";
import { Card, ScreenTemplate, Text } from "@presentation/components";
import {
  GreetingWrapper,
  AvatarWrapper,
  GreetingRow,
  Content,
  Header,
  Row,
  Quizzes,
  Main,
  CardWrapper,
  ListFooter,
} from "./home.styles";

import SunIcon from "@presentation/assets/icons/sun-icon.svg";
import AvatarIcon from "@presentation/assets/icons/avatar-icon.svg";
import StatisticsIcon from "@presentation/assets/icons/statistics-icon.svg";
import ChevronRightIcon from "@presentation/assets/icons/chevron-right-icon.svg";

import { FlatList } from "react-native";
import { FindFriendsCardUI, RecentQuizCardUI } from "./cards";

export const HomeUI = (): ReturnType<React.FC> => {
  const mockData = [
    {
      id: 1,
      title: "Statistics Math Quiz",
      description: "Math • 12 Quizzes",
      image: StatisticsIcon,
    },
    {
      id: 2,
      title: "Statistics Math Quiz",
      description: "Math • 12 Quizzes",
      image: StatisticsIcon,
    },
  ];

  const renderQuizzes = () => {
    return (
      <FlatList
        data={mockData}
        scrollEnabled={false}
        ListFooterComponent={<ListFooter />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <CardWrapper>
            <Card.Root>
              <Card.Icon icon={item.image} />
              <Card.Group>
                <Text.Root variant="body-normal-medium" color="neutral-black">
                  {item.title}
                </Text.Root>
                <Text.Root
                  variant="body-x-small-regular"
                  color="neutral-grey-2"
                >
                  {item.description}
                </Text.Root>
              </Card.Group>
              <Card.Icon icon={ChevronRightIcon} color="primary" />
            </Card.Root>
          </CardWrapper>
        )}
      />
    );
  };

  return (
    <ScreenTemplate.Root>
      <Header>
        <Row>
          <GreetingWrapper>
            <GreetingRow>
              <SunIcon />
              <Text.Root variant="text-x-small" color="support-accent-1">
                GOOD MORNING
              </Text.Root>
            </GreetingRow>
            <Text.Root variant="heading-3" color="neutral-white">
              Madelyn Dias
            </Text.Root>
          </GreetingWrapper>
          <AvatarWrapper>
            <AvatarIcon />
          </AvatarWrapper>
        </Row>
      </Header>
      <Content>
        <Main>
          <RecentQuizCardUI totalQuestions={100} progress={75} />
          <FindFriendsCardUI />
        </Main>
        <Quizzes>
          <Row>
            <Text.Root variant="body-x-large" color="neutral-black">
              Live Quizzes
            </Text.Root>
            <Text.Root variant="body-small-medium" color="primary">
              See all
            </Text.Root>
          </Row>
          {renderQuizzes()}
        </Quizzes>
      </Content>
    </ScreenTemplate.Root>
  );
};
