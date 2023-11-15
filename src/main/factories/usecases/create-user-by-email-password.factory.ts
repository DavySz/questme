import { RemoteCreateUserByEmailPassword } from "@data/usecases";
import { UserModel } from "@domain/models";
import { CreateUserByEmailPassword } from "@domain/usecases";
import { CryptoEncryptAdapter } from "@infra/crypto";
import {
  FirebaseSetItemAdapter,
  FirebaseFindOneByEmailAdapter,
} from "@infra/database";

import { UuiCreateHashAdapter } from "@infra/hash";

export const makeCreateUserByEmailPassword = (): CreateUserByEmailPassword => {
  const firebaseSetItemAdapter = new FirebaseSetItemAdapter<UserModel>();
  const uuidCreateHashAdapter = new UuiCreateHashAdapter();
  const cryptoEncryptAdapter = new CryptoEncryptAdapter();

  const firebaseFindOneByEmailAdapter =
    new FirebaseFindOneByEmailAdapter<UserModel>();

  return new RemoteCreateUserByEmailPassword(
    "users",
    uuidCreateHashAdapter,
    cryptoEncryptAdapter,
    firebaseSetItemAdapter,
    firebaseFindOneByEmailAdapter
  );
};
