const promise = new Promise(function (resolve, reject) {
   setTimeout(function () {
      let error = false;
      if (!error) {
         resolve({
            username: "saif",
            password: "1234",
         });
      } else {
         reject("something went wrong");
      }
   }, 1000);
});

promise
   .then((user) => {
      console.log(user);
      return user.username;
   })
   .then((username) => {
      console.log(username);
   })
   .catch((error) => {
      console.log(error);
   })
   .finally(() => {
      console.log("hello world");
   });

const promiseTwo = new Promise((resolve, reject) => {
   setInterval(() => {
      let error = true;
      if (!error) {
         resolve({
            username: "Mcdonalds",
            password: "0923",
         });
      } else {
         reject("Javascript went wrong");
      }
   }, 1000);
});

async function promiseTwoFunc() {
   // put this in a try block , because async await does not have .catch()
   const result = await promiseTwo;
   console.log(result);
}

promiseTwoFunc();
