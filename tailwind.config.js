const colours = require('tailwindcss/colors');

module.exports = {
    darkMode: 'media',
    theme: {
        extend: {
            colors: {
                blue: {
                    500: '#26619c'
                },
                grey: colours.gray,
                orange: colours.orange
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: [
        require('@tailwindcss/forms')
    ]
};
