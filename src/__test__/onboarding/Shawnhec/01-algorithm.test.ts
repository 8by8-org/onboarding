/**
 * Exercise 1 test scaffold.
 *
 * Full instructions: ../../../docs/exercises/01-algorithms-and-testing.md
 */

import { describe, it, expect } from 'vitest';

import { mergeSortedNumbers } from '../../../onboarding/Shawnhec/01-algorithm.ts';

/**
 * Exercise 1 tests for Shawnhec.
 */
describe('mergeSortedNumbers', () => {
  it(
    'merge two arrays of the same length without overlapping values, ' +
      'resulting all distinct output',
    () => {
      expect(mergeSortedNumbers([1, 2, 3], [4, 5, 6])).toEqual([
        1, 2, 3, 4, 5, 6,
      ]);
    },
  );

  it('returns a new array instead of mutating either input', () => {
    const left = [1, 3, 5];
    const right = [2, 4, 6];

    const leftCopy = [...left];
    const rightCopy = [...right];

    const result = mergeSortedNumbers(left, right);

    expect(left).toEqual(leftCopy);
    expect(right).toEqual(rightCopy);

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);

    expect(result).not.toBe(left);
    expect(result).not.toBe(right);
  });

  it('handles one empty array', () => {
    expect(mergeSortedNumbers([], [1])).toEqual([1]);
  });

  it('handles arrays that are both empty', () => {
    expect(mergeSortedNumbers([], [])).toEqual([]);
  });

  it('handles arrays that are the same size with overlapping values', () => {
    expect(mergeSortedNumbers([1, 2], [2, 3])).toEqual([1, 2, 2, 3]);
  });

  it('handles arrays that are different sizes with no overlapping values', () => {
    expect(mergeSortedNumbers([1, 2], [4, 5, 6])).toEqual([1, 2, 4, 5, 6]);
  });

  it('handles arrays that are different sizes with overlapping values', () => {
    expect(mergeSortedNumbers([1, 2, 3], [3, 5])).toEqual([1, 2, 3, 3, 5]);
  });
});
