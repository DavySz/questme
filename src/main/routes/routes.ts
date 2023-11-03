import {
  MakeLoginScreen,
  MakeSignUpScreen,
  MakeSplashScreen,
  MakeInitialScreen,
  MakeOnboardingScreen,
  MakeResetPasswordScreen,
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
];
