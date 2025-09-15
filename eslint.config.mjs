import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// TypeScript ESLint plugin import
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  ...tseslint.configs.recommendedTypeChecked,

  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
    },
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      // "@typescript-eslint/no-explicit-any": "error",
      // "@typescript-eslint/no-floating-promises": "error",
      // "@typescript-eslint/await-thenable": "error",
      // "@typescript-eslint/require-await": "error",
      // "@typescript-eslint/no-misused-promises": "error",
      // "@typescript-eslint/consistent-type-imports": "error",
},

  },
];

export default eslintConfig;
