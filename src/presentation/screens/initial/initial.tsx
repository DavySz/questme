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
import { IInitial } from "./types";

export const Initial = ({
  handleGoToLoginScreen,
  handleGoToSignUpScreen,
}: IInitial): ReturnType<React.FC<IInitial>> => {
  return (
    <ScreenTemplate.Root variant="tertiary">
      <Content testID="initial-screen-content">
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
            <Button.Root onPress={handleGoToLoginScreen} testID="button-login">
              <Button.Text>Login</Button.Text>
            </Button.Root>
            <Button.Root
              onPress={handleGoToSignUpScreen}
              testID="button-sign-up"
              variant="secondary"
            >
              <Button.Text>Create an account</Button.Text>
            </Button.Root>
          </ButtonWrapper>
        </Footer>
      </Content>
    </ScreenTemplate.Root>
  );
};
