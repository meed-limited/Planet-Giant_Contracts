module.exports = {
  env: {
    browser: false,
    es2021: true,
    //mocha: true,
    node: true,
  },
  extends: [
    //"plugin:mocha/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  overrides: [
    {
      files: ["hardhat.config.ts"],
      globals: { task: true },
    },
  ],
};
