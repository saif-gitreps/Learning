//deleting single document:
db.books.deleteOne({ _id: ObjectId("6543983b77bbad8150aa5854") });

//deleting many documents with conditions:
db.books.deleteMany({ author: "JKR" });
