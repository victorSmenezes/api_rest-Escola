import { defineConfig } from 'eslint/config';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import path from "path";
import { fileURLToPath } from "node:url";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

export default defineConfig([
  { files: ['**/*.js'], plugins: { js }, extends: ['js/recommended'] },
  ...compat.extends("airbnb"),
  ...compat.config({ rules: { "no-console": "off",
    "class-methods-use-this": "off",
    "import/first": "off",
    "no-param-reassign": "off",
    "camelcase": "off",
   } }),
]);



