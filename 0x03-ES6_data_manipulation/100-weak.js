/**
 * A weak map of endpoints and the number of calls made.
 */
export const weakMap = new WeakMap();

/**
 * The maximum number of calls for an endpoint.
 */
const MAX_ENDPOINT_CALLS = 5;

/**
 * Tracks the number of calls made to an API's endpoint.
 * @param {{protocol: String,name: String,* }} endpoint - The endpoint to make a request to.
 * @throws {Error} Throws an error if the number of calls exceeds the maximum.
 */
export function queryAPI(endpoint) {
  const count = weakMap.has(endpoint) ? weakMap.get(endpoint) + 1 : 1;
  weakMap.set(endpoint, count);
  count >= MAX_ENDPOINT_CALLS && (() => { throw new Error('Endpoint load is high'); })();
}
