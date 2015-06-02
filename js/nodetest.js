var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200);
    response.write("Hello this is dog.");
    setTimeout(function(){
        response.write("Dog is alive.");
        response.end();
    },5000);
}).listen(8080);

console.log('Listening on port 8080....');
