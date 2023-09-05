const express = require("express");

const app = express();

app.get("/currenttime", (req, res, next) => {
   res.send("<h1>" + new Date().toISOString() + "</h1>");
}); // send request to localhost:3000/currenttime.

app.get("/", (req, res, next) => {
   res.send("<h1> hello </h1>");
}); // send request ot locahost:3000.

app.listen(3000);
