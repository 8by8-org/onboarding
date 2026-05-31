# Project Setup

Let's get this project set up so you can begin developing!

## 1. Installing Dependencies

With the project open in VSCode, open a new terminal. You can do this by
selecting Terminal > New Terminal from the menu bar, or pressing
`Ctrl` + `Shift` + `` ` ``.

In the new terminal, run the command

```
npm install
```

This will install all of the node modules that this project depends upon.

## 2. Executing Scripts

In `package.json`, you can find the `scripts` property, which contains a
nested object defining custom scripts that can be executed with the `npm run`
command.

In this project, you can execute the following scripts:

| Command                        | Effect                                                   |
| ------------------------------ | -------------------------------------------------------- |
| `npm run format`               | Formats the repo with Prettier                           |
| `npm run lint`                 | Lints the repo with ESLint                               |
| `npm run test` (or `npm test`) | Runs Vitest and collects coverage                        |
| `npm run typecheck`            | Verifies that there are no TypeScript compilation errors |
| `npm run onboard`              | Creates your onboarding exercises                        |

You will see these commands (or very similar) in most of our projects, with the
exception of `npm run onboard`, which is specific to this project.

In a terminal, let's execute the following command, replacing <your-username>
with your Github username:

```
npm run onboard <your-username>
```

This will create a new folder in `src/onboarding/<your-username>` plus a
matching folder in `src/__test__/onboarding/<your-username>`.

The generated files are:

- `01-algorithm.ts`
- `02-tsdoc.ts`
- `03-type-errors.ts`
- `04-lint.ts`
- `05-formatting.ts`
- `01-algorithm.test.ts`

Each generated file points to the matching page under `wiki/exercises`.
Use those markdown guides as the source of truth for what to do next and which
npm scripts to run for each exercise.

## Next Up

Next Up: [01 - Algorithms and Testing](../exercises/01-algorithms-and-testing.md)
