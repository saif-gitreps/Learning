//show dbs;
//use ratingportal;
db.restaurants.insertOne({});

db.restaurants.insertOne({
   name: "munich",
   address: { street: "Street 5", steetNumber: "23" },
});

db.restaurants.insertOne({
   name: "Carl",
   address: { street: "Street 20", steetNumber: "24B" },
});

//Reading data:

db.restaurants.find();

db.restaurants.find({ name: "Carl" });

// 0 means dont show it, one means show it.
db.restaurants.find({}, { name: 0, _id: 1 });

db.restaurants.find({}, { name: 1 });

db.restaurants.find({}, { name: 0 });

db.restaurants.find({}, { name: 0, steetNumber: 0 });

db.restaurants.find({ address: { steetNumber: "24B" } });

db.restaurants.find({}, { address: 1 });

//To add a single document:

db.bools.insertOne({
   title: "nice",
   author: "Terry",
   pages: 300,
   rating: 5,
   genre: ["fantasy"],
});

//To add multiple documents:

//to see all the collections->  show collections
db.books.insertMany([
   { title: "Ole", author: "Koolaid", pages: 40, rating: 3, genre: ["horro"] },
   { title: "eclipse", author: "rry", pages: 800, rating: 8, genre: ["fantasy"] },
]);

//Giving sql like conditions:

db.books.find({ author: "Terry" }, { title: 1 });

db.books.find({ author: "Terry" }, { title: 1, _id: 0 });

//Filtering nested conditions:

db.books.find({ "reviews.name": "yoshi" });
//apparently we have to put stuffs like the nested property name under quotes.
