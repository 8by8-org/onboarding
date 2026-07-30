/**
 * Exercise: Algorithm and testing
 * Developer: nickhegde
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
  const length = values.length;

  if (length === 0) {
    return [];
  }

  const rotated: number[] = new Array(length);

  for (let i = 0; i < length; i++) {
    const newIndex = (((i + steps) % length) + length) % length;
    rotated[newIndex] = values[i];
  }

  return rotated;
}
