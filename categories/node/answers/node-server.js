var http = require(‘http’);

function requestHandler( req, res ) {
  response.end( ‘it works!’ + req.url );
}

var server = http.createServer( requestHandler );

server.listen( 3000, function() {
  console.log( ‘ the server is listening on port 3000 ‘ );
});