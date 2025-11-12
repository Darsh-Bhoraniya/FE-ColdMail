import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import importPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";
import perfectionist from "eslint-plugin-perfectionist";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist", "build"]),

  {
    files: ["**/*.{ts,tsx}"],

    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },

    plugins: {
      "@typescript-eslint": tseslint.plugin,
      import: importPlugin,
      "unused-imports": unusedImports,
      perfectionist,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },

    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
        },
      },
    },

    rules: {
      // Base recommended rules
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...reactHooks.configs["recommended-latest"].rules,
      ...reactRefresh.configs.vite.rules,

      // General
      "no-alert": 0,
      camelcase: 0,
      "no-console": 0,
      "no-unused-vars": 0,
      "no-nested-ternary": 0,
      "no-param-reassign": 0,
      "no-underscore-dangle": 0,

      // TS override unused vars
      "@typescript-eslint/no-unused-vars": [1, { args: "none" }],

      // React
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // Remove unused imports automatically
      "unused-imports/no-unused-imports": 1,

      // Perfectionist sorting
      "perfectionist/sort-imports": [
        1,
        {
          order: "asc",
          type: "line-length",
          "newlines-between": "always",
          groups: [
            "style",
            "type",
            ["builtin", "external"],
            "custom-modules",
            "internal",
            ["parent", "sibling", "index"],
            ["object", "unknown"],
          ],
          "custom-groups": {
            value: {
              ["custom-modules"]: "src/**",
            },
          },
        },
      ],
    },
  },
]);
