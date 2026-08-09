/**
 * Exercise 1 test scaffold.
 *
 * Full instructions: ../../../docs/exercises/01-algorithms-and-testing.md
 */

//import '@types/jest';
import { describe, expect, it } from 'vitest';

import { rotateArray } from '../../../onboarding/captainex/01-algorithm.ts';

/**
 * Exercise 1 tests for the array rotation helper.
 */
describe('rotateArray', () => {
  it('rotates values to the right', () => {
    expect(rotateArray([1, 2, 3, 4, 5], 2)).toEqual([4, 5, 1, 2, 3]);
  });
  it('supports steps larger than the array length', () => {
    expect(rotateArray([1, 2, 3, 4, 5], 7)).toEqual([4, 5, 1, 2, 3]);
  });
  it('does not mutate the original array', () => {
    const firstarr = [1, 2, 3, 4, 5];
    const copy = [...firstarr];

    rotateArray(firstarr, 2);

    expect(firstarr).toEqual(copy);
  });
  it('does not overflow when the max integer limit is reached', () => {
    expect(rotateArray([1, 2], Number.MAX_SAFE_INTEGER)).toEqual([2, 1]);
  });
  it('does not overflow when the minumum integer limit is reached', () => {
    expect(rotateArray([1], Number.MIN_SAFE_INTEGER)); //TODO
  });
  it('checks that the function does not divide by zero', () => {
    const result = rotateArray([], 5);
    expect(result).toEqual([]);
  });
  it('it should not move the array if steps input is zero', () => {
    const test = [1, 2, 3, 4, 5];
    const result = rotateArray(test, 0);

    expect(result).toEqual(test);
  });
  it('checks that the steps are a valid integer', () => {
    expect(() => rotateArray([1, 2, 3], 1.5)).toThrow();
    expect(() => rotateArray([1, 2, 3], 1.75)).toThrow();
  });
  it('returns the correct output when rotated left', () => {
    const result = rotateArray([1, 2, 3, 4, 5], -2);
    expect(result).toEqual([3, 4, 5, 1, 2]);
  });
});
