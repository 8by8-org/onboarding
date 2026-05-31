# 02 - Syncing Your Fork

After your pull request has been merged, clean up your branch and sync your fork
so your next round of work starts from a fresh, up-to-date base.

## Why This Matters

Keeping your fork in sync makes it easier to:

- Start new work from the latest shared code.
- Avoid carrying old branches longer than necessary.
- Reduce merge conflicts later.

## Delete the Feature Branch

After the PR is merged, delete the feature branch on GitHub and remove it from
your local clone when you no longer need it.

To delete the local branch after switching away from it:

```bash
git checkout development
git branch -d onboard-<your-username>
```

## Update Your Fork on GitHub

If GitHub shows that your fork is behind the upstream repository, sync it so the
`development` branch on your fork matches the current upstream branch.

You can do this through the GitHub UI or by pushing the latest upstream changes
from your local clone after you fetch them.

## Update Your Local Clone

Once your fork is current on GitHub, update your local copy as well:

```bash
git checkout development
git pull
```

If you have configured an `upstream` remote for the 8by8 repository, you can
also fetch and integrate changes from upstream first, then update your fork.

## Done Looks Like

- The merged feature branch has been deleted.
- Your fork's `development` branch is up to date on GitHub.
- Your local clone is updated and ready for the next branch.

## Next Up

Next Up: [Git](../prerequisites/git.md)
