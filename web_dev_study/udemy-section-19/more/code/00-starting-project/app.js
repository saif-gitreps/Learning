const fs = require("fs");

const path = require("path");

const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

app.get("/", (request, response) => {
   const frontPage = path.join(__dirname, "views", "index.html");
   response.sendFile(frontPage);
});
app.get("/restaurants", (request, response) => {
   const restaurantsHtml = path.join(__dirname, "views", "restaurants.html");
   response.sendFile(restaurantsHtml);
});

app.get("/recommend", (request, response) => {
   const recommendHtml = path.join(__dirname, "views", "recommend.html");
   response.sendFile(recommendHtml);
});

app.post("/recommend", (request, response) => {
   const restaurant = request.body; // this probably returns an object.

   const filePath = path.join(__dirname, "data", "restaurants.json");
   const fileData = fs.readFileSync(filePath);
   const storedRestData = JSON.parse(fileData);

   storedRestData.push(restaurant);

   fs.writeFileSync(filePath, JSON.stringify(storedRestData));

   response.redirect("/confirm");
});

app.get("/confirm", (request, response) => {
   const confirmHtml = path.join(__dirname, "views", "confirm.html");
   response.sendFile(confirmHtml);
});

app.get("/about", (request, response) => {
   const aboutPage = path.join(__dirname, "views", "about.html");
   response.sendFile(aboutPage);
});

app.listen(3000);
