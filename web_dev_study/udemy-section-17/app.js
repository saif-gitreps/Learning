const http = require("http");

function handleRequest(request, respose) {
   response.statusCode = 200;
   //404 means url not found
   response.end("<h1> Hellow World </h1>");
}

const server = http.createServer();

server.listen(3000, handleRequest);
