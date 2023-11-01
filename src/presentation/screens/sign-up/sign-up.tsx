import { Button, ScreenTemplate, Text } from "@presentation/components";

import FacebookIcon from "@presentation/assets/icons/facebook-icon.svg";
import GoogleIcon from "@presentation/assets/icons/google-icon.svg";
import LetterIcon from "@presentation/assets/icons/letter-icon.svg";
import { Content, Footer, Main } from "./sign-up.styles";
import { ISignUp } from "./types";

export const SignUp = ({
  handleGoBack,
}: ISignUp): ReturnType<React.FC<ISignUp>> => {
  return (
    <ScreenTemplate.Root variant="secondary">
      <ScreenTemplate.Header goBack={handleGoBack}>
        Sign Up
      </ScreenTemplate.Header>
      <Content>
        <Main>
          <Button.Root variant="google">
            <Button.Icon icon={GoogleIcon} side="left" />
            <Button.Text>Sign Up with Email</Button.Text>
          </Button.Root>
          <Button.Root>
            <Button.Icon icon={LetterIcon} side="left" />
            <Button.Text>Sign Up with Google</Button.Text>
          </Button.Root>
          <Button.Root variant="facebook">
            <Button.Icon icon={FacebookIcon} side="left" />
            <Button.Text>Sign Up with Facebook</Button.Text>
          </Button.Root>
        </Main>
        <Footer>
          <Text.Root variant="body-normal-regular" color="neutral-gey-2">
            Already have an account?{" "}
            <Text.Root variant="body-normal-medium" color="primary">
              Login
            </Text.Root>
          </Text.Root>
          <Text.Root
            variant="body-small-regular"
            color="neutral-gey-2"
            align="center"
          >
            By continuing, you agree to the Terms of{" "}
            <Text.Root variant="body-small-medium" color="neutral-gey-1">
              Services & Privacy Policy.
            </Text.Root>
          </Text.Root>
        </Footer>
      </Content>
    </ScreenTemplate.Root>
  );
};
