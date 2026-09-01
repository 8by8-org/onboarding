/**
 * Exercise: TSDoc
 * Developer: Shreyas410
 * Instructions: ../../../docs/exercises/02-writing-tsdoc-comments.md
 */

// Exercise 2: add complete TSDoc comments to the function below.

/**
 * Builds a welcome message for a person joining a team.
 *
 * @param name The person's name.
 * @param team The name of the team they are joining.
 * @returns A welcome message containing the person's name and team.
 */
export function buildWelcomeMessage(name: string, team: string): string {
  return `Welcome to ${team}, ${name}! Signed in as Shreyas410.`;
}
