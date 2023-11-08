// @ts-check

"use strict";

const core = require("@actions/core");
const {"main": markdownlintCli2} = require("markdownlint-cli2");

const logMessage = core.info;
const outputFormatter = (options) => {
  const {results} = options;
  for (const lintError of results) {
    const {
      errorContext,
      errorDetail,
      errorRange,
      fileName,
      lineNumber,
      ruleDescription,
      ruleInformation,
      ruleNames
    } = lintError;
    const line = `:${lineNumber}`;
    const column = errorRange ? `:${errorRange[0]}` : "";
    const name = ruleNames.join("/");
    const detail = errorDetail ? ` [${errorDetail}]` : "";
    const context = errorContext ? ` [Context: "${errorContext}"]` : "";
    const information = ruleInformation ? ` ${ruleInformation}` : "";
    const message =
      `${fileName}${line}${column} ${name} ${ruleDescription}${detail}${context}${information}`;
    const annotation = {
      "title": ruleDescription,
      "file": fileName,
      "startLine": lineNumber,
      "endLine": lineNumber
    };
    if (errorRange) {
      const [
        errorColumn,
        errorLength
      ] = errorRange;
      annotation.startColumn = errorColumn;
      annotation.endColumn = errorColumn + errorLength - 1;
    }
    core.error(message, annotation);
  }
};

const separator = core.getInput("separator") || "\n";
const argv =
  core.getInput("globs").
    split(separator).
    filter(String);

const config = core.getInput("config");
if (config) {
  argv.push("--config", config);
}
const fix = Boolean(core.getInput("fix"));
if (fix) {
  argv.push("--fix");
}

let invoke = true;
const command = core.getInput("command");
switch (command) {
case "":
  // Default behavior
  break;
case "config":
  argv.unshift("--config");
  break;
case "fix":
  argv.unshift("--fix");
  break;
default:
  core.setFailed(`Unsupported command: ${command}`);
  invoke = false;
  break;
}

if (invoke) {
  const parameters = {
    argv,
    logMessage,
    "optionsOverride": {
      "outputFormatters": [[outputFormatter]]
    }
  };
  markdownlintCli2(parameters).then(
    (code) => code && core.setFailed(`Failed with exit code: ${code}`),
    (error) => core.setFailed(`Failed due to error: ${error}`)
  );
}
