import { defineConfig, globalIgnores } from 'eslint/config';
import nextTs from 'eslint-config-next/typescript';
import nextVitals from 'eslint-config-next/core-web-vitals';
// @ts-expect-error -- no types for this plugin
import drizzle from 'eslint-plugin-drizzle';

export default defineConfig([
	...nextVitals,
	...nextTs,
	globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts', '**/migrations/**/*']),
	{
		files: ['**/*.ts', '**/*.tsx'],
		plugins: {
			drizzle
		},
		rules: {
			'@typescript-eslint/array-type': 'off',
			'@typescript-eslint/consistent-type-definitions': 'off',
			'@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports', fixStyle: 'inline-type-imports' }],
			'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
			'@typescript-eslint/require-await': 'off',
			'@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: { attributes: false } }],
			'@typescript-eslint/ban-tslint-comment': 'off',
			'@typescript-eslint/prefer-nullish-coalescing': 'off',
			'drizzle/enforce-delete-with-where': ['error', { drizzleObjectName: ['db', 'ctx.db'] }],
			'drizzle/enforce-update-with-where': ['error', { drizzleObjectName: ['db', 'ctx.db'] }]
		},
		languageOptions: {
			parserOptions: {
				projectService: true
			}
		},
		linterOptions: {
			reportUnusedDisableDirectives: true
		}
	}
]);
