const router = require("express").Router();
const userController = require("../controllers/user.controller");
const upload = require("../middlewares/multer.middleware");
const verifyJWT = require("../middlewares/auth.middleware");

// for complex routes that may involve multiple HTTP methods,
// the router.route() approach can enhance readability and maintainability.
// Ultimately, the choice depends on your preference and the specific needs of your application.
router.route("/register").post(
   upload.fields([
      {
         name: "avatar",
         maxCount: 1,
      },
      {
         name: "coverImage",
         maxCount: 1,
      },
   ]),
   userController.register
);

router.route("/login").post(userController.loginUser);

// secure routes

// we ad the authentication middleware here, this will check if an authenticated
// req is being sent.note: we can add as many middleware as we need on the paramter.
router.route("/logout").post(verifyJWT, userController.logoutUser);

module.exports = router;
