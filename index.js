const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the simple Node.js REST API!' });
});

app.get('/reverse/:input', (req, res) => {
  const input = req.params.input;
  const reversed = input.split('').reverse().join('');
  res.json({ reversed });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;
