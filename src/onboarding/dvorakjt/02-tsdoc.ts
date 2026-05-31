/**
 * Exercise: TSDoc
 * Developer: dvorakjt
 * Instructions: ../../../docs/exercises/02-writing-tsdoc-comments.md
 */

// Exercise 2: replace the placeholder TSDoc with complete documentation.

/**
 * Groups an array of numbers by parity.
 *
 * @param numbers An array of numbers to group.
 * @returns An object containing two grouped arrays.
 */
export function groupByParity(numbers: number[]): {
  even: number[];
  odd: number[];
} {
  return numbers.reduce<{ even: number[]; odd: number[] }>(
    (groups, value) => {
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
