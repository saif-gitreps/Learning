const express = require("express");

const router = express.Router();

router.get("/", (request, response) => {
   response.render("index");
});

router.get("/about", (request, response) => {
   response.status(404).render("about");
});

module.exports = router;
