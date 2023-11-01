let stocks = {
   fruits: ["strawberry", "apple", "orange", "banana"],
   liquid: ["water", "ice"],
   holder: ["cone", "cup", "stick"],
   toppings: ["choc", "peanuts"],
};

let isShopOpen = true;

let order = (time, work) => {
   return new Promise((resolve, reject) => {
      if (isShopOpen == true) {
         setTimeout(() => {
            resolve(work());
         }, time);
      } else {
         reject(console.log("Sorry , our shop is closed"));
      }
   });
};

order(2000, () => {
   console.log(`${stocks.fruits[0]}`);
});
