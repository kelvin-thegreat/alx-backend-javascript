/**
 * Checks if all elements in an array exist within a set.
 *
 * @param {Set} set - The Set to check against.
 * @param {Array} array - The array containing elements to check.
 * @returns {boolean} - True if all elements in the array exist in the set, false otherwise.
 */
export default function hasValuesFromArray(set, array) {
  for (const item of array) {
    if (!set.has(item)) {
      return false;
    }
  }
  return true;
}