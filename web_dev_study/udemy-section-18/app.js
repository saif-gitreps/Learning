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

   const filePath = path.join(__dirname, "data", "users.json");

   const fileData = fs.readFileSync(filePath);
   const existingUsers = JSON.parse(fileData);

   existingUsers.push(userName);

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
