function hello(userName = "user") {
   console.log("hi " + userName);
}
hello();

function sum(...number) {
   let res = 0;
   for (let i = 0; i < number.length; i++) {
      res += number[i];
   }
   return res;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
