export default function createIteratorObject(report) {
  const departments = Object.keys(report.allEmployees);
  let departmentIndex = 0;
  let employeeIndex = 0;

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (departmentIndex < departments.length) {
        const currentDepartment = departments[departmentIndex];
        const employees = report.allEmployees[currentDepartment];

        if (employeeIndex < employees.length) {
          const employee = employees[employeeIndex];
          // eslint-disable-next-line no-plusplus
          employeeIndex++;
          return { value: employee, done: false };
        }
        // Move to the next department
        // eslint-disable-next-line no-plusplus
        departmentIndex++;
        employeeIndex = 0;
        return this.next(); // Recursively call next() for the next department
      }

      return { done: true };
    },
  };
}
