
/**
 * Creates a JS key value, for a given string.
 *
 * @param {string} value The string to transform into a key value.
 * @returns {string} A key value.
 */
export function toKeyValue(value: string): string {
    return value.toLowerCase()
        .replace(/\s/g, '-')
        .replace(/[^a-zA-Z-]+/g, '');
}

/**
 * Generates a simple key value.
 *
 * @returns {string} The generated key.
 */
export function generateKey(): string {
    return Math.random().toString(36).slice(2, 8);
}
