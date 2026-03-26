# markdownlint-cli2-action

> A GitHub Action to run the [`markdownlint-cli2`][markdownlint-cli2] tool for
linting [Markdown][markdown]/[CommonMark][commonmark] files with
[`markdownlint`][markdownlint]

`markdownlint-cli2` has extensive support for configuring options and disabling
or customizing `markdownlint` rules. See the
[`markdownlint-cli2` README][markdownlint-cli2] for more information.
`markdownlint` includes a wide variety of rules for analyzing and improving
Markdown content. See the [`markdownlint` README][markdownlint] for more
information.

## Inputs

### config (optional)

Path of a file to use for the base configuration object (defaults to none)

Equivalent to using the `--config` [command-line option][command-line] and
passing the specified configuration file.

### configPointer (optional)

[JSON Pointer][json-pointer] to a configuration object within the `--config`
file (defaults to none)

Equivalent to using the `--configPointer` [command-line option][command-line]
and passing the specified JSON Pointer.

### fix (optional)

Whether to fix supported issues automatically (any truthy value enables)

Equivalent to specifying the `--fix` [command-line option][command-line].

### globs (optional)

Glob expression(s) of files to lint (newline-delimited by default)

The default `*.{md,markdown}` lints all Markdown files in the base directory of
a project.

For more detail: [glob syntax in `markdownlint-cli2`][glob-syntax].

### separator (optional)

String to use as a separator for the `globs` input (defaults to newline)

Allows the `globs` input to use something other than `\n` to separate glob
expressions.

## Outputs

[None]

## Examples

To lint Markdown files in the base directory of a project:

```yaml
- uses: DavidAnson/markdownlint-cli2-action@v23
```

To lint all Markdown files in a project:

```yaml
- uses: DavidAnson/markdownlint-cli2-action@v23
  with:
    globs: '**/*.md'
```

To lint specific Markdown files in a project:

```yaml
- uses: DavidAnson/markdownlint-cli2-action@v23
  with:
    globs: |
      README.md
      CHANGELOG.md
      docs/*.md
```

To use a custom separator:

```yaml
- uses: DavidAnson/markdownlint-cli2-action@v23
  with:
    globs: 'README.md,CHANGELOG.md,docs/*.md'
    separator: ','
```

To fix supported issues when linting:

```yaml
- uses: DavidAnson/markdownlint-cli2-action@v23
  with:
    fix: true
    globs: '**/*.md'
```

To specify a custom configuration file:

```yaml
- uses: DavidAnson/markdownlint-cli2-action@v23
  with:
    config: 'config/custom.markdownlint.jsonc'
    globs: '**/*.md'
```

To specify an embedded object in `package.json`:

```yaml
- uses: DavidAnson/markdownlint-cli2-action@v23
  with:
    config: 'package.json'
    configPointer: '/markdownlint-cli2'
    globs: '**/*.md'
```

To specify an embedded object in `pyproject.toml`:

```yaml
- uses: DavidAnson/markdownlint-cli2-action@v23
  with:
    config: 'pyproject.toml'
    configPointer: '/tool/markdownlint-cli2'
    globs: '**/*.md'
```

To prevent linting issues from failing the workflow run:

```yaml
- uses: DavidAnson/markdownlint-cli2-action@v23
  continue-on-error: true
```

See [`example.yml`][example-yml] for a simple GitHub workflow that uses
`markdownlint-cli2-action`.

See [`changed.yml`][changed-yml] for a GitHub workflow that lints only the
Markdown files that changed in the most recent commit (useful for Pull Requests
and/or gradually introducing linting rules to a new repository).

[changed-yml]: .github/workflows/changed.yml
[command-line]: https://github.com/DavidAnson/markdownlint-cli2#command-line
[commonmark]: https://commonmark.org/
[example-yml]: .github/workflows/example.yml
[glob-syntax]: https://github.com/DavidAnson/markdownlint-cli2#use
[json-pointer]: https://datatracker.ietf.org/doc/html/rfc6901
[markdown]: https://wikipedia.org/wiki/Markdown
[markdownlint]: https://github.com/DavidAnson/markdownlint
[markdownlint-cli2]: https://github.com/DavidAnson/markdownlint-cli2
