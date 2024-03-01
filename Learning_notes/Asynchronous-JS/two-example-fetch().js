async function test() {
   try {
      let result = await fetch(
         "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json",
         {
            method: "GET",
         }
      );
      result = await result.json();
      console.log(result.usd);
   } catch (error) {
      console.log(error);
   }
}

test();

fetch(
   "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json",
   {
      method: "GET",
   }
)
   .then((result) => result.json())
   .then((result) => {
      console.log(result);
   })
   .catch((error) => {
      console.log(error);
   });
