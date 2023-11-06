let stocks = {
   fruits: ["strawberry", "apple", "orange", "banana"],
   liquid: ["water", "ice"],
   holder: ["cone", "cup", "stick"],
   toppings: ["choc", "peanuts"],
};

stocks.fruits[1];

let order = (fruits_name, call_production) => {
   call_production();
   setTimeout(() => {
      console.log(`${stocks.fruits[fruits_name]} was selected`);
   }, 2000);
};

let production = () => {
   setTimeout(() => {
      console.log("production has started");
      setTimeout(() => {
         console.log("fruits has been cut");
         setTimeout(() => {
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
            setTimeout(() => {
               console.log("machine got started");
               setTimeout(() => {
                  console.log(`${stocks.holder[0]} was selected`);
                  setTimeout(() => {
                     console.log(`${stocks.toppings[0]} was selected`);
                     setTimeout(() => {
                        console.log("serve ice cream");
                     }, 2000);
                  }, 3000);
               }, 2000);
            }, 1000);
         }, 1000);
      }, 2000);
   }, 0);
};

order(0, production);
