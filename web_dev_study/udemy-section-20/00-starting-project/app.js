//Importing express packages =>
const fs = require("fs"); // i kept this here for reference/education purpose , we dont use this in this file anymore.
const path = require("path");
const express = require("express");
const uuid = require("uuid"); // i kept this here for reference/education purpose , we dont use this in this file anymore.

//Importing custom files below =>
const defaultRoutes = require("./routes/default");
const restauarentRoutes = require("./routes/restaurants");

//initiating express app =>
const app = express();

//Middleware function =>
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

//Registering our customer routes using middleware method from different files =>
app.use("/", defaultRoutes);
app.use("/", restauarentRoutes);

//Middleware error handling functions below =>
app.use((request, response) => {
   response.status(500).send("404 Web page not found :/");
});

//This function will have 4 params , it must receive 4 params , that tells express that it is a special handler middlware function if some error occurs in our express application .
app.use((error, request, response, next) => {
   response.render("500");
});

app.listen(3000);
