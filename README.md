# Release Notes generator

GitHub Actions step to generate an automatic release note based on the PR's merged since the last release

## How it works

This step is based on some definitions that you must follow in your workflow:

- Pull request title need to be in this format
  `[TYPE][JIRA-TASK] Description`
  Eg: `[FEATURE][TEAM-123] Some new feature`
- Every release must be registered on its GitHub repository
- Every version must have a Git TAG indicating it

Once triggered, this step will proceed with:

1. Detect the last release made in the repository and extract its version
2. Retrieve the SHA id for the TAG commit of this version
3. Retrieve the SHA id for the TAG commit of the version to be published
4. Get all Pull Requests merged between these two commits
5. Parse their PR titles
6. Produce a report with the tasks

## How to use

The recommended way to use this step is to put it in a workflow triggered when you are closing a release. Besides the rules mentioned above, it must run **AFTER** the release version is tagged on the repo.

### Inputs

- **release_version**: Define the version that is being published now. Must be informed without the prefix. (Required)
- **tag_prefix**: Indicates whether your tag names have a prefix like "v" in _v6.3.2_. (Optional) (Default: "")
- **reporter_mode**: Define how the output must be formatted. Possible values are MARKDOWN, HTML, and TEXT. (Optional) (Default: "MARKDOWN")

### Outputs

- **notes**: The formatted release notes produced by the step
