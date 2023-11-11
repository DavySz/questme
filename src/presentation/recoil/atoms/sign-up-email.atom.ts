import { atom } from "recoil";

export const signUpEmailState = atom({
  key: "sign-up-email-state",
  default: {
    password: "",
    username: "",
    email: "",
  },
});
