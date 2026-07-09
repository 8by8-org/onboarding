/**
 * Exercise 1 test scaffold.
 *
 * Full instructions: ../../../docs/exercises/01-algorithms-and-testing.md
 */

import { describe, it, expect } from 'vitest';

import { mergeSortedNumbers } from '../../../onboarding/auleenadas/01-algorithm.ts';

/**
 * Exercise 1 tests for auleenadas.
 */
describe('mergeSortedNumbers', () => {
  it('merges values from both arrays in ascending order', () => {
    const result = mergeSortedNumbers([1, 3, 5], [2, 4, 6]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('returns a new array instead of mutating either input', () => {
    const left = [1, 3];
    const right = [2, 4];
    const result = mergeSortedNumbers(left, right);

    expect(result).toEqual([1, 2, 3, 4]);
    expect(left).toEqual([1, 3]); // unchanged
    expect(right).toEqual([2, 4]); // unchanged
  });

  it('handles one empty array', () => {
    expect(mergeSortedNumbers([], [1, 2, 3])).toEqual([1, 2, 3]);
    expect(mergeSortedNumbers([1, 2, 3], [])).toEqual([1, 2, 3]);
  });
});
