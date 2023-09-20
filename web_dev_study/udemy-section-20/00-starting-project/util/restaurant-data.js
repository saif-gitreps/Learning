function getStoredRestaurant() {
   const filePath = path.join(__dirname, "data", "restaurants.json");
   const fileData = fs.readFileSync(filePath);
   const storedRestData = JSON.parse(fileData);
   return storedRestData;
}
