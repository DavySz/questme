import { Button, Text } from "@presentation/components";
import {
  Title,
  Wrapper,
  GuyIconWrapper,
  GirlIconWrapper,
} from "./find-friends.styles";

import AccuracyIcon from "@presentation/assets/icons/accuracy-icon.svg";
import GuyIcon from "@presentation/assets/illustrations/find-friends-guy-illustration.svg";
import GirlIcon from "@presentation/assets/illustrations/find-friends-girl-illustration.svg";

export const FindFriendsCardUI = (): ReturnType<React.FC> => {
  return (
    <Wrapper>
      <GuyIconWrapper>
        <GuyIcon />
      </GuyIconWrapper>
      <GirlIconWrapper>
        <GirlIcon />
      </GirlIconWrapper>

      <Title variant="text-small" color="neutral-white">
        FEATURED
      </Title>
      <Text.Root
        align="center"
        color="neutral-white"
        variant="body-large-medium"
      >
        Take part in challenges{`\n`}
        with friends or other{`\n`}
        players
      </Text.Root>
      <Button.Root variant="location" full={false}>
        <Button.Icon icon={AccuracyIcon} side="left" />
        <Button.Text>Find Friends</Button.Text>
      </Button.Root>
    </Wrapper>
  );
};
