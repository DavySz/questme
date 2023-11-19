import { RemoteCreateUserByEmailPassword } from "@data/usecases";
import {
  SetItemSpy,
  EncryptSpy,
  CreateHashSpy,
  FindOneByEmailSpy,
} from "../mocks";

import { mockUser } from "../../domain/models";
import { UserModel } from "@domain/models";
import { UserAlreadyExistsError } from "@domain/errors";

const makeSut = (path: string = "http://test.com.br") => {
  const findOneByEmailSpy = new FindOneByEmailSpy<UserModel>();
  const setItemSpy = new SetItemSpy<UserModel>();
  const createHashSpy = new CreateHashSpy();
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

    await sut.create(mockUser);

    expect(createSpy).toHaveBeenCalledWith(mockUser);
  });

  test("Should encrypt method receive correct params", async () => {
    const { sut, encryptSpy } = makeSut();

    const createSpyOn = jest.spyOn(encryptSpy, "encrypt");

    await sut.create(mockUser);

    expect(createSpyOn).toHaveBeenCalledWith(
      mockUser.password,
      process.env.ENCRYPT_SECRET
    );
  });

  test("Should findOneByEmail method receive correct params", async () => {
    const path = "any-path";

    const { sut, findOneByEmailSpy } = makeSut(path);

    const findOneSpy = jest.spyOn(findOneByEmailSpy, "findOne");

    await sut.create(mockUser);

    expect(findOneSpy).toHaveBeenCalledWith(path, mockUser.email);
  });

  test("Should setItem method receive correct params", async () => {
    const path = "any-path";
    const hash = "any-hash";
    const encryptedPassword = "encrypted-password";

    const { sut, setItemSpy, createHashSpy, encryptSpy } = makeSut(path);

    jest.spyOn(encryptSpy, "encrypt").mockReturnValue(encryptedPassword);
    jest.spyOn(createHashSpy, "create").mockReturnValue(hash);

    const setSpy = jest.spyOn(setItemSpy, "set");

    await sut.create(mockUser);

    const newUshWithHash: UserModel = {
      ...mockUser,
      userId: hash,
      password: encryptedPassword,
    };

    expect(setSpy).toHaveBeenCalledWith(path, newUshWithHash);
  });

  test("Should throws UserAlreadyExistsError error if user received already exists", async () => {
    const { sut, findOneByEmailSpy } = makeSut();

    jest.spyOn(findOneByEmailSpy, "findOne").mockResolvedValue(mockUser);

    const response = sut.create(mockUser);

    expect(response).rejects.toThrow(new UserAlreadyExistsError());
  });
});
