/**
 * getStudentIdsSum - Calculate the sum of student IDs.
 *
 * This function takes an array of student objects and calculates the sum
 * of their IDs using the reduce function.
 *
 * @param {Array} students - An array of student objects.
 * @returns {number} - The sum of all student IDs.
 */
export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce((prevStudent, curStudent) => prevStudent + curStudent.id, 0);
  }

  return 0;
}
