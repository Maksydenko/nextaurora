import perfectionist from 'eslint-plugin-perfectionist'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tsdoc from 'eslint-plugin-tsdoc'
import unusedImports from 'eslint-plugin-unused-imports'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

import { FlatCompat } from '@eslint/eslintrc'
import pluginQuery from '@tanstack/eslint-plugin-query'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  {
    ignores: ['node_modules', '.next', 'next-env.d.ts', 'plopfile.js']
  },
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:jsx-a11y/recommended'
  ),
  ...pluginQuery.configs['flat/recommended'],
  perfectionist.configs['recommended-natural'],
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          disallowTypeAnnotations: false,
          fixStyle: 'inline-type-imports',
          prefer: 'type-imports'
        }
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-inferrable-types': [
        'warn',
        {
          ignoreParameters: false,
          ignoreProperties: false
        }
      ],
      '@typescript-eslint/no-unused-vars': 'off',
      'arrow-body-style': ['warn', 'as-needed'],
      curly: ['warn', 'all'],
      eqeqeq: [
        'error',
        'always',
        {
          null: 'ignore'
        }
      ],
      'func-style': ['warn', 'expression'],
      'no-console': [
        'warn',
        {
          allow: ['warn', 'error']
        }
      ],
      'no-lonely-if': 'warn',
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              message: 'Use `next/navigation`.',
              name: 'next/router'
            }
          ]
        }
      ],
      'no-restricted-syntax': [
        'warn',
        {
          message:
            'React default import is unnecessary. Use destructuring import.',
          selector:
            "ImportDeclaration[source.value='react'] ImportDefaultSpecifier"
        },
        {
          message: 'Avoid redundant primitive generic.',
          selector: [
            'CallExpression[callee.name=/^use/] >' +
              'TSTypeParameterInstantiation >' +
              ':matches(TSBigIntKeyword, TSBooleanKeyword, TSNullKeyword,' +
              'TSNumberKeyword, TSStringKeyword, TSSymbolKeyword, TSUndefinedKeyword)'
          ].join(' ')
        },
        {
          message: 'Avoid `export default` on declarations.',
          selector: 'ExportDefaultDeclaration > FunctionDeclaration'
        }
      ],
      'no-self-compare': 'error',
      'no-template-curly-in-string': 'error',
      'no-unused-vars': 'off',
      'no-useless-rename': 'warn',
      'object-shorthand': ['warn', 'always'],
      'padding-line-between-statements': [
        'warn',
        {
          blankLine: 'always',
          next: '*',
          prev: 'directive'
        },
        {
          blankLine: 'any',
          next: 'directive',
          prev: 'directive'
        },
        {
          blankLine: 'always',
          next: 'return',
          prev: '*'
        },
        {
          blankLine: 'always',
          next: ['do', 'for', 'if', 'switch', 'try', 'while', 'with'],
          prev: '*'
        },
        {
          blankLine: 'always',
          next: '*',
          prev: ['do', 'for', 'if', 'switch', 'try', 'while', 'with']
        }
      ],
      'perfectionist/sort-imports': 'off',
      'perfectionist/sort-jsx-props': 'off',
      'prefer-template': 'warn',
      quotes: [
        'warn',
        'single',
        {
          avoidEscape: true
        }
      ],
      'react/button-has-type': 'warn',
      'react/jsx-curly-brace-presence': [
        'warn',
        {
          children: 'never',
          propElementValues: 'always',
          props: 'never'
        }
      ],
      'react/jsx-no-useless-fragment': [
        'warn',
        {
          allowExpressions: false
        }
      ],
      'react/jsx-sort-props': [
        'warn',
        {
          callbacksLast: true,
          ignoreCase: true,
          reservedFirst: true,
          shorthandLast: true
        }
      ],
      'react/no-array-index-key': 'warn',
      'react/self-closing-comp': 'warn',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            // `import type` appends \\u0000 for grouping;
            // include it so React/Next stay in these buckets and above `^[a-z]` packages.
            ['^react(\\u0000)?$', '^react-dom(\\u0000)?$'],
            ['^next(\\u0000)?$', '^next/'],
            ['^[a-z]'],
            ['^@'],
            ['^@/application/'],
            ['^@/views/'],
            ['^@/widgets/'],
            ['^@/features/'],
            ['^@/entities/'],
            ['^@/shared/'],
            ['^@/'],
            ['\\/enums$', '\\.enum$'],
            ['\\/types$', '\\.type$'],
            ['\\/interfaces$', '\\.interface$'],
            ['\\/constant$', '\\/constants$', '\\.const$'],
            ['\\/configs$', '\\.config$'],
            ['\\/schemas$', '\\.schema$'],
            ['\\/mocks$', '\\.mock$'],
            ['\\/data$', '\\.data$'],
            ['\\/utils$', '\\.util$'],
            ['\\/helpers$', '\\.helper$'],
            ['\\/services$', '\\.service$'],
            ['\\/stores$', '\\.store$'],
            ['\\/atoms$', '\\.atom$'],
            ['\\/contexts$', '\\.context$'],
            ['\\/providers$', '\\.provider$'],
            ['\\/hooks$', '^\\.\\.*/use[A-Z].*$', '^\\.*/use[A-Z].*$'],
            ['^\\.\\.(?!/?$)', '^\\.(?!/?$)'],
            ['^'],
            ['^.+\\.module\\.s?css$'],
            ['^\\u0000']
          ]
        }
      ],
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          vars: 'all',
          varsIgnorePattern: '^_'
        }
      ]
    }
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      tsdoc
    },
    rules: {
      'tsdoc/syntax': 'warn'
    }
  }
]

export default eslintConfig
