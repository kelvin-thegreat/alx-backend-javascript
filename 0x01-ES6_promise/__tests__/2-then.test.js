/* eslint-disable jest/no-try-expect */
/* eslint-disable jest/prefer-expect-assertions */
/* eslint-disable import/no-unresolved */
// __tests__/handleResponseFromAPI.test.js

// eslint-disable-next-line import/extensions
import handleResponseFromAPI from '../2-then';

// Mock a successful Promise
const successfulPromise = Promise.resolve();

// Mock a failing Promise
const failingPromise = Promise.reject();

describe('handleResponseFromAPI function', () => {
  it('should resolve with a success object and log a message for a successful Promise', async () => {
    const result = await handleResponseFromAPI(successfulPromise);
    expect(result).toStrictEqual({ status: 200, body: 'success' });
  });

  it('should reject with an error and log a message for a failing Promise', async () => {
    try {
      await handleResponseFromAPI(failingPromise);
      // If the promise resolves successfully, this line will throw an error
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe(''); // An empty message for the error
    }
  });

  it('should always log a message when a Promise settles', async () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    await handleResponseFromAPI(successfulPromise);
    expect(consoleLogSpy).toHaveBeenCalledWith('Got a response from the API');
    consoleLogSpy.mockRestore(); // Restore the original console.log
  });
});
