// @ts-check

"use strict";

const core = require("@actions/core");
const {"main": markdownlintCli2} = require("markdownlint-cli2");

const logMessage = core.info;
const logError = core.error;
const argv =
  core.getInput("globs").
    split("\n").
    filter(String);

markdownlintCli2({
  argv,
  logMessage,
  logError
}).then(
  (code) => code && core.setFailed(`Failed with exit code: ${code}`),
  (error) => core.setFailed(`Failed due to error: ${error}`)
);
