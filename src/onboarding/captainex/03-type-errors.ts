/**
 * Exercise: Type errors
 * Developer: captainex
 * Instructions: ../../../docs/exercises/03-fixing-type-errors.md
 */

/**
 * Exercise 3: fix the type errors in this file without changing the overall behavior.
 */

type ReleaseStatus = 'draft' | 'review' | 'published';

/**
 * Checks whether a release can be announced.
 *
 * @param status The current release status.
 * @returns True when the release can be announced.
 */
export function canAnnounceRelease(status: ReleaseStatus): boolean {
  return status === 'published';
}

// Intentional type error for this exercise.
const currentStatus: ReleaseStatus = 'review';

canAnnounceRelease(currentStatus);
