import { FirebaseFindOneByEmailAdapter } from "@infra/database";
import { FindOneByEmail } from "@data/database";

export function makeFirebaseFindOneByEmailAdapter<T>(): FindOneByEmail<T> {
  return new FirebaseFindOneByEmailAdapter<T>();
}
