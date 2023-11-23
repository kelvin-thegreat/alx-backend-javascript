// 5-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    // Spy on console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the spy after each test
    consoleLogSpy.restore();
  });

  it('should log the correct message and be called once with totalAmount=100, totalShipping=20', () => {
    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Verify that console.log is logging the correct message
    expect(consoleLogSpy.calledWithExactly('The total is: 120')).to.be.true;

    // Verify that console.log is only called once
    expect(consoleLogSpy.calledOnce).to.be.true;
  });

  it('should log the correct message and be called once with totalAmount=10, totalShipping=10', () => {
    // Call the function
    sendPaymentRequestToApi(10, 10);

    // Verify that console.log is logging the correct message
    expect(consoleLogSpy.calledWithExactly('The total is: 20')).to.be.true;

    // Verify that console.log is only called once
    expect(consoleLogSpy.calledOnce).to.be.true;
  });
});
