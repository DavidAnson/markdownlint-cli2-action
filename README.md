# markdownlint-cli2-action

A GitHub Action to run the [`markdownlint-cli2`][markdownlint-cli2] tool
for linting [Markdown][markdown]/[CommonMark][commonmark] files with
[`markdownlint`][markdownlint]

## Inputs

### globs (optional)

Glob expression(s) of files to lint (newline-delimited)

The default `*.{md,markdown}` lints all Markdown files in the base directory
of a project

## Outputs

[None]

## Examples

To lint Markdown files in the base directory of a project:

```yaml
- uses: DavidAnson/markdownlint-cli2-action@v1
```

To lint all Markdown files in a project:

```yaml
- uses: DavidAnson/markdownlint-cli2-action@v1
  with:
    globs: **/*.md
```

To lint specific Markdown files in a project:

```yaml
- uses: DavidAnson/markdownlint-cli2-action@v1
  with:
    globs: |
      README.md
      CHANGELOG.md
      docs/*.md
```

[commonmark]: https://commonmark.org/
[markdown]: https://wikipedia.org/wiki/Markdown
[markdownlint]: https://github.com/DavidAnson/markdownlint
[markdownlint-cli2]: https://github.com/DavidAnson/markdownlint-cli2
