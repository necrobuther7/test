const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join(__dirname, '/dist/')));

app.get('/*', (req, res) => {
  const fullPath = path.join(__dirname + '/dist/ubcrm/index.html');
  res.sendFile(fullPath);
  console.log('server ready !');
});

app.listen(port);