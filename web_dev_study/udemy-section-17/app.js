const http = require("http");

function handleRequest(request, response) {
   response.statusCode = 200;
   //404 means url not found
   response.end("<h1> Hellow World </h1>");
}

const server = http.createServer(handleRequest);

function serverMessage() {
   console.log("hello");
}

server.listen(3000, serverMessage);
