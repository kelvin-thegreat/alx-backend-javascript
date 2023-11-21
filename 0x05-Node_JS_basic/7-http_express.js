/*
Small HTTP server using Express:
Its assigned to the variable app and exported
HTTP server listens on port 1245
It returns plain text
When the URL path is /, it displays Hello Holberton School! in the page body
When the URL path is /students, it display This is the list of our students. 
*/
const express = require('express');
// Using fs.promises for promise-based file operations
const fs = require('fs').promises; 

const app = express();
const PORT = 1245;
const DB_FILE = process.argv[2] || '';

const countStudents = async (dataPath) => {
  try {
    const data = await fs.readFile(dataPath, 'utf-8');
    // ... (rest of the function remains the same)
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

const handleErrors = (res, err) => {
  const errorMessage = err instanceof Error ? err.message : err.toString();
  const responseText = `Error: ${errorMessage}`;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', Buffer.from(responseText).length);
  res.status(500).send(responseText);
};

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (_, res) => {
  try {
    const responseParts = ['This is the list of our students'];
    const report = await countStudents(DB_FILE);
    responseParts.push(report);
    const responseText = responseParts.join('\n');
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', Buffer.from(responseText).length);
    res.status(200).send(responseText);
  } catch (err) {
    handleErrors(res, err);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
