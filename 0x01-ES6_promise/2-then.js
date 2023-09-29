// Export a function that handles the response from an API promise.
// It takes a single parameter 'promise', which should be a Promise.

export default function handleResponseFromAPI(promise) {
  return promise
    // Use 'then' to handle a successful resolution of the Promise.
    .then(() => ({ status: 200, body: 'success' }))
    // Use 'catch' to handle any errors that occurred during the Promise execution.
    .catch(() => new Error())
    // Use 'finally' to add a log statement that will always execute after the Promise is settled.
    .finally(() => console.log('Got a response from the API'));
}
