const express = require("express");
const blogControllers = require("../controllers/post-controllers");
const protectRoute = require("../middleware/auth-protection-middleware");
const router = express.Router();

router.get("/", blogControllers.getHome);

router.get("/admin", protectRoute, blogControllers.getAdmin);

router.post("/posts", protectRoute, blogControllers.createPost);

router.get("/posts/:id/edit", protectRoute, blogControllers.getSinglePost);

router.post("/posts/:id/edit", protectRoute, blogControllers.updatePost);

router.post("/posts/:id/delete", protectRoute, blogControllers.deletePost);

module.exports = router;
