/**
 * Exercise: Formatting
 * Developer: Shawnhec
 * Instructions: ../../../docs/exercises/05-fixing-formatting.md
 */

/**
 * Exercise 5: reformat this file so it matches the project's normal style.
 */

/**
 * Sorts team names alphabetically.
 *
 * @param teams The names to sort.
 * @returns A new sorted array.
 */
export function sortTeams(teams: string[]): string[] {
  return [...teams].sort((left, right) => left.localeCompare(right));
}
