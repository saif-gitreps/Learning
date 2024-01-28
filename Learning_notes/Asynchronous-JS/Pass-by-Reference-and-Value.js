// node Pass-by-Reference-and-Value.js

let a = 10;
let b = "yo";

// example 1:
let c = [1, 2];
// array name is a pointer to c's memory location.
// reference of c is passed to d.
// both c and d points to the same memory location.
let d = c;
d.push(3);
console.log("exp1:  " + c);

// example 2:
// here when we pas c to d and then define d in a different way, d is no longer pointing to c's memory location.
// d is completely reassinged.
c = [1, 2, 3];
d = c;
d = [1, 2, 3, 4];
console.log("exp2:  " + c);
console.log("exp2:  " + d);
