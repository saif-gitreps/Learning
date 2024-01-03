const db = require("../data/database");
const mongodb = require("mongodb");
const ObjectId = mongodb.ObjectId;

class Post {
   constructor(title, content, id) {
      this.title = title;
      this.content = content;

      if (id) {
         this.id = new ObjectId(id);
      }
   }

   async save() {
      if (this.id) {
         await db
            .getDb()
            .collection("posts")
            .updateOne(
               { _id: this.id },
               { $set: { title: this.title, content: this.content } }
            );
      } else {
         await db
            .getDb()
            .collection("posts")
            .insertOne({ title: this.title, content: this.content });
      }
   }

   async delete() {
      await db.getDb().collection("posts").deleteOne({ _id: this.id });
   }

   static async fetchAll() {
      return await db.getDb().collection("posts").find().toArray();
   }

   async fetch() {
      if (!this.id) {
         return;
      }
      const postDocument = await db.getDb().collection("posts").findOne({ _id: this.id });
      this.title = postDocument.title;
      this.content = postDocument.content;
   }
}

module.exports = Post;
