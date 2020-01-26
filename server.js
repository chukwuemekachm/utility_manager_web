/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('dist'));
app.use(express.static('docs'));

app.get('/storybook', function(req, res) {
  return res.status(200).sendFile(path.join(__dirname, 'docs`', 'index.html'));
});

app.all('*', function(req, res) {
  return res.status(200).sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT);

module.exports = app;
