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
   */
  set amount(value) {
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
   */
  set currency(value) {
    this._currency = value;
  }

  /**
   * Create the full string representation of this Pricing.
   * @returns {string} The full pricing string in the format: "amount currency_name (currency_code)".
   */
  displayFullPrice() {
    const currencyName = this._currency.name;
    const currencyCode = this._currency.code;
    return `${this._amount} ${currencyName} (${currencyCode})`;
  }

  /**
   * Convert a price using a conversion rate.
   * @param {number} amount - The amount to convert.
   * @param {number} conversionRate - The conversion rate.
   * @returns {number} The converted amount.
   */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
