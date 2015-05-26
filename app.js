var express    = require('express')
var serveIndex = require('serve-index')

var app = express()

app.use(express.static("data"))
app.use('/', serveIndex('data', {'icons': true}))
app.listen(8000)
