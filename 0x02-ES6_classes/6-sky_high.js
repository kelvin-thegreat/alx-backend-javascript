// Import the Building class from the 5-building module
import Building from './5-building';

// Create a subclass SkyHighBuilding that extends the Building class
export default class SkyHighBuilding extends Building {
  // Constructor for SkyHighBuilding, which takes two parameters: sqft and floors
  constructor(sqft, floors) {
    // Call the parent class constructor with sqft parameter
    super(sqft);
    
    // Set the floors attribute using the provided value
    this.floors = floors;
  }

  // Getter method for the floors attribute
  get floors() {
    return this._floors; // Use _floors to store the value
  }

  // Setter method for the floors attribute
  set floors(value) {
    this._floors = value; // Use _floors to store the value
  }

  // Override the evacuationWarningMessage method
  evacuationWarningMessage() {
    // Return a message with the number of floors
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
