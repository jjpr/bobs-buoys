var express    = require('express');
var serveIndex = require('serve-index');
var path = require('path');

var app = express();

app.use('/data', express.static("data"));
app.use('/data', serveIndex('data', {'icons': true, 'view': 'details'}));
app.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.listen(8000);
