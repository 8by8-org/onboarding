/**
 * Exercise: Type errors
 * Developer: nickhegde
 * Instructions: ../../../docs/exercises/03-fixing-type-errors.md
 */

/**
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
  return entries.reduce((best, current) =>
    current.score > best.score ? current : best,
  );
}

const scores: ScoreEntry[] = [
  { label: 'docs', score: 4 },
  // Intentional type error for this exercise.
  { label: 'tests', score: 6 },
];

getHighestScore(scores);
