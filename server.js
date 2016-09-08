/**
 * Created by rande on 9/8/2016.
 */
// link to the http library that ships with the node
var http = require('http');

//launch the http server and send a response asunchronously
http.createServer(function(request, response)  {
    response.writeHead(200); //status ok
    response.end('First node page');
}).listen(3000);

console.log('Server running on port 3000');