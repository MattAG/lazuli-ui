module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        '@vue/typescript/recommended',
        'plugin:jsdoc/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    plugins: [
        'jsdoc'
    ],
    rules: {
        '@typescript-eslint/comma-dangle': 'error',
        '@typescript-eslint/indent': [
            'error',
            4
        ],
        '@typescript-eslint/semi': 'error',
        'vue/html-closing-bracket-newline': [
            'error', {
                singleline: 'never',
                multiline: 'never'
            }
        ],
        'vue/html-indent': [
            'error',
            4
        ],
        'vue/component-tags-order': [
            'error', {
                order: [
                    'template',
                    'style',
                    'script'
                ]
            }
        ],
        'vue/max-attributes-per-line': [
            'error', {
                singleline: 1,
                multiline: {
                    max: 1,
                    allowFirstLine: true
                }
            }
        ]
    },
    overrides: [
        {
            files: ['**/*.js'],
            rules: {
                '@typescript-eslint/no-var-requires': 'off'
            }
        }
    ]
};
