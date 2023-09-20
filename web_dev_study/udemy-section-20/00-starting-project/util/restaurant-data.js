const fs = require("fs");

const filePath = path.join(__dirname, "data", "restaurants.json");

function getStoredRestaurant() {
   const fileData = fs.readFileSync(filePath);
   const storedRestData = JSON.parse(fileData);
   return storedRestData;
}

function storedRestaurants(storableRestaurants) {
   fs.writeFileSync(filePath, JSON.stringify(storableRestaurants));
}

module.exports = {
   // we are exported these functions , so we are passing a key and a pointer as object poperties to be requirable in other node js file.
   // In other file it will be a callable method.
   getStoredRestaurant: getStoredRestaurant,
   storedRestaurants: storedRestaurants,
};
