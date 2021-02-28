module.exports = {
    purge: [
        './index.html',
        './src/**/*.{vue,ts}',
        '../lib/src/**/*.{vue,ts}'
    ],
    presets: [
        require('../../tailwind.config')
    ]
};
