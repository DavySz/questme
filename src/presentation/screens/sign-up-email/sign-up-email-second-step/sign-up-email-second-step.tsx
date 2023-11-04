import {
  Button,
  Input,
  Progress,
  ScreenTemplate,
} from "@presentation/components";
import { Content, Footer, Main } from "./sign-up-email-second-step.styles";

import LockIcon from "@presentation/assets/icons/lock-icon.svg";
import { ISignUpEmailSecondStep } from "./types";

export const SignUpEmailSecondStep = ({
  handleGoBack,
  handleSignUpEmailThirdStepScreen,
}: ISignUpEmailSecondStep): ReturnType<React.FC<ISignUpEmailSecondStep>> => {
  return (
    <ScreenTemplate.Root variant="secondary">
      <ScreenTemplate.Header goBack={handleGoBack}>
        What’s your password?
      </ScreenTemplate.Header>
      <Content testID="sign-up-email-second-step-screen-content">
        <Main>
          <Input.Label>Password</Input.Label>
          <Input.Root>
            <Input.Icon icon={LockIcon} color="primary" />
            <Input.Text placeholder="Your password" />
          </Input.Root>
        </Main>
        <Footer>
          <Progress.Root objective={3} progress={2}>
            <Progress.Label />
            <Progress.Bar />
          </Progress.Root>
          <Button.Root onPress={handleSignUpEmailThirdStepScreen}>
            <Button.Text>Continue</Button.Text>
          </Button.Root>
        </Footer>
      </Content>
    </ScreenTemplate.Root>
  );
};
