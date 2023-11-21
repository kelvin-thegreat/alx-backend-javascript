const http = require('http');
const fs = require('fs');

// Function to read file asynchronously
function readFileAsync(filename, callback) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}

// Create a simple HTTP server
const app = http.createServer((req, res) => {
  // Set the content type to plain text
  res.setHeader('Content-Type', 'text/plain');

  // Handle different routes
  if (req.url === '/') {
    // Display "Hello Holberton School!" for the root path
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    // Display the list of students from the CSV file

    // Replace 'your_database_name.csv' with the actual database name
    const databaseName = "database.csv";

    readFileAsync(databaseName, (err, data) => {
      if (err) {
        res.end(`Error reading the file: ${err}\n`);
      } else {
        // Filter out empty lines
        const students = data.split('\n').filter((line) => line.trim() !== '');

        // Display the list of students
        res.end(`This is the list of our students:\n${students.join('\n')}\n`);
      }
    });
  } else {
    // Return a 404 response for unknown routes
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

// Set the server to listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app variable
module.exports = app;
