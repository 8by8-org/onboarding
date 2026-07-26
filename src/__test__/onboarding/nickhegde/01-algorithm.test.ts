/**
 * Exercise 1 test scaffold.
 *
 * Full instructions: ../../../docs/exercises/01-algorithms-and-testing.md
 */

import { describe, it, expect } from 'vitest';

import { rotateArray } from '../../../onboarding/nickhegde/01-algorithm.ts';

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

  it('supports negative steps', () => {
    expect(rotateArray([1, 2, 3, 4, 5], -2)).toEqual([3, 4, 5, 1, 2]);
  });

  it('returns an empty array when given an empty array', () => {
    expect(rotateArray([], 3)).toEqual([]);
  });

  it('does not mutate the original array', () => {
    const original = [1, 2, 3, 4, 5];
    const copy = [...original];
    rotateArray(original, 2);
    expect(original).toEqual(copy);
  });
});
