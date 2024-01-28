//map-filter-reduce-examples.js
let a = ["a", "b", "c", "d", "e"];

// they both bascially does something to each element and then creates a new array.
a = a.map((letters) => {
   return letters + "1";
});

let objArray = [
   { name: "Saif", age: 23 },
   { name: "kareem", age: 21 },
   { name: "Boston", age: 27 },
];

objArray.map((obj) => {
   return obj.age++;
});

console.log(objArray);

a = a.filter((letters) => {
   return letters != "a1";
});

console.log(a);
