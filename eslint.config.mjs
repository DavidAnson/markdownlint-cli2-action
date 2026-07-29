// @ts-check

/* eslint-disable n/no-unpublished-import */

import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import eslintPackageJson from "eslint-package-json";
import eslintPluginN from "eslint-plugin-n";
import eslintPluginStylistic from "@stylistic/eslint-plugin";
import eslintPluginUnicorn from "eslint-plugin-unicorn";

export default defineConfig(
  {
    "ignores": [
      "**/package.json"
    ],
    "plugins": {
      js,
      "n": eslintPluginN,
      "unicorn": eslintPluginUnicorn,
      "@stylistic": eslintPluginStylistic
    },
    "extends": [
      "js/all",
      "n/all",
      "unicorn/all",
      eslintPluginStylistic.configs.customize({
        "arrowParens": true,
        "commaDangle": "never",
        "jsx": false,
        "quoteProps": "always",
        "quotes": "double",
        "semi": true
      })
    ],
    "linterOptions": {
      "reportUnusedDisableDirectives": true
    },
    "rules": {
      "max-statements": "off",
      "no-inline-comments": "off",
      "no-magic-numbers": "off",
      "no-ternary": "off",
      "one-var": "off",
      "sort-imports": "off",
      "sort-keys": "off",

      "@stylistic/array-bracket-spacing": [ "error", "always" ],
      "@stylistic/dot-location": [ "error", "object" ],
      "@stylistic/operator-linebreak": [ "error", "after" ],

      "unicorn/no-array-callback-reference": "off",
      "unicorn/prefer-await": "off",
      "unicorn/prefer-module": "off",
      "unicorn/prefer-top-level-await": "off"
    }
  },
  {
    "files": [
      "**/package.json"
    ],
    "plugins": {
      "package-json": eslintPackageJson
    },
    "extends": [
      "package-json/all"
    ],
    "rules": {
      "package-json/dependency-version-range": [ "error", { "range": "exact" } ],
      "package-json/prefer-files-field": "off",
      "package-json/require-engines": "off",
      "package-json/require-entry-point": "off",
      "package-json/require-private": "off",
      "package-json/sort-properties": "off"
    }
  }
);
