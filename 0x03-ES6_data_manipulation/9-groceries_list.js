/**
 * Returns a Map of groceries with items and quantities.
 *
 * @returns {Map} - A Map containing groceries (name, quantity).
 */
export default function groceriesList() {
  const groceryMap = new Map();

  groceryMap.set('Apples', 10);
  groceryMap.set('Tomatoes', 10);
  groceryMap.set('Pasta', 1);
  groceryMap.set('Rice', 1);
  groceryMap.set('Banana', 5);

  return groceryMap;
}