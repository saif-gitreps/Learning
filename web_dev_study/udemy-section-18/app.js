const express = require("express");

const app = express();

app.get("/currenttime", (req, res, next) => {
   res.send("<h1>" + new Date().toISOString() + "</h1>");
}); // send request to localhost:3000/currenttime.

app.get("/", (req, res) => {
   res.send(
      "<form action='/store-user' method='POST'> <input type='text'> <button> Submit </button> </form>"
   );
}); // send request ot locahost:3000.

app.post("/store-user", (request, response) => {});

app.listen(3000);
