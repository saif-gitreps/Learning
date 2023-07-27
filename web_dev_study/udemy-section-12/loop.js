const users = ["max", "arizona", "point"];

const loggedInUser = { name: "max", age: 32, isAdmin: true };

for (let key in loggedInUser) {
  console.log(loggedInUser[key]);
}
