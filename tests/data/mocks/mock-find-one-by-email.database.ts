import { FindOneByEmail } from "@data/database";

export class FindOneByEmailSpy<R> implements FindOneByEmail<R> {
  email: string;
  path: string;

  callsCount = 0;

  async findOne(path: string, email: string) {
    this.email = email;
    this.path = path;
    this.callsCount++;

    return Promise.resolve() as R;
  }
}
