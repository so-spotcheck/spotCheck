var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('it works!' + req.url)
});

app.all('*', function(req, res) {
  res.send('non-homepage request' + req.url)
})

app.listen(3000, function() {
  console.log('the server is listening on port 3000');
});
