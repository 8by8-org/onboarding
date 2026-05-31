import fs from 'node:fs';
import path from 'node:path';

import {
  buildAlgorithmExercise,
  buildFormattingExercise,
  buildLintExercise,
  buildTsDocExercise,
  buildTypeErrorExercise,
  pickExerciseTemplate,
} from '../templates/onboarding.ts';

const PATH_TO_ONBOARDING = path.join(import.meta.dirname, '../onboarding');
const PATH_TO_TESTS = path.join(import.meta.dirname, '../__test__/onboarding');

type ExerciseFile = {
  fileName: string;
  content: string;
};

function main(): void {
  const username = process.argv[2]?.trim();

  if (!username) {
    throw new Error(
      'Please provide a GitHub username. Example: npm run onboard octocat',
    );
  }

  const onboardingDirectory = path.join(PATH_TO_ONBOARDING, username);
  const testDirectory = path.join(PATH_TO_TESTS, username);

  ensureDirectoryDoesNotExist(onboardingDirectory, 'exercise');
  ensureDirectoryDoesNotExist(testDirectory, 'test');

  fs.mkdirSync(onboardingDirectory, { recursive: true });
  fs.mkdirSync(testDirectory, { recursive: true });

  const algorithmTemplate = pickExerciseTemplate('algorithm');
  const tsDocTemplate = pickExerciseTemplate('tsdoc');
  const typeErrorTemplate = pickExerciseTemplate('type-errors');
  const lintTemplate = pickExerciseTemplate('lint');
  const formattingTemplate = pickExerciseTemplate('formatting');

  const exerciseFiles: ExerciseFile[] = [
    {
      fileName: '01-algorithm.ts',
      content: buildAlgorithmExercise(algorithmTemplate, username),
    },
    {
      fileName: '02-tsdoc.ts',
      content: buildTsDocExercise(tsDocTemplate, username),
    },
    {
      fileName: '03-type-errors.ts',
      content: buildTypeErrorExercise(typeErrorTemplate, username),
    },
    {
      fileName: '04-lint.ts',
      content: buildLintExercise(lintTemplate, username),
    },
    {
      fileName: '05-formatting.ts',
      content: buildFormattingExercise(formattingTemplate, username),
    },
  ];

  for (const file of exerciseFiles) {
    fs.writeFileSync(
      path.join(onboardingDirectory, file.fileName),
      file.content,
      'utf8',
    );
  }

  fs.writeFileSync(
    path.join(testDirectory, '01-algorithm.test.ts'),
    algorithmTemplate.testTemplate(username),
    'utf8',
  );

  console.log(`Created onboarding exercises for ${username}`);
}

function ensureDirectoryDoesNotExist(
  directoryPath: string,
  label: string,
): void {
  if (fs.existsSync(directoryPath)) {
    throw new Error(`The ${label} directory already exists: ${directoryPath}`);
  }
}

main();
