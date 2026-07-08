/**
 * Exercise: TSDoc
 * Developer: auleenadas
 * Instructions: ../../../docs/exercises/02-writing-tsdoc-comments.md
 */

// Exercise 2: replace the placeholder TSDoc with complete documentation.

/**
 * Formats a person's first and last name into a single display string,
 * with the last name listed first, followed by the first name.
 *
 * @param firstName The person's first name.
 * @param lastName The person's last name.
 * @returns The formatted full name in "lastName, firstName" order.
 */

export function formatFullName(firstName: string, lastName: string): string {
  return `${lastName}, ${firstName}`;
}
