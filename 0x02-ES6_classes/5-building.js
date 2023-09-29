/**
 * Abstract class representing a building.
 */
export default class Building {
  /**
   * Create a new Building instance.
   * @param {number} sqft - The square footage of the building.
   */
  constructor(sqft) {
    /**
     * The square footage of the building.
     * @type {number}
     * @private
     */
    this._sqft = sqft;
  }

  /**
   * Get the square footage of the building.
   * @returns {number} The square footage.
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Abstract method for providing an evacuation warning message.
   * Subclasses must implement this method.
   * @abstract
   */
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
