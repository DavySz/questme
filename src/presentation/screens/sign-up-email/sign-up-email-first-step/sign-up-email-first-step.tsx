import {
  Button,
  Input,
  Progress,
  ScreenTemplate,
} from "@presentation/components";
import { Content, Footer, Main } from "./sign-up-email-first-step.styles";

import LetterIcon from "@presentation/assets/icons/letter-icon.svg";
import { ISignUpEmailFirstStep } from "./types";

export const SignUpEmailFirstStep = ({
  handleGoBack,
  handleSignUpEmailSecondStepScreen,
}: ISignUpEmailFirstStep): ReturnType<React.FC<ISignUpEmailFirstStep>> => {
  return (
    <ScreenTemplate.Root variant="secondary">
      <ScreenTemplate.Header goBack={handleGoBack}>
        What’s your email?
      </ScreenTemplate.Header>
      <Content testID="sign-up-email-first-step-screen-content">
        <Main>
          <Input.Label>Email Address</Input.Label>
          <Input.Root>
            <Input.Icon icon={LetterIcon} color="primary" />
            <Input.Text placeholder="Your email address" />
          </Input.Root>
        </Main>
        <Footer>
          <Progress.Root objective={3} progress={1}>
            <Progress.Label />
            <Progress.Bar />
          </Progress.Root>
          <Button.Root onPress={handleSignUpEmailSecondStepScreen}>
            <Button.Text>Continue</Button.Text>
          </Button.Root>
        </Footer>
      </Content>
    </ScreenTemplate.Root>
  );
};
