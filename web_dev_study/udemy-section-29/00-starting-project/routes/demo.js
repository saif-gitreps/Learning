const express = require("express");
const bcrypt = require("bcryptjs");

const db = require("../data/database");

const router = express.Router();

router.get("/", function (req, res) {
   res.render("welcome");
});

router.get("/signup", function (req, res) {
   let sessionInputData = req.session.inputData;
   // now we take that session data that was stored in case the user makes mistake and load it up and send as ejs
   if (!sessionInputData) {
      sessionInputData = {
         hasError: false,
         message: null,
         email: "",
         confirmEmail: "",
         password: "",
      };
   }
   req.session.inputData = null;
   res.render("signup", { inputData: sessionInputData });
});

router.get("/login", function (req, res) {
   let sessionInputData = req.session.inputData;
   // now we take that session data that was stored in case the user makes mistake and load it up and send as ejs
   if (!sessionInputData) {
      sessionInputData = {
         hasError: false,
         message: null,
         email: "",
         password: "",
      };
   }
   req.session.inputData = null;

   res.render("login", { inputData: sessionInputData });
});

router.post("/signup", async function (req, res) {
   const userData = req.body;
   const enteredEmail = userData.email;
   // we are using index hashing because confirm email has a hyfen in it in form.
   const enteredConfirmEmail = userData["confirm-email"];
   const enteredPassword = userData.password;

   if (
      !enteredEmail ||
      !enteredConfirmEmail ||
      !enteredPassword ||
      enteredEmail !== enteredConfirmEmail ||
      enteredPassword.trim().length < 4
   ) {
      console.log("Invalid input");
      // this data will be stored in our session and it will load in the signup page again.
      req.session.inputData = {
         hasError: true,
         message: "invalid input",
         email: enteredEmail,
         confirmEmail: enteredConfirmEmail,
         password: enteredPassword,
      };

      req.session.save(function () {
         res.redirect("/signup");
      });
      return;
   }

   const existingUser = await db
      .getDb()
      .collection("users")
      .findOne({ email: enteredEmail });

   if (existingUser) {
      req.session.inputData = {
         hasError: true,
         message: "User exists already!",
         email: enteredEmail,
         confirmEmail: enteredConfirmEmail,
         password: enteredPassword,
      };
      req.session.save(function () {
         res.redirect("/signup");
      });
      return;
   }

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
      req.session.inputData = {
         hasError: true,
         message: "Please check your input credentials again!",
         email: enteredEmail,
         password: enteredPassword,
      };
      req.session.save(function () {
         res.redirect("/login");
      });
      return;
   }
   /*-----------------------------------------------
      this is another way of doing async await.
      bcrypt.compare(enteredPassword, existingUser.password).then(function (result) {
         if (result) {
            console.log("User logged in");
            res.redirect("/admin");
         } else {
            console.log("password do not match");
            res.redirect("/login");
         }
      });
   -------------------------------------------------*/

   const passwordCheck = await bcrypt.compare(enteredPassword, existingUser.password);

   if (!passwordCheck) {
      req.session.inputData = {
         hasError: true,
         message: "Please check your input credentials again!",
         email: enteredEmail,
         password: enteredPassword,
      };
      req.session.save(function () {
         res.redirect("/login");
      });
      return;
   }

   req.session.user = {
      id: existingUser._id,
      email: existingUser.email,
   };
   req.session.isAuthenticated = true;
   req.session.save(function () {
      res.redirect("/admin");
   });
});

router.get("/admin", async function (req, res) {
   if (!req.session.isAuthenticated) {
      return res.status(401).render("401");
   }

   const user = await db
      .getDb()
      .collection("users")
      .findOne({ _id: req.session.user.id });
   if (!user || !user.isAdmin) {
      res.status(403).render("403");
   }

   res.render("admin");
});

router.post("/logout", function (req, res) {
   req.session.user = null;
   req.session.isAuthenticated = false;
   req.session.save(function () {
      res.redirect("/");
   });
});

router.get("/profile", function (req, res) {
   if (!req.session.isAuthenticated) {
      return res.status(401).render("401");
   }
   res.render("profile");
});

module.exports = router;
