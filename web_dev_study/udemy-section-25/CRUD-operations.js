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
