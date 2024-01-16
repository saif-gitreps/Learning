// bascially we are changing 
const human = {
   alive: true,
   bad: "Yess",
};

console.log(Object.getOwnPropertyDescriptor(human, "alive"));

Object.defineProperty(human, "alive", {
   writable: false,
   enumerable: false,
   configurable: true,
});
