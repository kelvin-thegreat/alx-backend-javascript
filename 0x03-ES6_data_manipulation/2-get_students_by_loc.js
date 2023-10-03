/**
 * Filters an array of student objects by location.
 *
 * @param {Array} studentsArray - An array of student objects.
 * @param {string} city - The city to filter students by.
 * @returns {Array} - An array of student objects located in the specified city.
 */
function getStudentsByLocation(studentsArray, city) {
  return studentsArray.filter(student => student.location === city);
}

export default getStudentsByLocation;
