/**
 * Class representing a building with square footage.
 */
export default class Building {
    /**
     * Create a new Building instance.
     * @param {number} sqft - The square footage of the building.
     */
    constructor(sqft) {
      this.sqft = sqft;
  
      // Check if this constructor is invoked directly.
      if (this.constructor !== Building) {
        // Ensure that a subclass overrides the evacuationWarningMessage method.
        if (typeof this.evacuationWarningMessage !== 'function') {
          throw new Error(
            'Class extending Building must override evacuationWarningMessage',
          );
        }
      }
    }
  
    /**
     * Get the square footage of the building.
     * @returns {number} - The square footage.
     */
    get sqft() {
      return this._sqft;
    }
  
    /**
     * Set the square footage of the building.
     * @param {number} value - The square footage to set.
     */
    set sqft(value) {
      this._sqft = value;
    }
  
    /**
     * This method should be overridden by subclasses to provide an evacuation warning message.
     * @throws {Error} - An error is thrown if not overridden.
     */
    evacuationWarningMessage() {
      throw new Error('evacuationWarningMessage must be implemented by subclasses');
    }
  }
  