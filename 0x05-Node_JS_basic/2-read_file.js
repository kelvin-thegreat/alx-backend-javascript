const fs = require('fs');

function countStudents(path) {
  try {
    // Read the CSV file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the CSV data into rows
    const rows = data.split('\n').filter(Boolean); // Filter out empty lines

    // Check if there are any students in the database
    if (rows.length <= 1) {
      throw new Error('Cannot load the database. No students found.');
    }

    // Get the header (assumed to be the first line)
    const header = rows[0].split(',');

    // Create an object to store counts for each field
    const fieldCounts = {};

    // Loop through the header to initialize counts
    header.forEach(field => {
      fieldCounts[field] = 0;
    });

    // Loop through the rows and count students for each field
    for (let i = 1; i < rows.length; i++) {
      const values = rows[i].split(',');
      values.forEach((value, index) => {
        if (value.trim() !== '') {
          // Increment count for non-empty values
          fieldCounts[header[index]] += 1;
        }
      });
    }

    // Log the number of students in each field
    console.log(`Number of students: ${rows.length - 1}`);
    Object.keys(fieldCounts).forEach(field => {
      const fieldList = getFieldList(rows, header.indexOf(field));
      console.log(`Number of students in ${field}: ${fieldCounts[field]}. List: ${fieldList}`);
    });

  } catch (error) {
    // Handle errors, e.g., if the file is not found
    console.error(`Error: ${error.message}`);
  }
}

// Helper function to get a comma-separated list of values in a specific field
function getFieldList(rows, fieldIndex) {
  return rows.slice(1).map(row => row.split(',')[fieldIndex]).filter(value => value.trim() !== '').join(', ');
}

// Export the countStudents function
module.exports = countStudents;
