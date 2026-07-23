/**
 * Exercise: Algorithm and testing
 * Developer: captainex
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
  //throw new Error('not implemented');

  /*
  -VALIDATE input; typecast or use catch/throw block
  -Number.isInteger() will help; Math.trunc()
  -beware overflow errors

  -use test file for all edge cases; Number.MAX_SAFE_INTEGER | Number.MIN_SAFE_INTEGER
  -check for 0 steps or negative steps
  -rotate an empty array
  -reduce loops to 1
  */
  const n = values.length;

  steps %= n;

  const temp = new Array(n);

  for (let i = 0; i < values.length - 1; i++) {
    temp[i] = temp[i + 1];
  }

  return temp;
}
