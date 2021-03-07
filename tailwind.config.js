const colours = require('tailwindcss/colors');

module.exports = {
    darkMode: 'media',
    theme: {
        fontFamily: {
            'font-sans': 'Jost'
        },
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
        extend: {
            borderWidth: ['focus']
        }
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('./plugins/button'),
        require('./plugins/toast')
    ]
};
