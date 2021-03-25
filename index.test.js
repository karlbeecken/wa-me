const waMe = require("./index");

describe("Create a wa.me link from a phone number", () => {
  test("it should filter weird chars from the phone number input", () => {
    const input = "+49 (30) 82-56/123 99";
    const output = "https://wa.me/4930825612399";
    expect(waMe.createFromNumber(input)).toEqual(output);
  });
});
