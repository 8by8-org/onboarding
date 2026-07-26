/**
 * Exercise: TSDoc
 * Developer: nickhegde
 * Instructions: ../../../docs/exercises/02-writing-tsdoc-comments.md
 */

// Exercise 2: replace the placeholder TSDoc with complete documentation.

/**
 * Formats a full name in the "Last, First" format.
 *
 * @param firstName The first name.
 * @param lastName The last name.
 * @returns The full name formatted as "Last, First".
 */
export function formatFullName(firstName: string, lastName: string): string {
  return `${lastName}, ${firstName}`;
}
