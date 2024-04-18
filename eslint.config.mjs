/* eslint-disable n/no-unpublished-import */

import js from "@eslint/js";
import eslintPluginNode from "eslint-plugin-n";
import eslintPluginUnicorn from "eslint-plugin-unicorn";

export default [
  js.configs.all,
  eslintPluginNode.configs["flat/recommended"],
  eslintPluginUnicorn.configs["flat/all"],
  {
    "languageOptions": {
      "sourceType": "commonjs"
    },
    "linterOptions": {
      "reportUnusedDisableDirectives": true
    },
    "rules": {
      "max-statements": "off",
      "no-magic-numbers": "off",
      "no-ternary": "off",
      "one-var": "off",
      "sort-imports": "off",
      "sort-keys": "off",
  
      "unicorn/no-array-callback-reference": "off",
      "unicorn/prefer-module": "off",
      "unicorn/prefer-top-level-await": "off"
    }
  },
  {
    "files": [
      "eslint.config.mjs"
    ],
    "languageOptions": {
      "sourceType": "module"
    }
  }
];
