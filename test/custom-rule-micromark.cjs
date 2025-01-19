// @ts-check

/** @type {import("markdownlint").Rule} */
module.exports = {
  "names": [ "custom-rule-micromark" ],
  "description": "Custom rule using micromark",
  "tags": [ "test" ],
  "parser": "micromark",
  "function": (params, onError) => {
    if (params.config.error) {
      onError({ "lineNumber": 1 });
    }
  }
}
