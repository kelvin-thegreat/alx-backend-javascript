/**
 * Returns a string of all set values that start with a specific string.
 *
 * @param {Set} set - The Set to filter values from.
 * @param {string} startString - The string to check for as a prefix.
 * @returns {string} - A string containing filtered values separated by '-'.
 */
export default function cleanSet(set, startString) {
    const filteredValues = Array.from(set).filter(value => value.startsWith(startString));
    return filteredValues.join('-');
  }  