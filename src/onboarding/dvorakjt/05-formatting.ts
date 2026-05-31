/**
 * Exercise: Formatting
 * Developer: dvorakjt
 * Instructions: ../../../docs/exercises/05-fixing-formatting.md
 */

/**
 * Exercise 5: reformat this file so it matches the project's normal style.
 */

/**
 * Builds release labels from names.
 *
 * @param names The source names.
 * @returns A formatted list of labels.
 */
export function buildReleaseLabels(names: string[]): string[] {
  const cleaned = names.map(name => name.trim()).filter(Boolean);
  return cleaned.map((name, index) => `${index + 1}. ${name.toUpperCase()}`);
}
