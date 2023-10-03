/**
 * Returns a string of all set values that start with a specific string.
 *
 * @param {Set} set - The Set to filter values from.
 * @param {string} startString - The string to check for as a prefix.
 * @returns {string} - A string containing filtered values separated by '-'.
 */
export default function cleanSet(set, startString) {
  let result = '';

  for (const value of set) {
    if (value.startsWith(startString)) {
      const restOfString = value.slice(startString.length);
      result += (result === '' ? '' : '-') + restOfString;
    }
  }

  return result;
}
