/**
 * Exercise: TSDoc
 * Developer: captainex
 * Instructions: ../../../docs/exercises/02-writing-tsdoc-comments.md
 */

// Exercise 2: replace the placeholder TSDoc with complete documentation.

/**
 * Groups an array of numbers by parity
 *
 * @param numbers an array of numbers in a group
 * @returns an object containing two grouped arrays
 */
export function groupByParity(numbers: number[]): {
  even: number[];
  odd: number[];
} {
  // returns a reduced array of numbers
  return numbers.reduce<{ even: number[]; odd: number[] }>(
    (groups, value) => {
      // checks if the numbers can be evenly divided
      if (value % 2 === 0) {
        groups.even.push(value);
      } else {
        groups.odd.push(value);
      }

      return groups;
    },
    { even: [], odd: [] },
  );
}
