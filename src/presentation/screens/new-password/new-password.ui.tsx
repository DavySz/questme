import { Button, Input, ScreenTemplate, Text } from "@presentation/components";
import { Content, InputWrapper, Main } from "./new-password.styles";
import { INewPassword } from "./types";

import LockIcon from "@presentation/assets/icons/lock-icon.svg";

export const NewPasswordUI = ({
  handleGoToInitial,
}: INewPassword): ReturnType<React.FC<INewPassword>> => {
  return (
    <ScreenTemplate.Root variant="secondary">
      <ScreenTemplate.Header>New Password</ScreenTemplate.Header>
      <Content>
        <Text.Root variant="body-normal-regular" color="neutral-gey-2">
          Your new password must be different from previous used passwords.
        </Text.Root>
        <Main>
          <InputWrapper>
            <Input.Label>Password</Input.Label>
            <Input.Root>
              <Input.Icon icon={LockIcon} />
              <Input.Text placeholder="Your password" />
            </Input.Root>
          </InputWrapper>
          <InputWrapper>
            <Input.Label>Confirm Password</Input.Label>
            <Input.Root>
              <Input.Icon icon={LockIcon} />
              <Input.Text placeholder="Confirm your password" />
            </Input.Root>
          </InputWrapper>
        </Main>
        <Button.Root onPress={handleGoToInitial} testID="button-reset-password">
          <Button.Text>Reset Password</Button.Text>
        </Button.Root>
      </Content>
    </ScreenTemplate.Root>
  );
};
