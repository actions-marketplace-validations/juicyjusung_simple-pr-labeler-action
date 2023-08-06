# Simple PR Labeler Action 👥

This repository provides a **GitHub action** to automatically **labels** on a **pull request**

## Configuration

## Usage

Create a workflow (eg: `.github/workflows/labeler.yml` see [Creating a Workflow file](https://help.github.com/en/articles/configuring-a-workflow#creating-a-workflow-file)) to utilize the labeler action.
This action only needs the GITHUB_TOKEN secret as it interacts with the GitHub API to modify labels. It's working for pull request and issues. The action can be used as such:

```yaml
on:
  pull_request:
  issues:
name: PR Labeler
permissions:
  contents: read
  pull-requests: write
jobs:
  pr-labeler:
    runs-on: ubuntu-latest
    steps:
    - uses: juicyjusung/simple-pr-labeler-action@v1.0.0
      with:
        repo-token: "${{ secrets.GITHUB_TOKEN }}"
        labels: foo, bar
```

