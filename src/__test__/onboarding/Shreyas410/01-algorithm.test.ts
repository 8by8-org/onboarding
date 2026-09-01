/**
 * Exercise 1 test scaffold.
 *
 * Full instructions: ../../../docs/exercises/01-algorithms-and-testing.md
 */

import { describe, expect, it } from "vitest";

import { rotateArray } from "../../../onboarding/Shreyas410/01-algorithm.ts";

/**
 * Exercise 1 tests for the array rotation helper.
 */
describe("rotateArray", () => {
  it("rotates values to the right", () => {
    expect(rotateArray([1, 2, 3, 4], 2)).toEqual([3, 4, 1, 2]);
  });

  it("supports steps larger than the array length", () => {
    expect(rotateArray([1, 2, 3, 4], 6)).toEqual([3, 4, 1, 2]);
  });

  it("does not mutate the original array", () => {
    const values = [1, 2, 3, 4];

    rotateArray(values, 1);

    expect(values).toEqual([1, 2, 3, 4]);
  });
});
