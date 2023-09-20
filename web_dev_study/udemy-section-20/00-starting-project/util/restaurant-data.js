const filePath = path.join(__dirname, "data", "restaurants.json");

function getStoredRestaurant() {
   const fileData = fs.readFileSync(filePath);
   const storedRestData = JSON.parse(fileData);
   return storedRestData;
}

function storedRestaurants(storableRestaurants) {
   fs.writeFileSync(filePath, JSON.stringify(storableRestaurants));
}
