/**
 * Represents a Holberton Course.
 */
export default class HolbertonCourse {
    /**
     * Creates a new HolbertonCourse.
     *
     * @param {String} name - Course Name.
     * @param {Number} length - Course Lenght (in months).
     * @param {String[]} students - The names of students in the course.
     */
    constructor(name, length, students) {
      this.name = name;
      this.length = length;
      this.students = students;
    }
  
    /**
     * getter
     * Gets the name of this course.
     */
    get name() {
      return this._name;
    }
  
    /**
     * length setter
     * Sets the name of this course.
     */
    set name(value) {
      if (typeof value !== 'string') {
        throw new TypeError('Name must be a string');
      }
      this._name = value;
    }
  
    /**
     * length getter
     * Gets the length of this course (in months).
     */
    get length() {
      return this._length;
    }
  
    /**
     * Lenght Setter
     * Sets the length of this course (in months).
     */
    set length(value) {
      if (typeof value !== 'number') {
        throw new TypeError('Length must be a number');
      }
      this._length = value;
    }
  
    /**
     * Lenght getter
     * Gets the names of students in this course.
     */
    get students() {
      return this._students;
    }
  
    /**
     * setters
     * Sets the names of students in this course.
     */
    set students(value) {
      if (!(value instanceof Array)) {
        throw new TypeError('Students must be an array of strings');
      }
      if (!value.every((student) => typeof student === 'string')) {
        throw new TypeError('Students must be an array of strings');
      }
      this._students = value;
    }
  }