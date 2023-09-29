/**
 * Represents a currency with a code and name.
 */
export default class Currency {
  /**
   * Create a new Currency.
   * @param {string} code - The currency code.
   * @param {string} name - The currency name.
   */
  constructor(code, name) {
    /**
     * The currency code.
     * @type {string}
     * @private
     */
    this._code = code;

    /**
     * The currency name.
     * @type {string}
     * @private
     */
    this._name = name;
  }

  /**
   * Get the currency code.
   * @returns {string} The currency code.
   */
  get code() {
    return this._code;
  }

  /**
   * Set the currency code.
   * @param {string} value - The new currency code.
   */
  set code(value) {
    this._code = value;
  }

  /**
   * Get the currency name.
   * @returns {string} The currency name.
   */
  get name() {
    return this._name;
  }

  /**
   * Set the currency name.
   * @param {string} value - The new currency name.
   */
  set name(value) {
    this._name = value;
  }

  /**
   * Create the full string representation of this Currency.
   * @returns {string} The full currency string in the format: "name (code)".
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
