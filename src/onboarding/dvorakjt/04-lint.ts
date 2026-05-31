/**
 * Exercise: Lint
 * Developer: dvorakjt
 * Instructions: ../../../docs/exercises/04-fixing-linting-issues.md
 */

/**
 * Exercise 4: clean up the lint issues in this file.
 */

interface RepositoryMetadata {
  source: string;
}

/**
 * Normalizes a repository name.
 *
 * @param repositoryName The raw repository name.
 * @returns The normalized repository name.
 */
export function normalizeRepositoryName(repositoryName: string): string {
  const metadata: RepositoryMetadata = { source: 'manual' };
  return repositoryName.trim().toLowerCase() + metadata.source.slice(0, 0);
}
