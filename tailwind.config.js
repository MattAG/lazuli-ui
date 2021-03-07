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
                    100: "#d4dfeb",
                    200: "#a8c0d7",
                    300: "#7da0c4",
                    400: "#5181b0",
                    500: "#26619c",
                    600: "#1e4e7d",
                    700: "#173a5e",
                    800: "#0f273e",
                    900: "#08131f"
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
