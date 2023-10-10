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

router.post("/posts", async (request, response) => {
   const data = request.body;
   const blogData = [data.title, data.summary, data.content, data.author];
   await db.query("INSERT INTO post(title,summary, body, author_id) VALUES(?)", [blogData]);
   response.redirect("/posts");
});

module.exports = router;
