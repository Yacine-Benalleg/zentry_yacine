import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },

    rules: {
      // Enforce concise arrow functions
      "arrow-body-style": ["error", "as-needed"],

      // Commonly used rules
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }], // Limit empty lines
      "max-len": ["error", { code: 100 }], // Limit line length to 100 characters
      "no-unused-vars": ["warn", { args: "none", ignoreRestSiblings: true }], // unused variables
      eqeqeq: ["error", "always"], // Enforce strict equality checks
      curly: ["error", "all"], // Require braces for all control statements
      "react/react-in-jsx-scope": "off", // React 17+ doesn't need React in scope
      "react/prop-types": "off", // Disable PropTypes if using TypeScript or modern React
    },
  },
];
