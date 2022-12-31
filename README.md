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

### command (optional)

Command to run (unset, `fix`, or `config`)

If unspecified or `""`, the `markdownlint-cli2` command is run.

If set to `fix`, the `markdownlint-cli2-fix` command is run and supported
issues will be fixed automatically.

If set to `config`, the `markdownlint-cli2-config` command is run and the
first element of `globs` should specify a supported configuration file.

For more detail: [documentation for `markdownlint-cli2`][command-line].

### globs (optional)

Glob expression(s) of files to lint (newline-delimited by default)

The default `*.{md,markdown}` lints all Markdown files in the base directory
of a project.

For more detail: [glob syntax in `markdownlint-cli2`][glob-syntax].

### separator (optional)

String to use as a separator for the `globs` input (defaults to newline)

Allows the `globs` input to use something other than `\n` to separate glob
expressions.

## Outputs

[Nope]

## Examples

To lint Markdown files in the base directory of a project:

```yaml
- uses: DavidAnson/markdownlint-cli2-action@v8
```

To lint all Markdown files in a project:

```yaml
- uses: DavidAnson/markdownlint-cli2-action@v8
  with:
    globs: '**/*.md'
```

To lint specific Markdown files in a project:

```yaml
- uses: DavidAnson/markdownlint-cli2-action@v8
  with:
    globs: |
      README.md
      CHANGELOG.md
      docs/*.md
```

To use a custom separator:

```yaml
- uses: DavidAnson/markdownlint-cli2-action@v8
  with:
    globs: 'README.md,CHANGELOG.md,docs/*.md'
    separator: ','
```

To fix supported issues when linting:

```yaml
- uses: DavidAnson/markdownlint-cli2-action@v8
  with:
    command: fix
    globs: '**/*.md'
```

To specify a custom configuration file:

```yaml
- uses: DavidAnson/markdownlint-cli2-action@v8
  with:
    command: config
    globs: |
      config/custom.markdownlint.jsonc
      **/*.md
```

To prevent linting issues from failing the workflow run:

```yaml
- uses: DavidAnson/markdownlint-cli2-action@v8
  continue-on-error: true
```

See [`example.yml`][example-yml] for a simple GitHub workflow that uses
`markdownlint-cli2-action`.

See [`changed.yml`][changed-yml] for a GitHub workflow that lints only the
Markdown files that changed in the most recent commit (useful for Pull
Requests and/or gradually introducing linting rules to a new repository).

[changed-yml]: .github/workflows/changed.yml
[command-line]: https://github.com/DavidAnson/markdownlint-cli2#command-line
[commonmark]: https://commonmark.org/
[example-yml]: .github/workflows/example.yml
[glob-syntax]: https://github.com/DavidAnson/markdownlint-cli2#use
[markdown]: https://wikipedia.org/wiki/Markdown
[markdownlint]: https://github.com/DavidAnson/markdownlint
[markdownlint-cli2]: https://github.com/DavidAnson/markdownlint-cli2
