module.exports = {
    /**
     * Converts a hex string to an RGB object.
     *
     * @param {string} colour The colour string to convert.
     * @returns {object} The converted RGB colour object.
     */
    hexToColourObject (colour) {
        return {
            red: parseInt(colour.slice(1, 3), 16),
            green: parseInt(colour.slice(3, 5), 16),
            blue: parseInt(colour.slice(5, 7), 16)
        };
    },
    /**
     * Gets the appropriate text colour for a given background colour.
     *
     * @param {string} background The background colour to get the text colour for.
     * @returns {string} Appropriate text colour.
     */
    getTextColourFromBackground (background) {
        const colour = this.hexToColourObject(background);
        const result = colour.red * .299 + colour.green * .587 + colour.blue * .114;

        return result > 186 ? '#000' : '#fff';
    }
};
