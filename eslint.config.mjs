import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
  },
  {
    languageOptions: { globals: globals.browser },
  },
  {
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      "comma-dangle": ["error", "always-multiline"],
      "no-console": ["warn"],
      "no-debugger": ["warn"],
      "prefer-const": ["error"],
      "@stylistic/no-extra-semi": "off",
      "@stylistic/semi": "error",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": ["warn"],
      "no-useless-constructor": "off",
      "@typescript-eslint/no-useless-constructor": ["error"],
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
];
