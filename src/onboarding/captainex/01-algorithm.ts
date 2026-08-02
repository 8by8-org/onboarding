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

  //check if is integer, write throw expression: throw new Error

  const n = values.length;

  steps = steps < 0 ? (steps % n) + values.length : steps % n;

  if (steps === 0) {
    throw new Error('Divide by zero!');
  } /*else if (steps % n != 0) {
    throw new Error('Input is not a whole integer!');
  }*/

  const temp = new Array(n);

  //1 2 3 4 5 > 2 un un un un > 2 3 un un un > 2 3 4 un un > 2 3 4 5 un
  // un un 1 2 un > un un 1 2 3 > 4 un 1 2 3 > 4 5 1 2 3
  for (let i = 0; i < values.length; i++) {
    const walk = (i + steps) % n;

    temp[walk] = values[i];
  }

  return temp;
}
