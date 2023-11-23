// Testing API script
const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id returns correct response for valid :id', (done) => {
    request.get(`${API_URL}/cart/47`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  });

  it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
    request.get(`${API_URL}/cart/-47`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  // New test suite for /login endpoint
  describe('Login endpoint', () => {
    it('POST /login returns correct response for valid user', (done) => {
      const options = {
        url: `${API_URL}/login`,
        method: 'POST',
        json: true,
        body: { userName: 'Alice' },
      };

      request(options, (_err, res, body) => {
        expect(res.statusCode).to.be.equal(200);
        expect(body).to.be.equal('Welcome Alice');
        done();
      });
    });

    // Additional test cases for /login if needed
  });

  // New test suite for /available_payments endpoint
  describe('Available Payments endpoint', () => {
    it('GET /available_payments returns correct response', (done) => {
      request.get(`${API_URL}/available_payments`, (_err, res, body) => {
        const expected = {
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        };
        expect(res.statusCode).to.be.equal(200);
        expect(JSON.parse(body)).to.deep.equal(expected);
        done();
      });
    });

    // Additional test cases for /available_payments if needed
  });
});
