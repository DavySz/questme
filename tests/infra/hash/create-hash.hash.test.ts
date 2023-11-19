import { UuiCreateHashAdapter } from "@infra/hash";

const makeSut = () => {
  const sut = new UuiCreateHashAdapter();
  return {
    sut,
  };
};

describe("UuiCreateHashAdapter", () => {
  test("Should return different value for each case", () => {
    const { sut } = makeSut();

    const firstCall = sut.create();
    const secondCall = sut.create();

    expect(firstCall).not.toBe(secondCall);
  });
});
