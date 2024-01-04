const path = require("path");

const express = require("express");
const session = require("express-session");
const mongodbStore = require("connect-mongodb-session");
const csrf = require("csurf");

const db = require("./data/database");
const blogRoutes = require("./routes/blog");
const authRoutes = require("./routes/auth");
const authMiddleware = require("./middleware/auth_middleware");
const addCSRFtokenMiddleware = require("./middleware/CSRF-token-middleware");

const MongoDBStore = mongodbStore(session);

const app = express();

const sessionStore = new MongoDBStore({
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
      cookie: {
         maxAge: 2 * 24 * 60 * 60 * 1000,
      },
   })
);
app.use(csrf());

app.use(addCSRFtokenMiddleware);

app.use(authMiddleware.auth);

app.use(blogRoutes);
app.use(authRoutes);

app.use(function (error, req, res, next) {
   res.render("500");
});

db.connectToDatabase().then(function () {
   app.listen(3000);
});
