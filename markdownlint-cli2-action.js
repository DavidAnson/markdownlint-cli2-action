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
      startLine,
      startColumn,
      ,
      title
    ] = match;
    annotation = {
      title,
      file,
      startLine,
      startColumn
    };
  }
  core.error(error, annotation);
};
const argv =
  core.getInput("globs").
    split("\n").
    filter((glob) => String(glob));

markdownlintCli2({
  argv,
  logMessage,
  logError
}).then(
  (code) => code && core.setFailed(`Failed with exit code: ${code}`),
  (error) => core.setFailed(`Failed due to error: ${error}`)
);
