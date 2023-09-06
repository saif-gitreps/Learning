const fs = require("fs");
const path = require("path");

const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/currenttime", (req, res, next) => {
   res.send("<h1>" + new Date().toISOString() + "</h1>");
}); // send request to localhost:3000/currenttime.

app.get("/", (req, res) => {
   res.send(
      "<form action='/store-user' method='POST'> <input type='text' name='username'> <button> Submit </button> </form>"
   );
}); // send request ot locahost:3000.

app.post("/store-user", (request, response) => {
   const userName = request.body.username;

   fs.writeFileSync("");

   response.send("<h1>" + userName + "</h1>");
});

app.listen(3000);
