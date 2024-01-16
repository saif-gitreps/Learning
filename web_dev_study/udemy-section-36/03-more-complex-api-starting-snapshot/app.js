const express = require("express");

const db = require("./data/database");
const todosRoutes = require("./routes/todo-routes");

const app = express();

app.use((req, res, next) => {
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
   next();
});

app.use(express.json());

app.use("/todos", todosRoutes);

app.use(function (error, req, res, next) {
   res.status(500).json({
      message: "Something went wrong on the server!",
   });
});

db.initDb()
   .then(function () {
      app.listen(3000);
   })
   .catch(function (error) {
      console.log("Connecting to the database failed!");
   });
