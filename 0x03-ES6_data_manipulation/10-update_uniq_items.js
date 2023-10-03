/**
 * Updates the quantity to 100 for all items with an initial quantity of 1 in the map.
 *
 * @param {Map} groceryMap - The map containing groceries (name, quantity).
 * @throws {Error} - Throws an error if the argument is not a map.
 */
export default function updateUniqueItems(groceryMap) {
  if (!(groceryMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [item, quantity] of groceryMap.entries()) {
    if (quantity === 1) {
      groceryMap.set(item, 100);
    }
  }
}
