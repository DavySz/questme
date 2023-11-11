import {
  Button,
  Input,
  Progress,
  ScreenTemplate,
} from "@presentation/components";
import { Content, Footer, Main } from "./sign-up-email-third-step.styles";

import UserIcon from "@presentation/assets/icons/user-outline-icon.svg";
import { ISignUpEmailThirdStep } from "./types";

export const SignUpEmailThirdStepUI = ({
  handleGoBack,
}: ISignUpEmailThirdStep): ReturnType<React.FC<ISignUpEmailThirdStep>> => {
  return (
    <ScreenTemplate.Root variant="secondary">
      <ScreenTemplate.Header goBack={handleGoBack}>
        Create a username
      </ScreenTemplate.Header>
      <Content testID="sign-up-email-third-step-screen-content">
        <Main>
          <Input.Label>Username</Input.Label>
          <Input.Root>
            <Input.Icon icon={UserIcon} color="primary" />
            <Input.Text placeholder="Your username" />
          </Input.Root>
        </Main>
        <Footer>
          <Progress.Root objective={3} progress={3}>
            <Progress.Label />
            <Progress.Bar />
          </Progress.Root>
          <Button.Root>
            <Button.Text>Create account</Button.Text>
          </Button.Root>
        </Footer>
      </Content>
    </ScreenTemplate.Root>
  );
};
