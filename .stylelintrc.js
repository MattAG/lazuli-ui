module.exports = {
    extends: [
        'stylelint-config-recommended',
        'stylelint-config-idiomatic-order'
    ],
    plugins: [
        'stylelint-order'
    ],
    rules: {
        'at-rule-no-unknown': [true, {
            ignoreAtRules: [
                'tailwind',
                'apply',
                'variants',
                'responsive',
                'screen'
            ]
        }]
    }
};
