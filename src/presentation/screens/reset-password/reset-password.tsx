import { Button, Input, ScreenTemplate, Text } from "@presentation/components";
import { Content, InputWrapper, Main } from "./reset-password.styles";
import { IResetPassword } from "./types";

import LetterIcon from "@presentation/assets/icons/letter-icon.svg";

export const ResetPassword = ({
  handleGoBack,
}: IResetPassword): ReturnType<React.FC<IResetPassword>> => {
  return (
    <ScreenTemplate.Root variant="secondary">
      <ScreenTemplate.Header goBack={handleGoBack}>
        Reset Password
      </ScreenTemplate.Header>
      <Content testID="reset-password-screen-content">
        <Main>
          <Text.Root variant="body-normal-regular" color="neutral-gey-2">
            Enter your email and we will send you a link to reset your password.
          </Text.Root>
          <InputWrapper>
            <Input.Label>Email Address</Input.Label>
            <Input.Root>
              <Input.Icon icon={LetterIcon} color="primary" />
              <Input.Text placeholder="Your email address" />
            </Input.Root>
          </InputWrapper>
        </Main>
        <Button.Root>
          <Button.Text>Reset Password</Button.Text>
        </Button.Root>
      </Content>
    </ScreenTemplate.Root>
  );
};
