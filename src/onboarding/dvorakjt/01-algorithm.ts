/**
 * Exercise: Algorithm and testing
 * Developer: dvorakjt
 * Instructions: ../../../docs/exercises/01-algorithms-and-testing.md
 */

/**
 * Exercise 1: implement the algorithm and write meaningful unit tests.
 */

/**
 * Counts the vowels in a phrase.
 *
 * @param phrase The text to inspect.
 * @returns The number of vowels found in the phrase.
 */
export function countVowels(phrase: string): number {
  return phrase.match(/[aeiou]/gi)?.length ?? 0;
}
