// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/1', (req, res) => {
  res.send('API 1 response');
});

app.get('/api/2', (req, res) => {
  res.send('API 2 response');
});

app.get('/api/3', (req, res) => {
  res.send('API 3 response');
});

app.get('/api/4', (req, res) => {
  res.send('API 4 response');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});