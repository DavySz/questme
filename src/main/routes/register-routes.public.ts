import {
  MakeLoginScreen,
  MakeSignUpScreen,
  MakeSplashScreen,
  MakeInitialScreen,
  MakeOnboardingScreen,
  MakeNewPasswordScreen,
  MakeResetPasswordScreen,
  MakeSignUpEmailThirdStepScreen,
  MakeSignUpEmailFirstStepScreen,
  MakeSignUpEmailSecondStepScreen,
} from "@main/factories/screens";

import { IRoute } from "./types";

export const publicRoutes: IRoute[] = [
  {
    name: "login",
    component: MakeLoginScreen,
  },
  {
    name: "splash",
    component: MakeSplashScreen,
  },
  {
    name: "onboarding",
    component: MakeOnboardingScreen,
  },
  {
    name: "initial",
    component: MakeInitialScreen,
  },
  {
    name: "sign-up",
    component: MakeSignUpScreen,
  },
  {
    name: "reset-password",
    component: MakeResetPasswordScreen,
  },
  {
    name: "new-password",
    component: MakeNewPasswordScreen,
  },
  {
    name: "sign-up-email-first-step",
    component: MakeSignUpEmailFirstStepScreen,
  },
  {
    name: "sign-up-email-second-step",
    component: MakeSignUpEmailSecondStepScreen,
  },
  {
    name: "sign-up-email-third-step",
    component: MakeSignUpEmailThirdStepScreen,
  },
];
