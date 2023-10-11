const express = require("express");
const db = require("../data/database");

const router = express.Router();

router.get("/", (request, response) => {
   response.redirect("/posts");
});

router.get("/posts", async (request, response) => {
   const query = `SELECT post.*, author.name AS author_name from post
    INNER JOIN author ON (post.author_id = author.id)`;
   // await as we know returns 2 datas in an array, one is our datas , other is metadata.
   const result = await db.query(query);
   const postsList = result[0];
   response.render("posts-list", { posts: postsList });
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
