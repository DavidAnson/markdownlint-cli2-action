// @ts-check

/** @type {import("markdownlint").Rule} */
module.exports = {
  "names": [ "custom-rule-markdown-it" ],
  "description": "Custom rule using markdown-it",
  "tags": [ "test" ],
  "parser": "markdownit",
  "function": (params, onError) => {
    if (params.config.error) {
      onError({ "lineNumber": 1 });
    }
  }
}
