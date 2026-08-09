/**
 * Exercise: Formatting
 * Developer: captainex
 * Instructions: ../../../docs/exercises/05-fixing-formatting.md
 */

/**
 * Exercise 5: reformat this file so it matches the project's normal style.
 */

/**
 * Converts checklist items into a single line.
 *
 * @param items The checklist items to format.
 * @returns The formatted checklist string.
 */
export function formatChecklist(items: string[]): string {
  return items
    .map(item => item.trim())
    .filter(item => item.length > 0)
    .join(' -> ');
}
