import { UserModel } from "@domain/models";

export interface CreateUserByEmailPassword {
  create: (user: UserModel) => Promise<void>;
}
