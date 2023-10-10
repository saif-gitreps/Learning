const express = require("express");
const db = require("../data/database");

const router = express.Router();

router.get("/", (request, response) => {
   response.redirect("/posts");
});

router.get("/posts", (request, response) => {
   response.render("posts-list");
});

router.get("/new-post", async (request, response) => {
   const result = await db.query("SELECT * FROM author");
   const authors = result[0];
   response.render("create-post", { authors: authors });
});

router.post("/posts", (request, response) => {
   const blogData = request.body;
   db.query(
      "INSERT INTO post(title,summary, body, author_id) VALUES(blogData.title ,blogData.summary, blogData.content, blogData.author)"
   );
});

module.exports = router;
