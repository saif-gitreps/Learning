console.log(" I ");

console.log(" eat ");

// this one will be outputed at last ascyn code doesnet wait for other function to finish executiing.
setTimeout(() => {
   console.log(" ice cream ");
});

console.log(" with a ");

console.log(" spoon ");
