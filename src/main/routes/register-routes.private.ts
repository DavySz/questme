import { MakeHomeScreen } from "@main/factories/screens";
import { IRoute } from "./types";

export const privateRoutes: IRoute[] = [
  {
    name: "home",
    component: MakeHomeScreen,
  },
];
