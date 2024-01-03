const db = require("../data/database");

class Post {
   constructor(title, content, id) {
      this.title = title;
      this.content = content;
      this.id = id;
   }

   async save() {
      await db
         .getDb()
         .collection("posts")
         .insertOne({ title: this.title, content: this.content });
   }
}

module.exports = Post;
