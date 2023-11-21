/* eslint-disable jest/require-hook */
const http = require('http');

// eslint-disable-next-line linebreak-style
// Create simple HTTP server
const app = http.createServer((req, res) => {
  // Set content type to plain text
  res.setHeader('Content-Type', 'text/plain');

  // Send "Hello Holberton School!" as the response
  res.end('Hello Holberton School!\n');
});

// Set server to listen port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Export app
module.exports = app;
