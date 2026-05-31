type ExerciseCategory =
  | 'algorithm'
  | 'tsdoc'
  | 'type-errors'
  | 'lint'
  | 'formatting';

type AlgorithmTemplate = {
  category: 'algorithm';
  fileTemplate: (username: string) => string;
  testTemplate: (username: string) => string;
};

type TsDocTemplate = {
  category: 'tsdoc';
  fileTemplate: (username: string) => string;
};

type TypeErrorTemplate = {
  category: 'type-errors';
  fileTemplate: (username: string) => string;
};

type LintTemplate = {
  category: 'lint';
  fileTemplate: (username: string) => string;
};

type FormattingTemplate = {
  category: 'formatting';
  fileTemplate: (username: string) => string;
};

type ExerciseTemplate =
  | AlgorithmTemplate
  | TsDocTemplate
  | TypeErrorTemplate
  | LintTemplate
  | FormattingTemplate;

const algorithmTemplates: AlgorithmTemplate[] = [
  {
    category: 'algorithm',
    fileTemplate: username => `/**
 * Exercise 1: ${username} must implement a small algorithm and add tests for it.
 *
 * Goal: merge two sorted arrays into a new sorted array without mutating either input.
 */

/**
 * Combines two ascending arrays into one ascending array.
 *
 * @param left The first sorted list.
 * @param right The second sorted list.
 * @returns A new sorted list containing the values from both inputs.
 */
export function mergeSortedNumbers(left: number[], right: number[]): number[] {
  throw new Error("TODO: implement mergeSortedNumbers");
}
`,
    testTemplate: username => `/**
 * Exercise 1 test scaffold.
 *
 * Full instructions: ../../../wiki/exercises/01-algorithms-and-testing.md
 */

import { describe, it } from "vitest";

import { mergeSortedNumbers } from "../../onboarding/${username}/01-algorithm.ts";

/**
 * Exercise 1 tests for ${username}.
 */
describe("mergeSortedNumbers", () => {
  it.todo("merges values from both arrays in ascending order");
  it.todo("returns a new array instead of mutating either input");
  it.todo("handles one empty array");
});
`,
  },
  {
    category: 'algorithm',
    fileTemplate: () => `/**
 * Exercise 1: implement the algorithm and write meaningful unit tests.
 */

/**
 * Counts the vowels in a phrase.
 *
 * @param phrase The text to inspect.
 * @returns The number of vowels found in the phrase.
 */
export function countVowels(phrase: string): number {
  throw new Error("TODO: implement countVowels");
}
`,
    testTemplate: username => `/**
 * Exercise 1 test scaffold.
 *
 * Full instructions: ../../../wiki/exercises/01-algorithms-and-testing.md
 */

import { describe, it } from "vitest";

import { countVowels } from "../../onboarding/${username}/01-algorithm.ts";

/**
 * Exercise 1 tests for the vowel counter.
 */
describe("countVowels", () => {
  it.todo("counts lowercase vowels");
  it.todo("counts uppercase vowels too");
  it.todo("returns zero when there are no vowels");
});
`,
  },
  {
    category: 'algorithm',
    fileTemplate: () => `/**
 * Exercise 1: implement the algorithm and back it up with unit tests.
 */

/**
 * Rotates an array to the right by a number of steps.
 *
 * @param values The source values.
 * @param steps The number of positions to rotate.
 * @returns A new array with the rotated values.
 */
export function rotateArray(values: number[], steps: number): number[] {
  throw new Error("TODO: implement rotateArray");
}
`,
    testTemplate: username => `/**
 * Exercise 1 test scaffold.
 *
 * Full instructions: ../../../wiki/exercises/01-algorithms-and-testing.md
 */

import { describe, it } from "vitest";

import { rotateArray } from "../../onboarding/${username}/01-algorithm.ts";

/**
 * Exercise 1 tests for the array rotation helper.
 */
describe("rotateArray", () => {
  it.todo("rotates values to the right");
  it.todo("supports steps larger than the array length");
  it.todo("does not mutate the original array");
});
`,
  },
];

const tsDocTemplates: TsDocTemplate[] = [
  {
    category: 'tsdoc',
    fileTemplate:
      username => `// Exercise 2: add complete TSDoc comments to the function below.

/**
 * TODO: Summarize what this function does.
 *
 * @param name TODO: describe this parameter.
 * @param team TODO: describe this parameter.
 * @returns TODO: describe the return value.
 */
export function buildWelcomeMessage(name: string, team: string): string {
  return \`Welcome to \${team}, \${name}! Signed in as ${username}.\`;
}
`,
  },
  {
    category: 'tsdoc',
    fileTemplate:
      () => `// Exercise 2: replace the placeholder TSDoc with complete documentation.

/**
 * TODO: explain the purpose of this function.
 *
 * @param numbers TODO: describe the input collection.
 * @returns TODO: describe the grouped output.
 */
export function groupByParity(numbers: number[]): { even: number[]; odd: number[] } {
  return numbers.reduce(
    (groups, value) => {
      if (value % 2 === 0) {
        groups.even.push(value);
      } else {
        groups.odd.push(value);
      }

      return groups;
    },
    { even: [], odd: [] } satisfies { even: number[]; odd: number[] },
  );
}
`,
  },
  {
    category: 'tsdoc',
    fileTemplate:
      () => `// Exercise 2: replace the placeholder TSDoc with complete documentation.

/**
 * TODO: explain the intent of this helper.
 *
 * @param firstName TODO: describe the first name input.
 * @param lastName TODO: describe the last name input.
 * @returns TODO: describe the formatted full name.
 */
export function formatFullName(firstName: string, lastName: string): string {
  return \`\${lastName}, \${firstName}\`;
}
`,
  },
];

const typeErrorTemplates: TypeErrorTemplate[] = [
  {
    category: 'type-errors',
    fileTemplate: () => `/**
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
  return \`\${member.name} pushed \${member.commits} commits this week.\`;
}

const newestMember: TeamMember = {
  name: "Avery",
  commits: "5",
};

formatTeamSummary(newestMember);
`,
  },
  {
    category: 'type-errors',
    fileTemplate: () => `/**
 * Exercise 3: fix the type errors in this file without changing the overall behavior.
 */

type ScoreEntry = {
  label: string;
  score: number;
};

/**
 * Returns the highest score entry.
 *
 * @param entries The scores to compare.
 * @returns The entry with the largest score.
 */
export function getHighestScore(entries: ScoreEntry[]): ScoreEntry {
  return entries.reduce((best, current) => (current.score > best.score ? current : best));
}

const scores: ScoreEntry[] = [
  { label: "docs", score: 4 },
  { label: "tests", score: "6" },
];

getHighestScore(scores);
`,
  },
  {
    category: 'type-errors',
    fileTemplate: () => `/**
 * Exercise 3: fix the type errors in this file without changing the overall behavior.
 */

type ReleaseStatus = "draft" | "review" | "published";

/**
 * Checks whether a release can be announced.
 *
 * @param status The current release status.
 * @returns True when the release can be announced.
 */
export function canAnnounceRelease(status: ReleaseStatus): boolean {
  return status === "published";
}

const currentStatus: ReleaseStatus = "ready";

canAnnounceRelease(currentStatus);
`,
  },
];

const lintTemplates: LintTemplate[] = [
  {
    category: 'lint',
    fileTemplate: () => `/**
 * Exercise 4: clean up the lint issues in this file.
 */

/**
 * Normalizes a repository name.
 *
 * @param repositoryName The raw repository name.
 * @returns The normalized repository name.
 */
export function normalizeRepositoryName(repositoryName: string): string {
  const unusedPrefix = "repo:";
  const metadata: any = { source: "manual" };

  return repositoryName.trim().toLowerCase() + metadata.source.slice(0, 0);
}
`,
  },
  {
    category: 'lint',
    fileTemplate: () => `/**
 * Exercise 4: clean up the lint issues in this file.
 */

/**
 * Builds a short onboarding note.
 *
 * @param name The developer name.
 * @returns A short note for the developer.
 */
export function buildOnboardingNote(name: string): string {
  const temporaryLabel = "new hire";
  const details: any = { suffix: "!" };

  return \`Hello, \${name}\${details.suffix}\`;
}
`,
  },
  {
    category: 'lint',
    fileTemplate: () => `/**
 * Exercise 4: clean up the lint issues in this file.
 */

/**
 * Formats a reviewer name.
 *
 * @param name The reviewer name.
 * @returns The formatted reviewer name.
 */
export function formatReviewer(name: string): string {
  const ignoredValue = 42;
  const record: any = { name };

  return record.name.trim();
}
`,
  },
];

const formattingTemplates: FormattingTemplate[] = [
  {
    category: 'formatting',
    fileTemplate: () => `/**
 * Exercise 5: reformat this file so it matches the project's normal style.
 */

/**
 * Converts checklist items into a single line.
 *
 * @param items The checklist items to format.
 * @returns The formatted checklist string.
 */
export function formatChecklist(items:string[]):string{
return items
.map((item)=>item.trim())
.filter((item)=>item.length>0)
.join(" -> ")
}
`,
  },
  {
    category: 'formatting',
    fileTemplate: () => `/**
 * Exercise 5: reformat this file so it matches the project's normal style.
 */

/**
 * Sorts team names alphabetically.
 *
 * @param teams The names to sort.
 * @returns A new sorted array.
 */
export function sortTeams(teams:string[]):string[]{return [...teams].sort((left,right)=>left.localeCompare(right))}
`,
  },
  {
    category: 'formatting',
    fileTemplate: () => `/**
 * Exercise 5: reformat this file so it matches the project's normal style.
 */

/**
 * Builds release labels from names.
 *
 * @param names The source names.
 * @returns A formatted list of labels.
 */
export function buildReleaseLabels(names:string[]):string[]{
const cleaned=names.map((name)=>name.trim()).filter(Boolean)
return cleaned.map((name,index)=>\`\${index + 1}. \${name.toUpperCase()}\`)
}
`,
  },
];

const templates: Record<ExerciseCategory, ExerciseTemplate[]> = {
  algorithm: algorithmTemplates,
  tsdoc: tsDocTemplates,
  'type-errors': typeErrorTemplates,
  lint: lintTemplates,
  formatting: formattingTemplates,
};

const EXERCISE_GUIDE_PATHS: Record<ExerciseCategory, string> = {
  algorithm: '../../../wiki/exercises/01-algorithms-and-testing.md',
  tsdoc: '../../../wiki/exercises/02-writing-tsdoc-comments.md',
  'type-errors': '../../../wiki/exercises/03-fixing-type-errors.md',
  lint: '../../../wiki/exercises/04-fixing-linting-issues.md',
  formatting: '../../../wiki/exercises/05-fixing-formatting.md',
};

export function pickExerciseTemplate<TCategory extends ExerciseCategory>(
  category: TCategory,
): Extract<ExerciseTemplate, { category: TCategory }> {
  const choices = templates[category] as Extract<
    ExerciseTemplate,
    { category: TCategory }
  >[];
  const index = Math.floor(Math.random() * choices.length);
  return choices[index]!;
}

export function buildAlgorithmExercise(
  template: AlgorithmTemplate,
  username: string,
): string {
  return `${buildExerciseHeader('Algorithm and testing', EXERCISE_GUIDE_PATHS.algorithm, username)}${template.fileTemplate(username)}`;
}

export function buildTsDocExercise(
  template: TsDocTemplate,
  username: string,
): string {
  return `${buildExerciseHeader('TSDoc', EXERCISE_GUIDE_PATHS.tsdoc, username)}${template.fileTemplate(username)}`;
}

export function buildTypeErrorExercise(
  template: TypeErrorTemplate,
  username: string,
): string {
  return `${buildExerciseHeader('Type errors', EXERCISE_GUIDE_PATHS['type-errors'], username)}${template.fileTemplate(username)}`;
}

export function buildLintExercise(
  template: LintTemplate,
  username: string,
): string {
  return `${buildExerciseHeader('Lint', EXERCISE_GUIDE_PATHS.lint, username)}${template.fileTemplate(username)}`;
}

export function buildFormattingExercise(
  template: FormattingTemplate,
  username: string,
): string {
  return `${buildExerciseHeader('Formatting', EXERCISE_GUIDE_PATHS.formatting, username)}${template.fileTemplate(username)}`;
}

function buildExerciseHeader(
  exerciseName: string,
  guidePath: string,
  username: string,
): string {
  return `/**\n * Exercise: ${exerciseName}\n * Developer: ${username}\n * Instructions: ${guidePath}\n */\n\n`;
}
