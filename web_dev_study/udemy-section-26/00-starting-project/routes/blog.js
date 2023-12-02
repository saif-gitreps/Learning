const express = require("express");
const db = require("../data/database");
const mongodb = require("mongodb");

const ObjectId = mongodb.ObjectId;

const router = express.Router();

router.get("/", function (req, res) {
   res.redirect("/posts");
});

router.get("/posts", function (req, res) {
   res.render("posts-list");
});

router.get("/new-post", async function (req, res) {
   const authors = await db.getDb().collection("authors").find().toArray();
   res.render("create-post", { authors: authors });
});

router.post("/posts", async (request, response) => {
   const author_id = new ObjectId(request.body.author);
   const author_name = await db.getDb.collection("authors").findOne({ _id: author_id });

   const newPost = {
      title: request.body.title,
      summary: request.body.summary,
      body: request.body.content,
      date: new Date(),
      author: {
         id: author_id,
         name: author_name,
      },
   };
});

module.exports = router;
