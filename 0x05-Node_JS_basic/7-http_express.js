const express = require('express');
const fs = require('fs'); 

const app = express();
const PORT = 1245;
const DB_FILE = process.argv[2] || '';

const countStudents = async (dataPath) => {
  try {
    const data = await fs.readFile(dataPath, 'utf-8');
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
