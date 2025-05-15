const { add } = require('../calculator');

describe("String Calculator", () => {
  test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("returns number itself for single number", () => {
    expect(add("1")).toBe(1);
  });

  test("returns sum of two numbers", () => {
    expect(add("1,2")).toBe(3);
  });

    test("returns sum of multiple comma-separated numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });
  test("supports custom delimiter ;", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test("supports custom delimiter *", () => {
    expect(add("//*\n2*3*4")).toBe(9);
  });

  test("supports custom delimiter |", () => {
    expect(add("//|\n1|2|3")).toBe(6);
  });
  test("throws error for a single negative number", () => {
    expect(() => add("1,-2")).toThrow("negative numbers not allowed -2");
  });


});
