class Job {
   constructor(title, location, salary) {
      this.title = title;
      this.location = location;
      this.salary = salary;
      this.name;
   }
   info() {
      console.log(`Name: ${this.name} , Job-Title: ${this.title}`);
   }
}

function main() {
   let developer = new Job("developer", "boston", 12000);
   developer.name = "saifur";
   const job = { title: "dev", location: "Hamilton" };
}

main();
