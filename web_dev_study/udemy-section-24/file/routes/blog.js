const express = require("express");

const router = express.Router();

router.get("/", (request, response) => {
   response.redirect("/posts");
});

router.get("/posts", (request, response) => {
   response.render("posts-list");
});

module.exports = router;
