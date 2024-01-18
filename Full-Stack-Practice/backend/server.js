const express = require("express");

const app = express();

app.get("/", (req, res) => {
   res.send("hi");
});

app.get("/api/jokes", (req, res) => {
   const jokes = [
      {
         id: 1,
         title: "A Joke",
         contents: "first joke",
      },
      {
         id: 2,
         title: "Another Joke",
         content: "second joke",
      },
      {
         id: 3,
         title: "Last Joke",
         content: "final joke",
      },
   ];
   res.send(jokes);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
   console.log("server ready at " + PORT);
});
