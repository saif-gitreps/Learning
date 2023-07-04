function CalculateAdultYears(age) {
  return age - 18;
}

function int_main() {
  let onlineCourse = "web-dev";
  let coursePrice = 67;
  let goals = ["id1", "id2", "id3"];
  let groups = {
    courseName: onlineCourse,
    price: coursePrice,
    mainGoals: goals,
  };
  let person = {
    name: "siaf",
    greet() {
      console.log("hello");
    },
    age: 34,
  };
  person.greet();
  return 0;
}
int_main();
