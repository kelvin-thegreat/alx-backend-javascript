// 1-promise.js
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      // If 'success' is true, resolve the promise
      const response = { status: 200, body: 'Success' };
      resolve(response);
    } else {
      // If 'success' is false, reject the promise with an error message
      reject(new Error('The fake API is not working currently'));
    }
  });
}
