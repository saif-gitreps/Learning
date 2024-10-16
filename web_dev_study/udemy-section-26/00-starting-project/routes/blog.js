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
      .find({})
      .project({ title: 1, summary: 1, "author.name": 1 })
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

router.get("/posts/:id", async (request, response) => {
   const postID = request.params.id;
   const post = await db
      .getDb()
      .collection("posts")
      .findOne({ _id: new ObjectId(postID) }, { summary: 0 });
   // .project({ summary: 0 });
   if (!post) {
      return response.statusCode(404).render("404");
   }
   // so remember this weird javascript feature where if a property does not exist
   // in an object , we can create one just like this.
   post.humanReadableDate = post.date.toLocaleDateString("en-Us", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
   });
   post.date = post.date.toISOString();

   response.render("post-detail", { post: post });
});

router.get("/posts/:id/edit", async (request, response) => {
   const postID = request.params.id;
   const post = await db
      .getDb()
      .collection("posts")
      .findOne({ _id: new ObjectId(postID) }, { title: 1, summary: 1, body: 1 });
   if (!post) {
      return response.statusCode(404).render("404");
   }

   response.render("update-post", { post: post });
});

router.post("/posts/:id/edit", async (request, response) => {
   try {
      const postID = new ObjectId(request.params.id);
      const result = await db
         .getDb()
         .collection("posts")
         .updateOne(
            { _id: postID },
            {
               $set: {
                  title: request.body.title,
                  summary: request.body.summary,
                  body: request.body.content,
               },
            }
         );

      if (result.modifiedCount === 1) {
         // Successful update
         response.redirect("/posts");
      } else {
         // No matching document found
         response.status(404).send("Post not found");
      }
   } catch (error) {
      console.error("Error updating post:", error);
      response.status(500).send("Internal Server Error");
   }
});

router.post("/posts/:id/delete", async (request, response) => {
   const postID = new ObjectId(request.params.id);
   await db.getDb().collection("posts").deleteOne({ _id: postID });

   response.redirect("/posts");
});

module.exports = router;
