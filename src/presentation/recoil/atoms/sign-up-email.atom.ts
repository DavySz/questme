import { UserModel } from "@domain/models";
import { RecoilState, atom } from "recoil";

export const signUpEmailState: RecoilState<UserModel> = atom({
  key: "sign-up-email-state",
  default: {
    email: "",
    userId: "",
    password: "",
    username: "",
  },
});
