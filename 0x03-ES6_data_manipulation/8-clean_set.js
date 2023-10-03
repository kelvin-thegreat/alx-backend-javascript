/**
 * Returns a string of all set values that start with a specific string.
 *
 * @param {Set} set - The Set to filter values from.
 * @param {string} startString - The string to check for as a prefix.
 * @returns {string} - A string containing filtered values separated by '-'.
 */
/**
 * Returns a string of set values that start with a specific string.
 *
 * @param {Set} set - The Set to filter values from.
 * @param {string} startString - The string to check for as a prefix.
 * @returns {string} - A string containing filtered values separated by '-'.
 */
export default function cleanSet(set, startString) {
    return (
      !set || !startString || !(set instanceof Set) || typeof startString !== 'string'
        ? ''
        : Array.from(set)
            .filter(value => typeof value === 'string' && value.startsWith(startString))
            .map(value => value.substring(startString.length))
            .filter(value => value !== '')
            .join('-')
    );
  }
  