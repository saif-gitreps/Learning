// importing file system package.
const fs = require("fs");

// importing path package to make directory path easier.
const path = require("path");

// importing express.js
const express = require("express");

const app = express();

// parsing every request data (JSON) to readable js code.
app.use(express.urlencoded({ extended: false }));

app.get("/currenttime", (req, res, next) => {
   res.send("<h1>" + new Date().toISOString() + "</h1>");
}); // send request to localhost:3000/currenttime.

app.get("/", (req, res) => {
   res.send(
      "<form action='/store-user' method='POST'> <label> Enter your name : </label><input type='text' name='username'> <button> Submit </button> </form>"
   );
}); // send request ot locahost:3000.

app.post("/store-user", (request, response) => {
   // holds the data that was sent.
   const userName = request.body.username;

   // making a global path for the text file
   const filePath = path.join(__dirname, "data", "users.json");

   const fileData = fs.readFileSync(filePath);
   const existingUsers = JSON.parse(fileData);

   // adding new value as in array to the json textfile (now it is in array).
   existingUsers.push(userName);

   // converting to .json format
   fs.writeFileSync(filePath, JSON.stringify(existingUsers));

   response.send("<h1>" + userName + "</h1>");
});

app.get("/users", (request, response) => {
   const filePath = path.join(__dirname, "data", "users.json");
   const fileData = fs.readFileSync(filePath);
   const existingUsers = JSON.parse(fileData);

   let responseData = "<ul>";

   for (let item of existingUsers) {
      responseData += "<li> " + item + "</li>";
   }

   responseData += "</ul>";

   response.send(responseData);
});

app.listen(3000);
