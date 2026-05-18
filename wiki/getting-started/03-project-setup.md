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

| Command                        | Effect                                                    |
|--------------------------------|-----------------------------------------------------------|
| `npm run format`               | Formats the code with Prettier                            |
| `npm run lint`                 | Lints the code with ESLint                                |
| `npm run test` (or `npm test`) | Tests the code with Vitest                                |
| `npm run check-types`          | Verifies that there are no TypeScript compilation errors. |
| `npm run storybook`            | Runs Storybook.                                           |
| `npm run onboard`              | Creates a few new files and directories for you to use.   |

You will see these commands (or very similar) in most of our projects, with the 
exception of `npm run onboard`, which is specific to this project.

In a terminal, let's execute the following command, replacing <your-username> 
with your Github username:

```
npm run onboard --developer=<your-username>
```

This will create a new folder in `src/exercises` where you can author code.




