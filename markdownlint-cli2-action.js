// @ts-check

"use strict";

const core = require("@actions/core");
// const github = require("@actions/github");
const { "main": markdownlintCli2 } = require("markdownlint-cli2");

const logMessage = core.info;
const logError = core.error;
markdownlintCli2({
  "argv": [],
  logMessage,
  logError
}).then(
  (exitCode) => exitCode && core.setFailed(`Failed with exit code: ${exitCode}`),
  (reason) => core.setFailed(`Failed due to reason: ${reason}`)
);
