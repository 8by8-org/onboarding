/**
 * Exercise: Algorithm and testing
 * Developer: Shreyas410
 * Instructions: ../../../docs/exercises/01-algorithms-and-testing.md
 */

/**
 * Exercise 1: implement the algorithm and back it up with unit tests.
 */

/**
 * Rotates an array to the right by a number of steps.
 *
 * @param values The source values.
 * @param steps The number of positions to rotate.
 * @returns A new array with the rotated values.
 */
export function rotateArray(values: number[], steps: number): number[] {
  if (values.length === 0) {
    return [];
  }

  const rotation = ((steps % values.length) + values.length) % values.length;

  return values.slice(-rotation).concat(values.slice(0, -rotation));
}
