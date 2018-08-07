const express = require('express');
const path = require('path');
var compression = require('compression');
// Constants
const PORT = 80;
const app = express();
// App
app.use(express.static('./build'));
app.use(compression());

app.use('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
