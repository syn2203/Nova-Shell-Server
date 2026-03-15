import { fileURLToPath } from 'node:url';
import globals from 'globals';
import tseslintPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';

const tsconfigRootDir = fileURLToPath(new URL('.', import.meta.url));

export default [
    {
        ignores: ['dist/**', 'node_modules/**', 'coverage/**']
    },
    {
        files: ['src/**/*.ts', 'test/**/*.ts'],
        languageOptions: {
            parser: tsParser,
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir
            },
            globals: {
                ...globals.node,
                ...globals.jest
            },
            sourceType: 'module'
        },
        plugins: {
            '@typescript-eslint': tseslintPlugin,
            prettier: prettierPlugin
        },
        rules: {
            ...tseslintPlugin.configs.recommended.rules,
            '@typescript-eslint/no-explicit-any': 'off',
            'prettier/prettier': 'error'
        }
    }
];
