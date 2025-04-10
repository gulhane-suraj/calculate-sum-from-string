import { add } from "./helpers";

describe("add function", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("should return the number itself for a single number", () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
  });

  test("should return the sum of two comma-separated numbers", () => {
    expect(add("1,2")).toBe(3);
    expect(add("10,20")).toBe(30);
  });

  test("should handle an unknown amount of numbers", () => {
    expect(add("1,2,3,4,5")).toBe(15);
    expect(add("10,20,30,40,50")).toBe(150);
  });

  test("should handle newlines as delimiters", () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("10\n20\n30")).toBe(60);
  });

  test("should support custom delimiters", () => {
    expect(add("//;\n1;2;3")).toBe(6);
    expect(add("//|\n10|20|30")).toBe(60);
  });

  test("should throw an error for negative numbers", () => {
    expect(() => add("-1,2,-3")).toThrow(
      "Negative numbers not allowed: -1, -3"
    );
  });

  test("should throw an error listing all negative numbers", () => {
    expect(() => add("1,-2,-3,4")).toThrow(
      "Negative numbers not allowed: -2, -3"
    );
  });
});
