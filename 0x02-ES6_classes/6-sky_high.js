  /**
   * Import the Building class from the 5-building module
   * 
   */
import Building from './5-building';

  /**
   * Define a subclass SkyHighBuilding that extends the Building class
   */
export default class SkyHighBuilding extends Building {
  /**
   * Create a new SkyHighBuilding instance.
   * @param {number} sqft - The square footage of the building.
   * @param {number} floors - The number of floors in the building.
   */
  constructor(sqft, floors) {
    super(sqft);
    this.floors = floors;
  }

  /**
   * Get the number of floors in the building.
   * @returns {number} - The number of floors.
   */
  get floors() {
    return this._floors; // Use _floors to store the value
  }

  /**
   * Set the number of floors in the building.
   * @param {number} value - The number of floors to set.
   */
  set floors(value) {
    this._floors = value; // Use _floors to store the value
  }

  /**
   * Override the evacuationWarningMessage method to provide a custom message.
   * @returns {string} - The evacuation warning message.
   */
  evacuationWarningMessage() {
    // Return a message with the number of floors
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
