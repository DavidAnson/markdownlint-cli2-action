// @ts-check

"use strict";

const core = require("@actions/core");
const { "main": markdownlintCli2 } = require("markdownlint-cli2");
const fs = require("node:fs");
const path = require("node:path");

const logMessage = core.info;
const outputFormatter = (options) => {
  const { results } = options;
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
    const detail = errorDetail ? `[${errorDetail}]` : "";
    const context = errorContext ? `[Context: "${errorContext}"]` : "";
    const information = ruleInformation ? `${ruleInformation}` : "";
    const repository = process.env.GITHUB_REPOSITORY;
    const headRef = process.env.GITHUB_HEAD_REF;
    const fileUrl = `https://github.com/${repository}/blob/${headRef}/${fileName}#L${lineNumber}`;
    const ignoreRule = `Please correct the violation or ignore the rule <!-- markdownlint-disable-next-line ${ruleNames[0]} -->`;
    const message =
      `${fileName}${line}${column} ${fileUrl} ${name} ${ruleDescription} ${detail}${context} ${information} ${ignoreRule}`;
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

const makeFileFormatter = (destPath) => (options) => {
  const { results, logMessage } = options;

  const findings = results.map((r) => ({
    file: r.fileName,
    line: r.lineNumber,
    column: r.errorRange ? r.errorRange[0] : null,
    endColumn: r.errorRange ? r.errorRange[0] + r.errorRange[1] - 1 : null,
    rule: r.ruleNames.join("/"),
    rulePrimary: r.ruleNames[0],
    description: r.ruleDescription,
    detail: r.errorDetail || null,
    context: r.errorContext || null,
    infoUrl: r.ruleInformation || null
  }));

  const outFile = path.resolve(destPath || "markdownlint-results.json");
  try {
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    const payload = {
      tool: "markdownlint-cli2",
      version: 1,
      count: findings.length,
      results: findings
    };
    fs.writeFileSync(outFile, JSON.stringify(payload, null, 2));
    logMessage(`Wrote markdownlint results to: ${outFile} (${findings.length} issues)`);
  } catch (e) {
    core.warning(`Failed to write results file: ${e instanceof Error ? e.message : String(e)}`);
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

const outputFormatters = [[ outputFormatter ]]

const resultsFile =
    core.getInput("results-file") ||
    process.env.MARKDOWNLINT_RESULTS_FILE ||
    "markdownlint-results.json";
if (resultsFile && resultsFile.length > 0) {
    outputFormatters.push([makeFileFormatter(resultsFile)])
}

const parameters = {
  argv,
  logMessage,
  "optionsOverride": {
    "outputFormatters": outputFormatters
  }
};
markdownlintCli2(parameters).then(
  (code) => code && core.setFailed(`Failed with exit code: ${code}`),
  (error) => core.setFailed(`Failed due to error: ${error}`)
);
