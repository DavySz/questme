import React from "react";
import { ScreenTemplate, Text } from "@presentation/components";
import {
  GreetingWrapper,
  AvatarWrapper,
  GreetingRow,
  Header,
  Row,
  Content,
} from "./home.styles";

import SunIcon from "@presentation/assets/icons/sun-icon.svg";
import AvatarIcon from "@presentation/assets/icons/avatar-icon.svg";
import { RecentQuizCardUI } from "./cards/recent-quiz/recent-quiz.ui";
import { FindFriendsCardUI } from "./cards/find-friends/find-friends.ui";

export const HomeUI = (): ReturnType<React.FC> => {
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
        <RecentQuizCardUI totalQuestions={100} progress={75} />
        <FindFriendsCardUI />
      </Content>
    </ScreenTemplate.Root>
  );
};
