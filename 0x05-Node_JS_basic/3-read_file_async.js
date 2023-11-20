const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    // Attempt to read the CSV file asynchronously
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        // Split the CSV data into rows
        const rows = data.split('\n').filter(Boolean); // Filter out empty lines

        // Check if there are any students in the database
        if (rows.length <= 1) {
          reject(new Error('Cannot load the database. No students found.'));
        }

        // Get the header (assumed to be the first line)
        const header = rows[0].split(',');

        // Create an object to store counts for each field
        const fieldCounts = {};

        // Loop through the header to initialize counts
        header.forEach((field) => {
          fieldCounts[field] = {
            count: 0,
            students: [],
          };
        });

        // Loop through the rows and count students for each field
        for (let i = 1; i < rows.length; i++) {
          const values = rows[i].split(',');
          values.forEach((value, index) => {
            if (value.trim() !== '') {
              // Increment count for non-empty values
              fieldCounts[header[index]].count += 1;
              fieldCounts[header[index]].students.push(value.trim());
            }
          });
        }

        // Log the number of students in each field
        console.log(`Number of students: ${rows.length - 1}`);
        Object.keys(fieldCounts).forEach((field) => {
          const count = fieldCounts[field].count;
          const studentList = fieldCounts[field].students.join(', ');
          console.log(`Number of students in ${field}: ${count}. List: ${studentList}`);
        });

        resolve();
      }
    });
  });
}

// Uncomment the following lines for testing
// countStudents("nope.csv")
//   .then(() => {
//     console.log("Done!");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// countStudents("database.csv")
//   .then(() => {
//     console.log("Done!");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

module.exports = countStudents;
