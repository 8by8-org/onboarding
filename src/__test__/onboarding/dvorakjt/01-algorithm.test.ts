/**
 * Exercise 1 test scaffold.
 *
 * Full instructions: ../../../docs/exercises/01-algorithms-and-testing.md
 */

import { describe, it, expect } from 'vitest';
import { countVowels } from '../../../onboarding/dvorakjt/01-algorithm.ts';

/**
 * Exercise 1 tests for the vowel counter.
 */
describe('countVowels', () => {
  it('counts lowercase vowels', () => {
    expect(countVowels('aeiou')).toBe(5);
  });

  it('counts uppercase vowels too', () => {
    expect(countVowels('AEIOU')).toBe(5);
  });

  it('returns zero when there are no vowels', () => {
    expect(countVowels('bcdfghjklmnpqrstvwxyz')).toBe(0);
  });

  it('returns zero for empty strings', () => {
    expect(countVowels('')).toBe(0);
  });

  it('handles a mixture of uppercase and lowercase vowels and constants', () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    expect(countVowels(alphabet + alphabet.toUpperCase())).toBe(10);
  });

  it('counts repeat instances of the same vowel', () => {
    expect(countVowels('aaaaa')).toBe(5);
  });
});
