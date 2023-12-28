const express = require("express");
const bcrypt = require("bcryptjs");

const db = require("../data/database");

const router = express.Router();

router.get("/", function (req, res) {
   res.render("welcome");
});

router.get("/signup", function (req, res) {
   res.render("signup");
});

router.get("/login", function (req, res) {
   res.render("login");
});

router.post("/signup", async function (req, res) {
   const userData = req.body;
   const enteredEmail = userData.email;
   // we are using index hashing because confirm email has a hyfen in it in form.
   const enteredConfirmEmail = userData["confirm-email"];
   const enteredPassword = userData.password;

   const user = {
      email: enteredEmail,
      password: await bcrypt.hash(enteredPassword, 12),
   };

   await db.getDb().collection("users").insertOne(user);
   res.redirect("/login");
});

router.post("/login", async function (req, res) {
   const userData = req.body;
   const enteredEmail = userData.email;
   const enteredPassword = userData.password;

   const existingUser = await db
      .getDb()
      .collection("users")
      .findOne({ email: enteredEmail });

   if (!existingUser) {
      console.log("User does not exist");
      return res.redirect("/login");
   }
   // this is another way of doing async await.
   // bcrypt.compare(enteredPassword, existingUser.password).then(function (result) {
   //    if (result) {
   //       console.log("User logged in");
   //       res.redirect("/admin");
   //    } else {
   //       console.log("password do not match");
   //       res.redirect("/login");
   //    }
   // });

   const passwordCheck = await bcrypt.compare(enteredPassword, existingUser.password);

   if (!passwordCheck) {
      console.log("password do not match");
      return res.redirect("/login");
   }

   console.log("User logged in");
   res.redirect("/admin");
});

router.get("/admin", function (req, res) {
   res.render("admin");
});

router.post("/logout", function (req, res) {});

module.exports = router;
