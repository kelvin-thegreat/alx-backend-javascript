/**
 * Create a WeakMap to track the number of times queryAPI is called for each endpoint.
 * @type {WeakMap}
 */
export const weakMap = new WeakMap();

/**
 * Query the API endpoint and track the number of calls.
 *
 * @param {Object} endpoint - The API endpoint with protocol and name properties.
 * @throws {Error} Throws an error if the number of queries is >= 5.
 */
export function queryAPI(endpoint) {
  /**
   * The count of queries for the given endpoint.
   * @type {number}
   */
  const count = weakMap.has(endpoint) ? weakMap.get(endpoint) + 1 : 0;
  weakMap.set(endpoint, count);
  count >= 5 && (() => { throw new Error('Endpoint load is high'); })();
}
