# 01 - Making a PR

Once your onboarding changes are ready, the next step is to open a pull request
from your feature branch into the repository's `development` branch.

## Why We Use Pull Requests

We use branch protection and required checks so developers do not push directly
to protected branches. Instead, changes are reviewed in a pull request before
they are merged.

This gives us a few important safeguards:

- Automated checks run before the code is merged.
- Another developer reviews the changes.
- The repository history stays cleaner and easier to audit.

## CI/CD and Required Checks

This repo uses GitHub Actions to run validation on pushes and pull requests.
For your pull request to be eligible for merge, the required checks should pass:

- `Test`
- `Typecheck`
- `Lint`

These checks are defined in the workflow files under `.github/workflows/` and
help confirm that your code still builds and follows the expected standards.

## Opening the Pull Request

1. Push your feature branch to your fork on GitHub.
2. Open your fork in GitHub.
3. Start a pull request targeting the `development` branch of the upstream repo.
4. Confirm the branch comparison is correct before creating the PR.

## If Your Branch Is Behind Upstream

Sometimes GitHub will show that your branch is behind the upstream
`development` branch. When that happens, update your branch before asking for a
final review.

The exact steps depend on your preferred Git workflow, but the goal is the same:
bring the latest `development` changes into your feature branch, resolve any
conflicts, rerun your checks, and push the updated branch.

A common flow looks like this:

```bash
git checkout development
git pull
git checkout onboard-<your-username>
git merge development
```

If there are merge conflicts, resolve them, then rerun:

- `npm run test`
- `npm run typecheck`
- `npm run lint`

After that, push your updated feature branch and confirm the pull request is no
longer behind. The syncing guide covers the broader fork-sync process after a PR
has been merged.

## Filling Out the Pull Request Template

When you open the PR, GitHub will prefill the pull request template from
`.github/workflows/PULL_REQUEST_TEMPLATE.md`.

Complete each section carefully:

- Work through the checklist.
- Fill in the overview with a clear summary of what changed.
- Fill in the test plan with the commands you ran and what you verified.

The template is there to make review easier and to ensure important validation
steps are not skipped.

## Requesting a Reviewer

After opening the PR, request a reviewer in GitHub.

The reviewer is responsible for:

- Reading through your changes.
- Leaving comments or requested changes when needed.
- Approving the PR when it is ready.
- Merging the PR after the review and required checks are complete.

## Done Looks Like

- The PR targets the correct branch.
- The pull request template is filled out.
- A reviewer has been requested.
- The `Test`, `Typecheck`, and `Lint` checks are passing.
- The reviewer merges the PR.

## Next Up

Next Up: [02 - Syncing Your Fork](02-syncing-your-fork.md)
