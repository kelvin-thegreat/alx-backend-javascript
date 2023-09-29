import Currency from './3-currency';

/**
 * Represents pricing information with an amount and currency.
 */
export default class Pricing {
  /**
   * Create a new Pricing instance.
   * @param {number} amount - The amount of the pricing.
   * @param {Currency} currency - The currency of the pricing.
   */
  constructor(amount, currency) {
    /**
     * The amount of the pricing.
     * @type {number}
     * @private
     */
    this._amount = amount;

    /**
     * The currency of the pricing.
     * @type {Currency}
     * @private
     */
    this._currency = currency;
  }

  /**
   * Get the amount of the pricing.
   * @returns {number} The amount.
   */
  get amount() {
    return this._amount;
  }

  /**
   * Set the amount of the pricing.
   * @param {number} value - The new amount.
   * @throws {TypeError} If the value is not a number.
   */
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = value;
  }

  /**
   * Get the currency of the pricing.
   * @returns {Currency} The currency object.
   */
  get currency() {
    return this._currency;
  }

  /**
   * Set the currency of the pricing.
   * @param {Currency} value - The new currency.
   * @throws {TypeError} If the value is not an instance of Currency.
   */
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = value;
  }

  /**
   * Create the full string representation of this Pricing.
   * @returns {string} The full pricing string in the format: "amount currency_name (currency_code)".
   */
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  /**
   * Convert a price using a conversion rate.
   * @param {number} amount - The amount to convert.
   * @param {number} conversionRate - The conversion rate.
   * @returns {number} The converted amount.
   * @throws {TypeError} If amount or conversionRate is not a number.
   */
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
