import Zaperson from "../index";

describe("#Humanizer Test Suite", () => {
  it("should return a humanized string from a number string", () => {
    const mockNumber = "5511987561234";
    const expected = "+55 11 98756-1234";

    const validator = new Zaperson();

    const result = validator.humanize(mockNumber);
    expect(result).toEqual(expected);
  });

  it("should throw a error when the number is invalid", () => {
    const mockNumber = "55x1d198751116tt1234";
    const validator = new Zaperson();
    expect(() => validator.humanize(mockNumber)).toThrow(
      "Number string length is too long"
    );
  });
});
