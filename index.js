const express = require('express');
const app = express();
const port = 3000;

// Root endpoint: returns a welcome message
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the simple Node.js REST API!' });
});

// Reverse endpoint: returns the reversed string from the input parameter
app.get('/reverse/:input', (req, res) => {
  const input = req.params.input;
  const reversed = input.split('').reverse().join('');
  res.json({ reversed });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;
