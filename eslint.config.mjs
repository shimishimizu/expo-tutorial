import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import reactJSXRuntime from "eslint-plugin-react/configs/jsx-runtime.js";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: globals.node,
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...reactRecommended.rules,
      ...reactJSXRuntime.rules,
      "react/react-in-jsx-scope": "off", // React 17+では不要なルールを無効化
    },
  },
  pluginJs.configs.recommended,
  tseslint.configs.recommended,
  reactRecommended,
  reactJSXRuntime,
];
