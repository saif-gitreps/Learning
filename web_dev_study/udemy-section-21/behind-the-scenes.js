const person = { age: 32 };

function calc(person) {
   person.age -= 18;
   return person.age;
}
console.log(calc({ ...person }));
console.log(person.age);
