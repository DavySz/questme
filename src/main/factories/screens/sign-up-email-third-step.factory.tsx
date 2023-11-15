import { SignUpEmailThirdStepContainer } from "@presentation/screens";
import { makeCreateUserByEmailPassword } from "../usecases";
import { ReactNode } from "react";

export function MakeSignUpEmailThirdStepScreen(): ReactNode {
  return (
    <SignUpEmailThirdStepContainer
      createUserByEmailPassword={makeCreateUserByEmailPassword()}
    />
  );
}
