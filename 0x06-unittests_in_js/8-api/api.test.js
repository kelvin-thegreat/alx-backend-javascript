// api.test.js
const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('Index page', () => {
  let server;

  before((done) => {
    // Start the server before running tests
    server = app.listen(7865, () => {
      done();
    });
  });

  after(() => {
    // Close the server after running tests
    server.close();
  });

  it('should return correct status code', (done) => {
    request.get('http://localhost:7865/', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result', (done) => {
    request.get('http://localhost:7865/', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should handle other cases', (done) => {
    // Add additional test cases if needed
    done();
  });
});
