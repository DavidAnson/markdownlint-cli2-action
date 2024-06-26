# Contributing

Interested in contributing? Great! Here are some suggestions to make it a good
experience:

Start by [opening an issue][github-issues], whether to identify a problem or
suggest a change. That issue should be used to discuss the situation and agree
on a plan of action before writing code or sending a pull request. Maybe the
problem isn't really a problem, or maybe there are other things to consider. If
so, it's best to realize that before spending time and effort writing code that
may not get used.

Match the coding style of the files you edit. Although everyone has their own
preferences and opinions, a pull request is not the right forum to debate them.

Package versions for `dependencies` and `devDependencies` should be specified
exactly (also known as "pinning"). The short explanation is that doing otherwise
eventually leads to inconsistent behavior and broken functionality. (See [Why I
pin dependency versions in Node.js packages][version-pinning] for a longer
explanation.)

Add tests for all new/changed functionality. Test positive and negative
scenarios. Try to break the code now, or else it will get broken later.

Run local tests via `npm test`. Lint by running `npm run lint`. The best way to
test GitHub Actions is via Workflows, so create a (draft) PR to see your changes
in action.

Pull requests should contain a single commit that addresses a single issue.

Open pull requests against the `main` branch. Include the text "(fixes #??)." at
the end of the commit message so it will be associated with the corresponding
issue. (See [the GitHub documentation][linking-pull-request] for details.)

Please refrain from using slang or meaningless placeholder words. Sample content
can be "text", "code", "heading", or the like. Sample URLs should use
[example.com][example-com] which is safe for this purpose. Profanity is not
allowed.

In order to maintain the permissive MIT license this project uses, all
contributions must be your own and released under that license. Code you add
should be an original work and should not be copied from elsewhere. Taking code
from a different project, Stack Overflow, or the like is not allowed. The use of
tools such as GitHub Copilot, ChatGPT, LLMs (large language models), etc. that
incorporate code from other projects is not allowed.

Thank you!

[example-com]: https://en.wikipedia.org/wiki/Example.com
[github-issues]: https://github.com/DavidAnson/markdownlint-cli2/issues
[linking-pull-request]: https://docs.github.com/en/github/managing-your-work-on-github/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword
[version-pinning]: https://dlaa.me/blog/post/versionpinning
