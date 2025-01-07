import Zaperson from "../index";

describe("#Parser Test Suite", () => {
  it("should remove all no-numeric digits from number string", () => {
    const mockNumbers = [
      "55 11 98756-1234",
      "55 (11) 98756-1234",
      "(11) 98756.1234",
      "11 98756-1234",
      "1198756-1234",
      "11.98756-1234",
    ];

    const expected = "5511987561234";

    const validator = new Zaperson();
    const results: string[] = [];
    mockNumbers.forEach((number) => {
      const result = validator.parse(number);
      results.push(result);
    });

    expect(results).toEqual([
      expected,
      expected,
      expected,
      expected,
      expected,
      expected,
    ]);
  });

  it("should throw an error when number string is empty", () => {
    const validator = new Zaperson();
    expect(() => validator.parse("")).toThrow("Number string is empty");
  });

  it("should throw an error when number string does not contain DDD", () => {
    const mockNumber = "98756-1234";
    const validator = new Zaperson();
    expect(() => validator.parse(mockNumber)).toThrow(
      "Number string length is invalid. DDD may be not include"
    );
  });

  it("should return the same string if number is already in the correct format", () => {
    const mockNumber = "5511987561234"; // Já formatado
    const expected = "5511987561234";

    const validator = new Zaperson();
    const result = validator.parse(mockNumber);

    expect(result).toBe(expected);
  });

  it("should throw an error when DDD is incorrect", () => {
    const mockNumber = "55 001 98756-1234"; // DDD incorreto
    const validator = new Zaperson();
    expect(() => validator.parse(mockNumber)).toThrow(
      "Number string length is too long"
    );
  });
});
