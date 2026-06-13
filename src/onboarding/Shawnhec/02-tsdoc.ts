/**
 * Exercise: TSDoc
 * Developer: Shawnhec
 * Instructions: ../../../docs/exercises/02-writing-tsdoc-comments.md
 */

// Exercise 2: add complete TSDoc comments to the function below.

/**
 * Generate a personalized team welcome message appended with an active sign-in status for Shawnhec
 *
 * @param name User name shows in welcome message.
 * @param team Team name shows in welcome message.
 * @returns A welcome message according to the inputs.
 */
export function buildWelcomeMessage(name: string, team: string): string {
  return `Welcome to ${team}, ${name}! Signed in as Shawnhec.`;
}
