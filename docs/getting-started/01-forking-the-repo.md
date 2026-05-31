# Forking Repositories

## 1. Creating a fork from Github

Developers usually contribute by creating a
[fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks)
of one of our repositories. Let's give it a try.

First, make sure you have a Github account and you are signed in. For more
information about creating a Github account, see
[Creating an acccount on Github](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github).

Visit https://github.com/8by8-org/onboarding and find the button towards the top
right of the screen that says "Fork." Click the dropdown arrow
to the right of this button and select "Create a new fork."

This will take you to a form that allows you to customize your fork. Click the
"Create fork" button to accept the default options and create your fork. Github
will create a fork of this repository under your account. Once the fork is
created, you will be redirected to it.

## 2. Enabling workflows in your fork

After your fork is created, open the "Actions" tab in your forked repository.
Github may show a banner asking you to enable workflows. Click the button to
enable workflows for the fork.

This is important because our onboarding process uses Github Actions checks
(`Test`, `Typecheck`, and `Lint`) on pushes and pull requests.

## 3. Cloning your fork

In order to make changes to your fork, you must clone it locally. From the
landing page for your fork on Github, click the "Code" button at the top right
of the screen.

With the "Local" tab selected, click on the "HTTPS" tab. Then click the
copy icon next to the URL you see.

On your computer, create a folder in which you would like to keep all of your
8by8 projects. Open a terminal and navigate into this folder.

Once inside this folder, type `git clone`, add a space, and paste the URL you
just copied. Press enter to execute the command.

This will create a new directory inside your 8by8 directory.

## 4. Creating a branch

When developing a new feature, it is highly recommended to work from a feature
branch. This keeps your development branch clean and makes it easy to sync your
fork with the upstream repository owned by 8by8.

Let's create our first feature branch. Open a terminal and navigate into the
directory you cloned in step 3. Execute the following command, replacing
`<your-username>` with your Github username.

```
git checkout -b onboard-<your-username>
```

For example, the author's username is `dvorakjt`, so he would execute

```
git checkout -b onboard-dvorakjt
```

This will create a new branch with the name `onboard-dvorakjt` and switch to
the newly created branch. The `-b` flag tells Git to create a new branch. The
branch name can be anything you like. We chose `onboard-<your-username>`
because this new branch will be all about onboarding YOU!

To verify the name of the branch that you're working from, execute the following
command:

```
git branch
```

In general, this is the procedure you will follow when working on our projects.

## Next Up

Next Up: [02 - Project Overview](02-project-overview.md)
