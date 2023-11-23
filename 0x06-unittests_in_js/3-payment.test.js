// 3-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with the correct arguments', () => {
    // Create a spy for Utils.calculateNumber
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    // Call the function that uses the spy
    sendPaymentRequestToApi(100, 20);

    // Validate that the spy was called with the correct arguments
    expect(calculateNumberSpy.calledWithExactly('SUM', 100, 20)).to.be.true;

    // Restore the spy after use
    calculateNumberSpy.restore();
  });

  it('should display the correct message in the console', () => {
    // Create a spy to stub console.log
    const consoleLogStub = sinon.stub(console, 'log');

    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Validate that the correct message was logged
    expect(consoleLogStub.calledWithExactly('The total is: 120')).to.be.true;

    // Restore the console.log stub after use
    consoleLogStub.restore();
  });
});
