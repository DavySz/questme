import {
  MakeInitialScreen,
  MakeLoginScreen,
  MakeOnboardingScreen,
  MakeSplashScreen,
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
];
