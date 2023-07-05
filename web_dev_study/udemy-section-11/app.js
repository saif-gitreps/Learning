function int_main() {
  let user1 = {
    name: "saif",
    age: 34,
  };
  let user2 = {
    name: "Sara",
    age: 10,
  };
  let a = [user1, user2];
  a[0].name = "kaif";
  console.log(a[0].name);
  return 0;
}

int_main();
