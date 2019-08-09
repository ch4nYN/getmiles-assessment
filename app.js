const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname, 'dist'));
app.get('*', (req, res, next) => {
  res.sendFile(path.join('dist', 'index.html'));
})

const port = process.env.PORT || 5000;
app.listen(port, err => {
  if (err) return console.log(err);
  console.log('server running on port ' + port);
})