import {
  MakeLoginScreen,
  MakeSignUpScreen,
  MakeSplashScreen,
  MakeInitialScreen,
  MakeOnboardingScreen,
} from "@main/factories/screens";
import { HomeContainer } from "@presentation/screens";

export const publicRoutes = [
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
    name: "home",
    component: HomeContainer,
  },
  {
    name: "sign-up",
    component: MakeSignUpScreen,
  },
];
