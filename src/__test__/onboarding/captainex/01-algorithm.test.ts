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
    expect(rotateArray([1, 2, 3, 4, 5], 1)).toEqual([5, 1, 2, 3, 4]);
  });
  it('supports steps larger than the array length', () => {
    expect(rotateArray([1, 2, 3], 7)).toEqual([3, 1, 2]);
  });
  it('does not mutate the original array', () => {
    const firstArr = [];
    const secondArr = [...firstArr];
    rotateArray(firstArr, 2);
    expect(firstArr).toEqual(secondArr);
  });
});
