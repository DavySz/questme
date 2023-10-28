import { Button, ScreenTemplate, Text } from "@presentation/components";
import InitialIllustration from "@presentation/assets/illustrations/initial-illustration.svg";
import LogoIcon from "@presentation/assets/icons/logo-icon.svg";
import {
  Content,
  Header,
  Main,
  Footer,
  TextWrapper,
  ButtonWrapper,
} from "./initial.styles";

export const Initial = () => {
  return (
    <ScreenTemplate.Root variant="tertiary">
      <Content>
        <Header>
          <LogoIcon />
          <Text.Root color="neutral-white" variant="heading-3">
            Queezy
          </Text.Root>
        </Header>
        <Main>
          <InitialIllustration />
        </Main>
        <Footer>
          <TextWrapper>
            <Text.Root color="neutral-black" variant="heading-3">
              Login or Sign Up
            </Text.Root>
            <Text.Root
              align="center"
              color="neutral-gey-2"
              variant="body-normal-regular"
            >
              Login or create an account to take quiz, take part in challenge,
              and more.
            </Text.Root>
          </TextWrapper>
          <ButtonWrapper>
            <Button.Root>
              <Button.Text>Login</Button.Text>
            </Button.Root>
            <Button.Root variant="secondary">
              <Button.Text>Create an account</Button.Text>
            </Button.Root>
          </ButtonWrapper>
        </Footer>
      </Content>
    </ScreenTemplate.Root>
  );
};
