function printName(name) {
  console.log(`hello ${name}!`);
}
const printAge = function (number) {
  return number;
};
const greet = () => "hello world";

const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

function int_main() {
  console.log(greet());
  console.log(bill([23, 23, 1, 2, 3, 3], 0.2));
  return 0;
}

int_main();
