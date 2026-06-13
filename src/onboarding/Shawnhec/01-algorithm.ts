/**
 * Exercise: Algorithm and testing
 * Developer: Shawnhec
 * Instructions: ../../../docs/exercises/01-algorithms-and-testing.md
 */

/**
 * Exercise 1: Shawnhec must implement a small algorithm and add tests for it.
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
  const ans: number[] = [];

  /*
  Define ListNode class
  */
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  const dummyLeft: ListNode = new ListNode();
  const dummyRight: ListNode = new ListNode();
  let leftHead: ListNode | null;
  let rightHead: ListNode | null;
  let ptr: ListNode;

  ptr = dummyLeft;
  for (const num of left) {
    ptr.next = new ListNode(num);
    ptr = ptr.next;
  }
  leftHead = dummyLeft.next;

  ptr = dummyRight;
  for (const num of right) {
    ptr.next = new ListNode(num);
    ptr = ptr.next;
  }
  rightHead = dummyRight.next;

  const dummy = new ListNode();
  ptr = dummy;

  while (leftHead !== null && rightHead !== null) {
    if (leftHead.val <= rightHead.val) {
      ptr.next = leftHead;
      leftHead = leftHead.next;
    } else {
      ptr.next = rightHead;
      rightHead = rightHead.next;
    }

    ptr = ptr.next;
  }

  ptr.next = leftHead === null ? rightHead : leftHead;

  let curr = dummy.next;
  while (curr !== null) {
    ans.push(curr.val);
    curr = curr.next;
  }
  return ans;
}
