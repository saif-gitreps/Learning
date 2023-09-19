const fs = require("fs");
const path = require("path");
const express = require("express");
const uuid = require("uuid");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (request, response) => {
   response.render("index");
});
app.get("/restaurants", (request, response) => {
   const filePath = path.join(__dirname, "data", "restaurants.json");
   const fileData = fs.readFileSync(filePath);
   const storedRestData = JSON.parse(fileData);
   response.render("restaurants", { numberOfRestaurant: storedRestData.length, restaurants: storedRestData });
});

app.get("/restaurants/:id", (request, response) => {
   // step 2 : The id that was accessd from the JSON FILE and sent through ejs file in the form of sub-route.
   const filePath = path.join(__dirname, "data", "restaurants.json");
   const fileData = fs.readFileSync(filePath);
   const storedRestData = JSON.parse(fileData);

   // step 3 : The id is then parse or translated using a param object into a JSON property.
   const restaurantId = request.params.id;

   // step 4 : Now according to the html logic of the subroute , we match using id or the selected card and send the entire object from the arrays of object [if youre confused just reread and understand it], {next-step- -> restaurant=detail}. [note 'item' is the variable name that will be in the restauarent-details and we are passing an iterator from arrays of objects]
   for (const restaurant of storedRestData) {
      if (restaurant.id == restaurantId) {
         response.render("restaurant-detail", { item: restaurant });
         return;
      }
   }
   response.send("<h1>Eror 404 not found</h1>");
});

app.get("/recommend", (request, response) => {
   response.render("recommend");
});

app.post("/recommend", (request, response) => {
   const restaurant = request.body;

   restaurant.id = uuid.v4();
   // v4() method will give randomly generate unqiue id, in string.
   // A new property in the newly submitted form in the form of 'id' will be added .
   const filePath = path.join(__dirname, "data", "restaurants.json");
   const fileData = fs.readFileSync(filePath);
   const storedRestData = JSON.parse(fileData);

   storedRestData.push(restaurant);

   fs.writeFileSync(filePath, JSON.stringify(storedRestData));
   response.redirect("/confirm");
});

app.get("/confirm", (request, response) => {
   response.render("confirm");
});

app.get("/about", (request, response) => {
   response.render("about");
});

app.listen(3000);
