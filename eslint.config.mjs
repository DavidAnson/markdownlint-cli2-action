// @ts-check

/* eslint-disable n/no-unpublished-import */

import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import eslintPluginN from "eslint-plugin-n";
import eslintPluginStylistic from "@stylistic/eslint-plugin";
import eslintPluginUnicorn from "eslint-plugin-unicorn";

export default defineConfig(
  {
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
  }
);
