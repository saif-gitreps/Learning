const express = require("express");
const db = require("../data/database");
const mongodb = require("mongodb");

const ObjectId = mongodb.ObjectId;

const router = express.Router();

router.get("/", function (req, res) {
   res.redirect("/posts");
});

router.get("/posts", async function (req, res) {
   const posts = await db
      .getDb()
      .collection("posts")
      .find({}, { title: 1, summary: 1, "author.name": 1 })
      .toArray();
   res.render("posts-list", { posts: posts });
});

router.get("/new-post", async function (req, res) {
   const authors = await db.getDb().collection("authors").find().toArray();
   res.render("create-post", { authors: authors });
});

router.post("/posts", async (request, response) => {
   const author_id = new ObjectId(request.body.author);
   const author = await db.getDb().collection("authors").findOne({ _id: author_id });

   const newPost = {
      title: request.body.title,
      summary: request.body.summary,
      body: request.body.content,
      date: new Date(),
      author: {
         id: author_id,
         name: author.name,
         email: author.email,
      },
   };
   await db.getDb().collection("posts").insertOne(newPost);
   response.redirect("/posts");
});

module.exports = router;
