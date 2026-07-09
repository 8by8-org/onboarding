/**
 * Exercise: Algorithm and testing
 * Developer: auleenadas
 * Instructions: ../../../docs/exercises/01-algorithms-and-testing.md
 */

/**
 * Exercise 1: auleenadas must implement a small algorithm and add tests for it.
 *
 * Goal: merge two sorted arrays into a new sorted array without mutating either input.
 */

/**
 * Combines two ascending arrays into one ascending array.
 *
 * @param left The first sorted list.
 * @param right The second sorted list.
 * @returns A new sorted list containing the values from both inputs.
 */
export function mergeSortedNumbers(left: number[], right: number[]): number[] {
  const result: number[] = [];
  let i = 0; // pointer for left
  let j = 0; // pointer for right

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // one array may have leftover elements — add them all
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}
