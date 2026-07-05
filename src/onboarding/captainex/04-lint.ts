/**
 * Exercise: Lint
 * Developer: captainex
 * Instructions: ../../../docs/exercises/04-fixing-linting-issues.md
 */
interface onboardingText {
  details: string;
}
/**
 * Exercise 4: clean up the lint issues in this file.
 */
//define types at the top of the file
//use Interface to define type on right of =
// OR create type after colon
/**
 * Builds a short onboarding note.
 *
 * @param name The developer name.
 * @returns A short note for the developer.
 */
export function buildOnboardingNote(name: onboardingText): string {
  const details = { suffix: '!' };

  return `Hello, ${name}${details.suffix}`;
}
