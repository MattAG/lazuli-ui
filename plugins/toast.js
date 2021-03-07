const _ = require('lodash');
const plugin = require('tailwindcss/plugin');
const shared = require('./shared');

module.exports = plugin(({ addUtilities, e, theme }) => {
    const colours = theme('colors');

    let toastColours = _.map(colours, (value, key) => {
        if (typeof value === 'object') {
            return {
                [`.${e(`tst-${key}`)}`]: {
                    'background-color': value[500],
                    'color': shared.getTextColourFromBackground(value[500])
                }
            };
        }
    });

    if (colours['grey']) {
        toastColours = [
            ...toastColours,
            {
                '.tst-white': {
                    'background-color': colours['white'],
                    'color': colours['black']
                }
            },
            {
                '.tst-black': {
                    'background-color': colours['black'],
                    'color': colours['white']
                }
            }
        ];
    }

    addUtilities(toastColours);
});
