bookstore > db.books.find({ rating: 5 }).count();
1;
bookstore > db.books.find({ rating: 8 }).count();
1;
bookstore > db.books.find({ rating: 9 }).count();

//Limiting the number of output using method chaining.
bookstore > db.books.find().limit(2);

//To query sorted according to a property by ASC:
db.books.find().sort({ title: 1 });

//To query sorted according to a property by DESC:
db.books.find().sort({ title: -1 });

//Multiple method chaining:
db.books.find().sort({ title: 1 }).limit(3);
