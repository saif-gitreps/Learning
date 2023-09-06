const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/", (request, response) => {
   response.send(
      "<form action = '/user' method = 'POST'> <input name = 'username'> <button>click here buddy</button> </form>"
   );
});

app.post("/user", (request, response) => {
   let userName = request.body.username;
   response.send("<p>" + userName + "</p>");
});

app.listen(3000, () => {
   console.log("im listening , smooooooooooth operatorrrrrrr");
});
