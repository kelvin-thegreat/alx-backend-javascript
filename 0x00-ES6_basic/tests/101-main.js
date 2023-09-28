// eslint-disable-next-line import/extensions
import createEmployeesObject from './11-createEmployeesObject.js';
// eslint-disable-next-line import/extensions
import createReportObject from './12-createReportObject.js';
// eslint-disable-next-line import/extensions
import createIteratorObject from './100-createIteratorObject.js';
// eslint-disable-next-line import/extensions
import iterateThroughObject from './101-iterateThroughObject.js';

const employees = {
  ...createEmployeesObject('engineering', ['Bob', 'Jane']),
  ...createEmployeesObject('marketing', ['Sylvie']),
};

const report = createReportObject(employees);
const reportWithIterator = createIteratorObject(report);

console.log(iterateThroughObject(reportWithIterator));
