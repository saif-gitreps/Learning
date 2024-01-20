class Animal {
   constructor(name) {
      this.name = name;
   }

   makeSound() {
      console.log("Generic animal sound");
   }
}

class Dog extends Animal {
   constructor(name, breed) {
      // Calling the constructor of the parent class (Animal)
      super(name);
      this.breed = breed;
   }

   makeSound() {
      // Calling the makeSound method of the parent class (Animal)
      super.makeSound();
      console.log("Bark!");
   }
}

// Creating instances
const genericAnimal = new Animal("Generic Animal");
const myDog = new Dog("Buddy", "Golden Retriever");

// Using the instances
console.log(genericAnimal.name); // Output: Generic Animal
genericAnimal.makeSound(); // Output: Generic animal sound

console.log(myDog.name); // Output: Buddy
console.log(myDog.breed); // Output: Golden Retriever
myDog.makeSound(); // Outputs both: Generic animal sound and Bark!
