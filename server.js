var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/guide'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/guide/index.html'));
})

app.get('/:time', function (req, res) {
  var date = new Date((req.params.time));

  if (date.toDateString() === 'Invalid Date') {
    date = new Date(Number(req.params.time)*1000)
  }

  if (true) {
    res.json((parseDate(date)))
  }

})

function parseDate(date) {
  return {
    unix: (date.getTime()/1000),
    natural: date.toDateString()
  }
}

app.listen(port);
