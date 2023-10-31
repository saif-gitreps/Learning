function one(call_two) {
   // taking a function name as argument, and passing it inside one.
   console.log("step 1 complete, please call step 2");
   call_two();
}

function two() {
   console.log("step 2");
}

one(two);
