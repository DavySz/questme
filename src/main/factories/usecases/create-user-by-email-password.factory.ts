import { RemoteCreateUserByEmailPassword } from "@data/usecases";
import { CreateUserByEmailPassword } from "@domain/usecases";
import { UserModel } from "@domain/models";

import {
  makeFirebaseFindOneByEmailAdapter,
  makeFirebaseSetItemAdapter,
  makeCryptoEncryptAdapter,
  makeUuiCreateHashAdapter,
} from "../adapters";

export const makeCreateUserByEmailPassword = (): CreateUserByEmailPassword => {
  const findOneByEmailAdapter = makeFirebaseFindOneByEmailAdapter<UserModel>();
  const setItemAdapter = makeFirebaseSetItemAdapter<UserModel>();
  const createHashAdapter = makeUuiCreateHashAdapter();
  const encryptAdapter = makeCryptoEncryptAdapter();

  return new RemoteCreateUserByEmailPassword(
    "users",
    createHashAdapter,
    encryptAdapter,
    setItemAdapter,
    findOneByEmailAdapter
  );
};
