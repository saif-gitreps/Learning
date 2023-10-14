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

router.get("/post/:id", async (request, response) => {
   const query = `SELECT post.* , author.name AS author_name , 
                  author.email AS author_email from post 
                  INNER JOIN author ON (post.author_id = author.id)
                  WHERE post.id = ?`;
   const result = await db.query(query, [parseInt(request.params.id)]);
   const postList = result[0];
   if (!postList || postList.length == 0) {
      response.statusCode(404).render("404");
   }
   const postData = {
      ...postList[0],
      data: postList[0].date.toISOString(),
      humanReadableDate: postList[0].date.toLocaleDateString("en-UK", {
         weekday: "long",
         year: "numeric",
         month: "long",
         day: "numeric",
      }),
   };
   response.render("post-detail", { posts: postData });
});
module.exports = router;
