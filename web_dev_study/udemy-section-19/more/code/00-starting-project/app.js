const fs = require("fs");

const path = require("path");

const express = require("express");

const app = express();

app.get("/", (request, response) => {});

app.get("/restaurants", (request, response) => {
   const restaurantsHtml = path.join(__dirname, "views", "restaurants.html");
   response.sendFile(restaurantsHtml);
});

app.listen(3000);
