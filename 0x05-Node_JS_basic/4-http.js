const http = require('http');

// Create a simple HTTP server
const app = http.createServer((req, res) => {
  // Set the content type to plain text
  res.setHeader('Content-Type', 'text/plain');

  // Send "Hello Holberton School!" as the response
  res.end('Hello Holberton School!\n');
});

// Set the server to listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export the app variable
module.exports = app;
