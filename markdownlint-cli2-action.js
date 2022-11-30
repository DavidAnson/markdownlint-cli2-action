// @ts-check

"use strict";

const core = require("@actions/core");
const {"main": markdownlintCli2} = require("markdownlint-cli2");

const logMessage = core.info;
const logError = (error) => {
  // eslint-disable-next-line init-declarations
  let annotation;
  const match = error.match(/^([^:]+):(\d+)(?::(\d+))?\s(\S+)\s(.+)$/u);
  if (match) {
    const [
      ,
      file,
      startLineString,
      startColumnString,
      ,
      title
    ] = match;
    const startLine = Number(startLineString);
    annotation = {
      title,
      file,
      startLine
    };
    if (startColumnString) {
      // @ts-ignore
      annotation.startColumn = Number(startColumnString);
    }
  }
  core.error(error, annotation);
};

const separator = core.getInput("separator") || "\n";
const argv =
  core.getInput("globs").
    split(separator).
    filter(String);

const parameters = {
  argv,
  logMessage,
  logError
};
let invoke = true;
const command = core.getInput("command");
switch (command) {
case "":
  // Default behavior
  break;
case "config":
  parameters.name = "markdownlint-cli2-config";
  break;
case "fix":
  parameters.name = "markdownlint-cli2-fix";
  parameters.fixDefault = true;
  break;
default:
  core.setFailed(`Unsupported command: ${command}`);
  invoke = false;
  break;
}

if (invoke) {
  markdownlintCli2(parameters).then(
    (code) => code && core.setFailed(`Failed with exit code: ${code}`),
    (error) => core.setFailed(`Failed due to error: ${error}`)
  );
}
