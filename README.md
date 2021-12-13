# markdownlint-cli2-action

> A GitHub Action to run the [`markdownlint-cli2`][markdownlint-cli2] tool
for linting [Markdown][markdown]/[CommonMark][commonmark] files with
[`markdownlint`][markdownlint]

`markdownlint-cli2` has extensive support for configuring options and
disabling or customizing `markdownlint` rules. See the
[`markdownlint-cli2` README][markdownlint-cli2] for more information.
`markdownlint` includes a wide variety of rules for analyzing and improving
Markdown content. See the [`markdownlint` README][markdownlint] for more
information.

## Inputs

### globs (optional)

Glob expression(s) of files to lint (newline-delimited)

The default `*.{md,markdown}` lints all Markdown files in the base directory
of a project.

For more detail, read about [glob syntax in `markdownlint-cli2`][glob-syntax].

## Outputs

[None]

## Examples

To lint Markdown files in the base directory of a project:

```yaml
- uses: DavidAnson/markdownlint-cli2-action@v4
```

To lint all Markdown files in a project:

```yaml
- uses: DavidAnson/markdownlint-cli2-action@v4
  with:
    globs: "**/*.md"
```

To lint specific Markdown files in a project:

```yaml
- uses: DavidAnson/markdownlint-cli2-action@v4
  with:
    globs: |
      README.md
      CHANGELOG.md
      docs/*.md
```

To prevent linting issues from failing the workflow run:

```yaml
- uses: DavidAnson/markdownlint-cli2-action@v4
  continue-on-error: true
```

See [`example.yml`][example-yml] for a simple GitHub workflow that uses
`markdownlint-cli2-action`.

[commonmark]: https://commonmark.org/
[example-yml]: .github/workflows/example.yml
[glob-syntax]: https://github.com/DavidAnson/markdownlint-cli2#use
[markdown]: https://wikipedia.org/wiki/Markdown
[markdownlint]: https://github.com/DavidAnson/markdownlint
[markdownlint-cli2]: https://github.com/DavidAnson/markdownlint-cli2
