import perfectionist from 'eslint-plugin-perfectionist';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import pluginQuery from '@tanstack/eslint-plugin-query';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

const eslintConfig = [
  {
    ignores: ['node_modules', '.next']
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
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
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
        // Empty line after directives
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
        // Empty line before return
        {
          blankLine: 'always',
          next: 'return',
          prev: '*'
        },
        // Empty line before control structures
        {
          blankLine: 'always',
          next: ['do', 'for', 'if', 'switch', 'try', 'while', 'with'],
          prev: '*'
        },
        // Empty line after control structures
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
            ['^react$', '^react-dom$'],
            ['^next$', '^next/'],
            ['^[a-z]'],
            ['^@'],
            ['^@/application/'],
            ['^@/views/'],
            ['^@/widgets/'],
            ['^@/features/'],
            ['^@/entities/'],
            ['^@/shared/'],
            ['^@/'],
            ['\\/hooks$', '^\\.\\.*/use[A-Z].*$', '^\\.*/use[A-Z].*$'],
            ['\\/services$', '\\.service$'],
            ['\\/providers$', '\\.provider$'],
            ['\\/contexts$', '\\.context$'],
            ['\\/utils$', '\\.util$'],
            ['\\/helpers$', '\\.helper$'],
            ['\\/schemas$', '\\.schema$'],
            ['\\/data$', '\\.data$'],
            ['\\/mocks$', '\\.mock$'],
            ['\\/constant$', '\\.const$'],
            ['\\/configs$', '\\.config$'],
            ['\\/enums$', '\\.enum$'],
            ['\\/types$', '\\.type$'],
            ['\\/interfaces$', '\\.interface$'],
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
  }
];

export default eslintConfig;
