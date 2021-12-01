import { describe, expect, it } from "@jest/globals";
import { permutations } from "./permutations";

describe(permutations, () => {
  it("should be defined", () => {
    expect(permutations).toBeDefined();
  });

  describe("when a non-string value is given", () => {
    [4, true, undefined, [], () => {}, {}].forEach((elem) => {
      const type = typeof elem;
      it(`should throw an error with type ${type}`, () => {
        expect(() => permutations(elem)).toThrowError("invalid parameter type");
      });
    });
  });

  describe("when an empty string is given", () => {
    it("should return an empty array as answer", () => {
      expect(permutations("")).toEqual([]);
    });
  });

  describe("when a string with exactly one character is given", () => {
    it("should return an array with that string", () => {
      expect(permutations("a")).toEqual(["a"]);
    });
  });

  describe("when a non-empty string is passed as parameter", () => {
    it("should return all permutations of that string", () => {
      const word = "abc";
      const expected = ["abc", "acb", "bac", "bca", "cab", "cba"];
      expect(permutations(word).sort()).toEqual(expected.sort());
    });
  });
});
