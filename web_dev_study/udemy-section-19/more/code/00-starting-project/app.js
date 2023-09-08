const fs = require("fs");

const path = require("path");

const express = require("express");

const app = express();

app.get("/", (request, response) => {
   const frontPage = path.join(__dirname, "views", "index.html");
   response.send(frontPage);
});
app.get("/restaurants", (request, response) => {
   const restaurantsHtml = path.join(__dirname, "views", "restaurants.html");
   response.sendFile(restaurantsHtml);
});

app.get("/recommend", (request, response) => {
   const recommendHtml = path.join(__dirname, "views", "recommend.html");
   response.sendFile(recommendHtml);
});

app.get("/confirm", (request, response) => {
   const confirmHtml = path.join(__dirname, "views", "confirm.html");
   response.send(confirmHtml);
});

app.get("/about", (request, response) => {
   const aboutPage = path.join(__dirname, "views", "about.html");
   response.send(aboutPage);
});

app.listen(3000);
