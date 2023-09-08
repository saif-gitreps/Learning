const http = require("http");

function handleRequest(request, response) {
   if (request.url == "/currenttime") {
      response.statusCode = 200;
      response.end("<h1>" + new Date().toISOString() + "</h1>");
   } else if (request.url == "/") {
      response.statusCode = 200;
      response.end("<h1> Hellow World </h1>");
   }
}

const server = http.createServer(handleRequest);

function serverMessage() {
   console.log("hello world i have entered");
}

server.listen(3000, serverMessage);
