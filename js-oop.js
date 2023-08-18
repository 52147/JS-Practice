// 1.Objects:
const person = {
  name: "John",
  age: 25,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  },
};

// 2.Prototypes:
function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + " barks!");
};

const dog1 = new Dog("Buddy");
dog1.bark(); // Buddy barks!

//  3.Classes (ES6):
class Dog2 {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log(this.name + " barks!");
  }
}
const dog2 = new Dog2("Rex");
dog2.bark(); // Rex barks!

// 4.Inheritance:

class Animal {
  constructor(species) {
    this.species = species;
  }

  move() {
    console.log(this.species + " moves around.");
  }
}

class Bird extends Animal {
  fly() {
    console.log(this.species + " flies!");
  }
}
const eagle = new Bird("Eagle");
eagle.move(); // Eagle moves around.
eagle.fly(); // Eagle flies!
