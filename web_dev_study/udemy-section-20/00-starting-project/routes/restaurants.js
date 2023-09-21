const express = require("express");
const uuid = require("uuid");

const router = express.Router();

const restaurantUtilData = require("../util/restaurant-data");

router.get("/restaurants", (request, response) => {
   const storedRestData = restaurantUtilData.getStoredRestaurant();
   response.render("restaurants", { numberOfRestaurant: storedRestData.length, restaurants: storedRestData });
});

router.get("/restaurants/:id", (request, response) => {
   // step 2 : The id that was accessd from the JSON FILE and sent through ejs file in the form of sub-route.

   const storedRestData = restaurantUtilData.getStoredRestaurant();

   // step 3 : The id is then parse or translated using a param object into a JSON property.
   const restaurantId = request.params.id;

   // step 4 : Now according to the html logic of the subroute , we match using id or the selected card and send the entire object from the arrays of object [if youre confused just reread and understand it], {next-step- -> restaurant=detail}. [note 'item' is the variable name that will be in the restauarent-details and we are passing an iterator from arrays of objects]
   for (const restaurant of storedRestData) {
      if (restaurant.id == restaurantId) {
         response.render("restaurant-detail", { item: restaurant });
         return;
      }
   }
   response.status(404).render("404");
});

router.get("/recommend", (request, response) => {
   response.render("recommend");
});

router.post("/recommend", (request, response) => {
   const restaurant = request.body;
   restaurant.id = uuid.v4();
   // v4() method will give randomly generate unqiue id, in string.
   // A new property in the newly submitted form in the form of 'id' will be added .

   const storedRestData = restaurantUtilData.getStoredRestaurant(); //this function is from util\restaurant-data.js

   storedRestData.push(restaurant);

   restaurantUtilData.storedRestaurants(storedRestData); //this function is from util\restaurant-data.js

   response.redirect("/confirm");
});

router.get("/confirm", (request, response) => {
   response.render("confirm");
});

module.exports = router;
