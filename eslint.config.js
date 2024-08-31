import eslintPluginImportX from 'eslint-plugin-import-x'
import tsParser from '@typescript-eslint/parser'

export default [
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        plugins: {
            'import-x': eslintPluginImportX,
        },
        ignores: ['eslint.config.js'],
        rules: {
            'import-x/no-default-export': 'error',
        },
    },
    {
        files: ['**/*.ts'],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        plugins: {
            'import-x': eslintPluginImportX,
        },
        rules: {
            'import-x/no-default-export': 'error',
        },
        settings: {
            'import-x/resolver': {
                typescript: true,
            },
        },
    },
]

