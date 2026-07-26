/**
 * Exercise: Lint
 * Developer: nickhegde
 * Instructions: ../../../docs/exercises/04-fixing-linting-issues.md
 */

/**
 * Exercise 4: clean up the lint issues in this file.
 */

/**
 * Formats a reviewer name.
 *
 * @param name The reviewer name.
 * @returns The formatted reviewer name.
 */
export function formatReviewer(name: string): string {
  const record: { name: string } = { name };

  return record.name.trim();
}
