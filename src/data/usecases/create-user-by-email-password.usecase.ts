import { UserModel } from "@domain/models";
import { CreateUserByEmailPassword } from "@domain/usecases";

import { FindOneByEmail, SetItem } from "@data/database";
import { CreateHash } from "@data/hash";
import { Encrypt } from "@data/crypto";

import { UserAlreadyExistsError } from "@domain/errors";

export class RemoteCreateUserByEmailPassword
  implements CreateUserByEmailPassword
{
  constructor(
    private readonly path: string,
    private readonly createHash: CreateHash,
    private readonly createEncrypt: Encrypt,
    private readonly setItem: SetItem<UserModel>,
    private readonly findOneByEmail: FindOneByEmail<UserModel>
  ) {}

  async create(user: UserModel): Promise<void> {
    const userId = this.createHash.create();
    const password = this.createEncrypt.encrypt(
      user.password,
      process.env.ENCRYPT_SECRET
    );

    const newUser: UserModel = {
      ...user,
      password,
      userId,
    };

    try {
      const userExists = await this.findOneByEmail.findOne(
        this.path,
        user.email
      );

      if (userExists) {
        throw new UserAlreadyExistsError();
      }

      await this.setItem.set(this.path, newUser);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
