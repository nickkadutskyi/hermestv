/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");
module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  root: true,
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "comma-dangle": [2, "always-multiline"],
    "no-console": ["orsay", "tizen"].includes(process.env.NODE_ENV)
      ? "warn"
      : "off",
    "no-debugger": ["orsay", "tizen"].includes(process.env.NODE_ENV)
      ? "warn"
      : "off",
    "prefer-const": ["orsay", "tizen"].includes(process.env.NODE_ENV)
      ? "error"
      : "warn",
    "@typescript-eslint/semi": ["orsay", "tizen"].includes(process.env.NODE_ENV)
      ? "error"
      : "warn",
    "@typescript-eslint/member-delimiter-style": ["orsay", "tizen"].includes(
      process.env.NODE_ENV,
    )
      ? "error"
      : "warn",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "@typescript-eslint/no-explicit-any": ["warn"],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": ["error"],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};

