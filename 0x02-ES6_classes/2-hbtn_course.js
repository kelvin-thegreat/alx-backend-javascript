/**
 *  Holberton course.
 */
export default HolbertonCourse;

/**
 * Represents a Holberton course.
 */
class HolbertonCourse {
  /**
   * Create a new Holberton course.
   * @param {string} name - The name of the course.
   * @param {number} length - The length of the course in weeks.
   * @param {string[]} students - An array of student names enrolled in the course.
   */
  constructor(name, length, students) {
    /**
     * The name of the course.
     * @type {string}
     * @private
     */
    this._name = this.validateString(name, 'name');

    /**
     * The length of the course in weeks.
     * @type {number}
     * @private
     */
    this._length = this.validateNumber(length, 'length');

    /**
     * An array of student names enrolled in the course.
     * @type {string[]}
     * @private
     */
    this._students = this.validateStudents(students, 'students');
  }

  /**
   * Get the name of the course.
   * @returns {string} The name of the course.
   */
  get name() {
    return this._name;
  }

  /**
   * Set the name of the course.
   * @param {string} newName - The new name of the course.
   */
  set name(newName) {
    this._name = this.validateString(newName, 'name');
  }

  /**
   * Get the length of the course in weeks.
   * @returns {number} The length of the course.
   */
  get length() {
    return this._length;
  }

  /**
   * Set the length of the course in weeks.
   * @param {number} newLength - The new length of the course.
   */
  set length(newLength) {
    this._length = this.validateNumber(newLength, 'length');
  }

  /**
   * Get the array of student names enrolled in the course.
   * @returns {string[]} An array of student names.
   */
  get students() {
    return this._students;
  }

  /**
   * Set the array of student names enrolled in the course.
   * @param {string[]} newStudents - An array of new student names.
   */
  set students(newStudents) {
    this._students = this.validateStudents(newStudents, 'students');
  }

  /**
   * Validate that a value is a string.
   * @param {string} value - The value to validate.
   * @param {string} attributeName - The name of the attribute being validated.
   * @returns {string} The validated string.
   * @throws {TypeError} If the value is not a string.
   * @private
   */
  validateString(value, attributeName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }

  /**
   * Validate that a value is a number and not NaN.
   * @param {number} value - The value to validate.
   * @param {string} attributeName - The name of the attribute being validated.
   * @returns {number} The validated number.
   * @throws {TypeError} If the value is not a valid number.
   * @private
   */
  validateNumber(value, attributeName) {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new TypeError(`${attributeName} must be a number`);
    }
    return value;
  }

  /**
   * Validate that an array contains only string elements.
   * @param {string[]} value - The array to validate.
   * @param {string} attributeName - The name of the attribute being validated.
   * @returns {string[]} The validated array of strings.
   * @throws {TypeError} If the array contains non-string elements.
   * @private
   */
  validateStudents(value, attributeName) {
    if (!Array.isArray(value) || !value.every(item => typeof item === 'string')) {
      throw new TypeError(`${attributeName} must be an array of strings`);
    }
    return value;
  }
}
