# Project Overview

Let's open this project in the code editor we recommend,
[VSCode](https://code.visualstudio.com/), so we can examine the project
structure. Projects will vary somewhat in terms of how they are organized, but
this repository mirrors a lot of the tools and workflows that show up across
our TypeScript projects.

Open a terminal and navigate into the root directory of this project. Execute
the following command:

```
code .
```

This will open this project in VSCode.

## Project Structure

When you open the project, you will see a directory structure that looks
something like this:

```
.
├── src/
│   ├── __test__/
│   │   └── onboarding/
│   ├── onboarding/
│   ├── scripts/
│   │   └── onboard.ts
│   └── templates/
│       └── onboarding.ts
├── docs/
│   ├── exercises
│   ├── getting-started
│   └── prerequisites
├── .gitignore
├── .npmrc
├── package-lock.json
├── package.json
├── README.md
├── vitest.config.ts
└── tsconfig.json
```

Let's begin by looking at each item in the root directory.

## Files

### .gitignore

This file includes a list of files and directories that should not be committed
to source control. In this repo, it keeps generated folders like `node_modules/`
and coverage output out of source control.

### .npmrc

A configuration file for npm. In this project, you will find a minimal example
with only `min-release-age` set.

### package-lock.json

Contains a comprehensive list of all the packages upon which the project depends,
with exact version numbers. The `npm ci` command, which we use to install
dependencies in our CI/CD pipelines, uses this file as an authoritative list
of packages to download. We do not typically edit this file manually.

### package.json

Contains project details such as name, version, author, and a list of
dependencies. The `npm install` command reads dependencies from this file.

### README.md

A high-level overview of the project written in [markdown](https://en.wikipedia.org/wiki/Markdown). This is displayed on the project's landing page on Github.

### tsconfig.json

Contains configuration options for TypeScript.

### vitest.config.ts

Contains the Vitest configuration for this repo, including coverage collection.

## Directories

### src

The source code for the project. As part of onboarding, `npm run onboard`
creates your exercise files in `src/onboarding/<your-github-username>` and the
algorithm test scaffold in `src/__test__/onboarding/<your-github-username>`.

The generator itself lives in `src/scripts/onboard.ts`, and the randomized
exercise templates live in `src/templates/onboarding.ts`.

### docs

Markdown files that explain the onboarding flow. The `docs/exercises` pages
contain the instructions for the generated exercises.

## Next Up

Next Up: [03 - Project Setup](03-project-setup.md)
