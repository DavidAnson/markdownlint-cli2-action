/* eslint-disable n/no-unpublished-import */

import js from "@eslint/js";
import eslintPluginNode from "eslint-plugin-n";
import eslintPluginStylistic from "@stylistic/eslint-plugin";
import eslintPluginUnicorn from "eslint-plugin-unicorn";

export default [
  js.configs.all,
  eslintPluginNode.configs["flat/recommended"],
  eslintPluginStylistic.configs.customize({
    "arrowParens": true,
    "commaDangle": "never",
    "jsx": false,
    "quoteProps": "always",
    "quotes": "double",
    "semi": true
  }),
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

      "@stylistic/array-bracket-spacing": [ "error", "always" ],
      "@stylistic/dot-location": [ "error", "object" ],
      "@stylistic/operator-linebreak": [ "error", "after" ],

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
