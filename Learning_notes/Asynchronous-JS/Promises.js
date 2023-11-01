function delay(ms) {
   return new Promise((resolve) => {
      setTimeout(resolve, ms);
   });
}

delay(1000)
   .then(() => {
      console.log("Task 1 complete");
      return delay(2000);
   })
   .then(() => {
      console.log("Task 2 complete");
      return delay(1500);
   })
   .then(() => {
      console.log("Task 3 complete");
   })
   .catch((error) => {
      console.error("An error occurred:", error);
   });
