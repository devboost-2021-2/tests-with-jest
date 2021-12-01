import { describe, expect, it } from "@jest/globals";
import { powerSet } from "./power_set";

describe(powerSet, () => {
  it("is defined", () => {
    expect(powerSet).toBeDefined();
  });

  describe("when a value which is not an array is passed as parameter", () => {
    it("throws an error", () => {
      expect(() => powerSet(undefined)).toThrowError("invalid parameter type");
    });
  });

  describe("when an empty array is passed as parameter", () => {
    it("returns a set with an empty array in it", () => {
      expect(powerSet([])).toEqual([[]]);
    });
  });

  describe("when an array with one or more elements is passed as parameter", () => {
    it("returns the correct power set", () => {
      const set = [1, 2, 3];
      const expected = [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]];
      const answer = powerSet(set);
      expect(answer.sort()).toEqual(expected.sort());
    });
  });
});
