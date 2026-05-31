/**
 * Exercise: TSDoc
 * Developer: dvorakjt
 * Instructions: ../../../docs/exercises/02-writing-tsdoc-comments.md
 */

// Exercise 2: replace the placeholder TSDoc with complete documentation.

/**
 * TODO: explain the purpose of this function.
 *
 * @param numbers TODO: describe the input collection.
 * @returns TODO: describe the grouped output.
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
