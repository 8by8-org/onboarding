/**
 * Exercise: Lint
 * Developer: Shreyas410
 * Instructions: ../../../docs/exercises/04-fixing-linting-issues.md
 */

/**
 * Exercise 4: clean up the lint issues in this file.
 */

/**
 * Builds a short onboarding note.
 *
 * @param name The developer name.
 * @returns A short note for the developer.
 */
export function buildOnboardingNote(name: string): string {
  const details: { suffix: string } = { suffix: "!" };

  return `Hello, ${name}${details.suffix}`;
}
