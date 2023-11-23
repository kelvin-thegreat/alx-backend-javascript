// api.test.js
const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('Index page', () => {
  let server;

  before((done) => {
    server = app.listen(7865, () => {
      done();
    });
  });

  after(() => {
    server.close();
  });

  it('should return correct status code for /', (done) => {
    request.get('http://localhost:7865/', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result for /', (done) => {
    request.get('http://localhost:7865/', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should handle other cases for /', (done) => {
    // Additional test cases for / if needed
    done();
  });

  // New test suite for /cart/:id
  describe('Cart page', () => {
    it('should return correct status code when :id is a number', (done) => {
      request.get('http://localhost:7865/cart/123', (error, response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return correct result when :id is a number', (done) => {
      request.get('http://localhost:7865/cart/123', (error, response, body) => {
        expect(body).to.equal('Payment methods for cart 123');
        done();
      });
    });

    it('should return 404 when :id is NOT a number', (done) => {
      request.get('http://localhost:7865/cart/notanumber', (error, response) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });

    // Additional test cases for /cart/:id if needed
  });
});
