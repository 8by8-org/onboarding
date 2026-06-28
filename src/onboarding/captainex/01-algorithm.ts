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
  /*
    CREATE an index

    ADD 1 to index
    1 2 3
    0 1 2
    [0 1 2] 3
    
    1 2 3
    X X 1 2 3
    0 1 2 3 4

    2 3 1 
    arr.length() > 

    const arr[] = [];
    int run = 2;
    let n = arr.length;

    run %= n;

    let temp = new Array(n);

    int currIndex;
  */
  const n = values.length;

  steps %= n;

  const temp = new Array(n);

  for (let i = 0; i < steps; i++) {
    temp[i] = values[n - steps + i];
  }

  for (let i = 0; i < n - steps; i++) {
    temp[i + steps] = values[i];
  }

  for (let i = 0; i < n; i++) {
    values[i] = temp[i];
  }

  return temp;
}

const arr = [1, 2, 3, 4, 5, 6];
const steps = 1;

rotateArray(arr, steps);
