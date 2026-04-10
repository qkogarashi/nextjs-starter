import nextPlugin from "@next/eslint-plugin-next"
import stylistic from "@stylistic/eslint-plugin"
import { defineConfig } from "eslint/config"
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript"
import importPlugin from "eslint-plugin-import"
import pathAlias from "eslint-plugin-path-alias"
import simpleImportSort from "eslint-plugin-simple-import-sort"
import unusedImports from "eslint-plugin-unused-imports"
import tseslint from "typescript-eslint"

import customEslint from "./eslint-plugins/index.mjs"


const allExtensions = ["js", "mjs", "cjs", "ts", "mts", "cts", "jsx", "tsx"]
const tsExtensions = ["ts", "mts", "cts", "tsx"]

const eslintConfig = defineConfig(
	{
		ignores: [
			"node_modules",
			".git",
			"dist",
			".vscode",
		]
	},
	{
		files: [
			...allExtensions.map((ext) => `**/*.${ext}`),
		],
		plugins: {
			"@typescript-eslint": tseslint.plugin,
			"simple-import-sort": simpleImportSort,
			"unused-imports": unusedImports,
			"path-alias": pathAlias,
			"import": importPlugin,
			"@stylistic": stylistic,
			"custom-eslint": customEslint,
			"@next/next": nextPlugin,
		},
		settings: {
			// "import/parsers": {
			// 	"@typescript-eslint/parser": [
			// 		".ts",
			// 		".tsx",
			// 	],
			// },
			// "import/resolver": {
			// 	typescript: {
			// 		project: "./tsconfig.json",
			// 	},
			// },
			"import-x/resolver-next": [
				createTypeScriptImportResolver({
					noWarnOnMultipleProjects: true,
					project: [
						"tsconfig.json",
					],
				}),
			],
		},
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: "module",
		},
		rules: {

			// "@stylistic/arrow-parens": ["warn", "as-needed"],
			"@stylistic/arrow-parens": ["warn", "always"],
			"@stylistic/arrow-spacing": "warn",
			"@stylistic/block-spacing": ["warn", "always"],
			"@stylistic/brace-style": "warn",
			// "@stylistic/comma-dangle": ["warn", "always-multiline"],
			"@stylistic/comma-spacing": ["warn", { before: false, after: true }],
			"@stylistic/dot-location": ["warn", "property"],
			"@stylistic/eol-last": ["warn", "always"],
			"@stylistic/function-call-spacing": ["warn", "never"],
			// "@stylistic/function-paren-newline": ["warn", { minItems: 3 }],
			"@stylistic/indent": [
				"warn",
				"tab",
				{ SwitchCase: 1, MemberExpression: 1 },
			],
			"@stylistic/no-mixed-spaces-and-tabs": "warn",
			"@stylistic/newline-per-chained-call": ["warn", { "ignoreChainWithDepth": 3 }],
			// "@stylistic/indent-binary-ops": ["warn", "tab"],
			"@stylistic/key-spacing": ["warn", { beforeColon: false, mode: "strict" }],
			// "@stylistic/line-comment-position": ["warn", { position: "above" }],
			// "@stylistic/lines-around-comment": [
			// 	"warn",
			// 	{ beforeBlockComment: true, allowObjectStart: true },
			// ],
			// "@stylistic/lines-between-class-members": [
			// 	"warn",
			// 	{
			// 		enforce: [{ blankLine: "never", prev: "method", next: "method" }],
			// 	},
			// ],
			"@stylistic/multiline-ternary": ["warn", "always-multiline"],
			"@stylistic/new-parens": "warn",
			"@stylistic/no-confusing-arrow": "warn",
			"@stylistic/no-mixed-operators": [
				"warn",
				{
					"groups": [
						["&", "|", "^", "~", "<<", ">>", ">>>"],
						["==", "!=", "===", "!==", ">", ">=", "<", "<="],
						["&&", "||"],
						["in", "instanceof"]
					],
					"allowSamePrecedence": true
				}
			],
			"@stylistic/no-multi-spaces": "warn",
			"@stylistic/no-multiple-empty-lines": "warn",
			// "@stylistic/no-tabs": ["warn", { allowIndentationTabs: true }],
			"@stylistic/no-trailing-spaces": "warn",
			"@stylistic/no-whitespace-before-property": "warn",
			// "@stylistic/nonblock-statement-body-position": ["warn", "beside"],
			// "@stylistic/object-curly-newline": [
			// 	"warn",
			// 	{ multiline: true }
			// ],
			"@stylistic/object-curly-spacing": ["warn", "always"],
			"@stylistic/object-property-newline": [
				"warn",
				{ allowAllPropertiesOnSameLine: true },
			],
			"@stylistic/operator-linebreak": [
				"warn",
				"before",
				// { overrides: { "+=": "before" } },
			],
			// "@stylistic/padding-line-between-statements": [
			// 	"warn",
			// 	{ blankLine: "always", prev: "*", next: "return" }
			// ],
			"@stylistic/quotes": [
				"warn",
				"double",
				{ avoidEscape: true },
			],
			"@stylistic/rest-spread-spacing": ["warn", "never"],
			"@stylistic/semi": [
				"warn",
				"never",
				{
					beforeStatementContinuationChars: "any",
				}
			],
			"@stylistic/semi-spacing": "warn",
			"@stylistic/semi-style": ["warn", "first"],
			// "@stylistic/no-extra-semi": "warn",
			"@stylistic/space-before-blocks": "warn",
			"@stylistic/space-before-function-paren": ["warn", { "anonymous": "never", "named": "never", "asyncArrow": "always" }],
			"@stylistic/space-in-parens": ["warn", "never"],
			"@stylistic/space-unary-ops": "warn",
			// "@stylistic/spaced-comment": ["warn", "always", { markers: ["!"] }],
			"@stylistic/template-curly-spacing": "warn",
			"@stylistic/type-annotation-spacing": "warn",
			// "@stylistic/type-generic-spacing": ["warn"],
			"@stylistic/type-named-tuple-spacing": ["warn"],
			"@stylistic/wrap-iife": ["warn", "inside", { functionPrototypeMethods: true }],

			"yoda": "error",
			"eqeqeq": ["error", "always", { null: "ignore" }],
			"prefer-destructuring": [
				"warn",
				{
					VariableDeclarator: { array: false, object: true },
					AssignmentExpression: { array: false, object: false },
				},
			],
			"operator-assignment": ["warn", "always"],
			"no-useless-computed-key": "error",
			"no-unused-vars": "off",
			"no-unneeded-ternary": ["error", { defaultAssignment: false }],
			"no-invalid-regexp": "error",
			"no-constant-condition": ["error", { checkLoops: false }],
			// "no-duplicate-imports": "error",
			// "dot-notation": ["warn", { allowPattern: "^_+.+$" }],
			"no-useless-escape": "error",
			"no-fallthrough": "error",
			"for-direction": "error",
			// "no-async-promise-executor": "error",
			"no-cond-assign": "error",
			"no-dupe-else-if": "error",
			"no-duplicate-case": "error",
			"no-irregular-whitespace": "error",
			"no-loss-of-precision": "error",
			"no-misleading-character-class": "error",
			"no-prototype-builtins": "error",
			"no-regex-spaces": "error",
			"no-shadow-restricted-names": "error",
			"no-unexpected-multiline": "error",
			"no-unsafe-optional-chaining": "error",
			"no-useless-backreference": "error",
			"use-isnan": "warn",
			"prefer-const": "warn",
			"prefer-spread": "warn",
			// "quotes": [
			// 	"warn",
			// 	"double",
			// 	{
			// 		avoidEscape: true,
			// 		allowTemplateLiterals: true,
			// 	},
			// ],

			"import/first": "warn",
			"import/newline-after-import": "warn",
			"import/named": "error",
			// "import/no-unresolved": "error",
			"import/no-duplicates": "error",
			"import/enforce-node-protocol-usage": ["warn", "always"],

			"simple-import-sort/imports": "warn",
			"simple-import-sort/exports": "warn",

			// "path-alias/no-relative": "warn",

			"custom-eslint/no-mixed-imports": "warn",

			"@next/next/no-img-element": "warn",
			"@next/next/no-html-link-for-pages": "warn",
		},
	},
	{
		files: [
			...tsExtensions.map((ext) => `**/*.${ext}`),
		],
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				project: ["tsconfig.json"],
				tsconfigRootDir: import.meta.dirname,
			},
		},
		rules: {
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{
					"argsIgnorePattern": "^_",
					"caughtErrorsIgnorePattern": "^_",
					"destructuredArrayIgnorePattern": "^_",
					"varsIgnorePattern": "^_",
				}
			],
			"@typescript-eslint/consistent-type-imports": "error",
			"@typescript-eslint/no-deprecated": "error",
		},
	}
)

export default eslintConfig
