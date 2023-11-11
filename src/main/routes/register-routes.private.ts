import { MakeHomeScreen } from "@main/factories/screens";
import { IRoute } from "./types";

export const privateTabRoutes: IRoute[] = [
  {
    name: "home",
    component: MakeHomeScreen,
  },
  {
    name: "search",
    component: MakeHomeScreen,
  },
  {
    name: "statistics",
    component: MakeHomeScreen,
  },
  {
    name: "profile",
    component: MakeHomeScreen,
  },
];
