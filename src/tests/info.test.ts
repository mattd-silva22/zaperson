import Zaperson from "../index";

describe("# Info Test Suite", () => {
  it("should return a info string from a number string", () => {
    const mockNumber = "5511987561234";
    const expected = {
      number: "5511987561234",
      formattedNumber: "+55 11 98756-1234",
      ddi: "55",
      ddd: "11",
      location: {
        ddd: "11",
        uf: "SP",
        state: "São Paulo",
        region:
          "Região Metropolitana de São Paulo/Região Metropolitana de Jundiaí/Região Geográfica Imediata de Bragança Paulista",
      },
    };

    const validator = new Zaperson();

    const result = validator.info(mockNumber);

    expect(result).toEqual(expected);
  });
});
