/**
 * Exercise: Type errors
 * Developer: Shreyas410
 * Instructions: ../../../docs/exercises/03-fixing-type-errors.md
 */

/**
 * Exercise 3: fix the type errors in this file without changing the overall behavior.
 */

type TeamMember = {
  name: string;
  commits: number;
};

/**
 * Formats a team activity summary.
 *
 * @param member The team member to summarize.
 * @returns A human-readable summary string.
 */
export function formatTeamSummary(member: TeamMember): string {
  return `${member.name} pushed ${member.commits} commits this week.`;
}

const newestMember: TeamMember = {
  name: "Avery",
  commits: 5,
};

formatTeamSummary(newestMember);
