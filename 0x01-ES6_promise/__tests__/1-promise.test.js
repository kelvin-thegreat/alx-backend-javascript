// __tests__/1-promise.test.js

import getFullResponseFromAPI from '../1-promise';

// eslint-disable-next-line jest/require-top-level-describe
test('getFullResponseFromAPI resolves with success', () => getFullResponseFromAPI(true).then((response) => {
  expect(response).toStrictEqual({ status: 200, body: 'Success' });
}));

// eslint-disable-next-line jest/require-top-level-describe
test('getFullResponseFromAPI rejects with error', () => getFullResponseFromAPI(false).catch((error) => {
  expect(error.message).toBe('The fake API is not working currently');
}));
