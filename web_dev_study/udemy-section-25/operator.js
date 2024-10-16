//using greater than operator:
bookstore > db.books.find({ rating: { $gt: 7 } });

//using less than operator:
bookstore > db.books.find({ rating: { $lt: 7 } });

/*
all the usable comparison operators in mongoDb:
$eq: Values are equal
$ne: Values are not equal
$gt: Value is greater than another value
$gte: Value is greater than or equal to another value
$lt: Value is less than another value
$lte: Value is less than or equal to another value
$in: Value is matched within an array
$nin: Not in operator.
*/

/*
All the usable logical operatos:
$and: Returns documents where both queries match
$or: Returns documents where either query matches
$nor: Returns documents where both queries fail to match
$not: Returns documents where the query does not match
*/
//example use case of $in:
db.books.find({ rating: { $in: [4, 5, 6] } });
// this works the same way as in sql("where rating in (4,5,6)");

//example of Or , that uses array as options:
db.books.find({ $or: [{ rating: 5 }, { rating: 7 }] });

//example of And:
db.books.find({ $and: [{ rating: 5 }, { author: "JKR" }] });
//filters all books with rating 5 and author of JKR.

//example of nested operators:
db.books.find({ $or: [{ pages: { $gt: 600 } }, { rating: { $lt: 9 } }] });
//here the Or filters any value that that has page > 600 or rating thats less than 9.

//example of using $all operator:
db.books.find({ genres: { $all: ["fantasy", "magic"] } });
//It works like hard codded and operator but for array values.

