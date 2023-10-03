/**
 * Updates the grades of students in a given city.
 *
 * @param {Object[]} students - The list of students.
 * @param {string} city - The city of students.
 * @param {Object[]} newGrades - The new grades to be given to students.
 * @returns {Object[]} - An array of students with updated grades.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students)) return [];

  const defaultGrade = { grade: 'N/A' };

  return students
    .filter(student => student.location === city)
    .map(student => ({
      id: student.id,
      firstName: student.firstName,
      location: student.location,
      grade: (newGrades.find(grade => grade.studentId === student.id) || defaultGrade).grade,
    }));
}