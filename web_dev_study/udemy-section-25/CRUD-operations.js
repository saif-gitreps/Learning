//deleting single document:
db.books.deleteOne({ _id: ObjectId("6543983b77bbad8150aa5854") });

//deleting many documents with conditions:
db.books.deleteMany({ author: "JKR" });

//Updating a single doc:
db.books.updateOne(
   { _id: ObjectId("6543983b77bbad8150aa5854") },
   { $set: { rating: 8, pages: 461 } }
);
// here first arg is the matching condition
// second is all the values we set and update. we can have multiple properties updated using a coma.

//To update mutiple :
db.books.updateMany({ author: "JKR" }, { $set: { title: "Happy potter infinity" } });
//bscially translates to update set title = "new titile" where author is "JKR".

//specal opertor : $inc , this can be used in places where you dont know the value of something but you want to increment it, like a score.
db.books.update({ _id: ObjectId("6543983b77bbad8150aa5852") }, { $inc: { pages: 2 } });

//To Push or Pop(pull specifically used) array values:
db.books.updateOne(
   { _id: ObjectId("6543983b77bbad8150aa5852") },
   { $pull: { genres: "fantasy" } }
);

db.books.updateOne(
   { _id: ObjectId("6543983b77bbad8150aa5852") },
   { $push: { genres: "horror" } }
);

//To add multiple values into the array, we can us another operator, $each which will be nested inside $push:

bookstore >
   db.books.updateOne(
      { _id: ObjectId("6543983b77bbad8150aa5852") },
      { $push: { genres: { $each: ["Romantic, Sci-fi"] } } }
   );
