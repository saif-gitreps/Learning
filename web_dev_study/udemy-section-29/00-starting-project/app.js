const path = require("path");
const session = require("express-session");
const mongodbStore = require("connect-mongodb-session");

const express = require("express");

const db = require("./data/database");
const demoRoutes = require("./routes/demo");

//this mongodbstore is a class from which we can create new objects
const MongoDBStore = mongodbStore(session);

const app = express();

//this store is an object of the class MongoDBStore
const sessionStore = new MongoDBStore({
   //path to our database, exactly the same url used in data folder.
   uri: "mongodb://localhost:27017",
   databaseName: "auth-demo",
   collection: "sessions",
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use(
   session({
      secret: "super-secret",
      resave: false,
      saveUninitialized: false,
      store: sessionStore,
   })
);

app.use(demoRoutes);

app.use(function (error, req, res, next) {
   res.render("500");
});

db.connectToDatabase().then(function () {
   app.listen(3000);
});
