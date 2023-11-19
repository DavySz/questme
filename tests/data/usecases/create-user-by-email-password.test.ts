import { RemoteCreateUserByEmailPassword } from "@data/usecases";
import {
  SetItemSpy,
  EncryptSpy,
  CreateHashSpy,
  FindOneByEmailSpy,
} from "../mocks";
import { UserModel } from "@domain/models";

const makeSut = (path: string = "http://test.com.br") => {
  const findOneByEmailSpy = new FindOneByEmailSpy<any>();
  const createHashSpy = new CreateHashSpy();
  const setItemSpy = new SetItemSpy<any>();
  const encryptSpy = new EncryptSpy();

  const sut = new RemoteCreateUserByEmailPassword(
    path,
    createHashSpy,
    encryptSpy,
    setItemSpy,
    findOneByEmailSpy
  );

  return {
    findOneByEmailSpy,
    createHashSpy,
    setItemSpy,
    encryptSpy,
    sut,
  };
};

describe("RemoteCreateUserByEmailPassword", () => {
  test("Should create method receive correct params", async () => {
    const { sut } = makeSut();

    const createSpy = jest.spyOn(sut, "create");

    const userMock: UserModel = {
      email: "any@gmail.com",
      password: "12345678",
      username: "any user",
      userId: "",
    };

    await sut.create(userMock);

    expect(createSpy).toHaveBeenCalledWith(userMock);
  });
});
