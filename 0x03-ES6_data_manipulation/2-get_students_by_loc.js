/**
 * Filters an array of student objects by location.
 *
 * @param {Array} studentsArray - An array of student objects.
 * @param {string} city - The city to filter students by.
 * @returns {Array} - An array of student objects located in the specified city.
 */
export default function getStudentsByLocation(students, city) {
    if (students instanceof Array) {
      return students.filter((student) => student.location === city);
    }
    return [];
  }
