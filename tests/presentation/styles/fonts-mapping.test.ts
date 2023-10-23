import { fontMapping, theme } from "@presentation/styles";

describe("fontMapping", () => {
  test("Should return correct font", () => {
    const font = fontMapping("bold");
    expect(font).toBe(theme.fonts.bold);
  });
});
