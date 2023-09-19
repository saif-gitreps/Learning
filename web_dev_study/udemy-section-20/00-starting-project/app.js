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
   // localhost:3000/restuarant/R1
   const filePath = path.join(__dirname, "data", "restaurants.json");
   const fileData = fs.readFileSync(filePath);
   const storedRestData = JSON.parse(fileData);

   const restaurantId = request.params.id;

   for (const restaurant of storedRestData) {
      if (restaurant.id == restaurantId) {
         response.render("restaurant-detail", { item: restaurant });
         return;
      }
   }
});

app.get("/recommend", (request, response) => {
   response.render("recommend");
});

app.post("/recommend", (request, response) => {
   const restaurant = request.body; // this probably returns an object.

   restaurant.id = uuid.v4(); // v4() method will give randomly generate unqiue id, in string.

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
