const _ = require('lodash');
const plugin = require('tailwindcss/plugin');
const shared = require('./shared');

module.exports = plugin(({ addUtilities, e, theme }) => {
    const colours = theme('colors');
    const padding = theme('padding');
    const fontSizes = theme('fontSize');

    let buttonColours = _.map(colours, (value, key) => {
        if (typeof value === 'object') {
            return {
                [`.${e(`btn-${key}`)}`]: {
                    'background-color': value[500],
                    'color': shared.getTextColourFromBackground(value[500]),
                    '&:hover': {
                        'background-color': value[400]
                    }
                }
            };
        }
    });

    if (colours['grey']) {
        buttonColours = [
            ...buttonColours,
            {
                '.btn-white': {
                    'background-color': colours['white'],
                    'color': colours['black'],
                    '&:hover': {
                        'background-color': colours['grey'][100]
                    }
                }
            },
            {
                '.btn-black': {
                    'background-color': colours['black'],
                    'color': colours['white'],
                    '&:hover': {
                        'background-color': colours['grey'][900]
                    }
                }
            }
        ];
    }

    const buttonSizes = {
        '.btn-small': {
            'font-size': fontSizes['xs'][0],
            padding: `${padding[0.5]} ${padding[4]}`
        },
        '.btn-medium': {
            'font-size': fontSizes['sm'][0],
            padding: `${padding[1]} ${padding[8]}`
        },
        '.btn-large': {
            'font-size': fontSizes['base'][0],
            padding: `${padding[2]} ${padding[16]}`
        }
    };

    addUtilities(buttonColours);
    addUtilities(buttonSizes);
});
