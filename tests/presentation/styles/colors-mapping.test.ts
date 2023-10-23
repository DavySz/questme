import { colorMapping, theme } from "@presentation/styles";

describe("colorMapping", () => {
  test("Should return correct color", () => {
    const color = colorMapping("primary");
    expect(color).toBe(theme.colors.primary);
  });
});
