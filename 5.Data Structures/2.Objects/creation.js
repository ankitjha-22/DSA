// Possible Ways for Creating An Object

// Object literal
let objectType1 = {
  id: 1,
  name: "Ankit",
  age: 27,
  gender: "male",
};

// Object Constructor
let objectType2 = new Object();
objectType2.id = 2;
objectType2.name = "Ankit";
objectType2.age = 27;
objectType2.gender = "male";

// Constructor functions are a more formal way to define an object’s blueprint and create multiple instances of that object.
function ObjectType3(id, name, age, gender) {
  this.id = id;
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.greet = function () {
    return { id, name, age, gender };
  };
}

const objectType3Instance1 = new ObjectType3(3, "Ankit", 27, "male");
const objectType3Instance2 = new ObjectType3(3, "Shru", 27, "female");

// The Object.create() method creates a new object, using an existing object as the prototype for the new object.
const personPrototype = {
  greet: function () {
    console.log("Hello, " + this.name);
  },
};
let objectType4 = Object.create(personPrototype);
objectType4.id = 4;
objectType4.name = "Ankit";
objectType4.age = 27;
objectType4.gender = "male";

// Using ES6 class
class Person {
  constructor(id, name, age, gender) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  greet() {
    return { id: this.id, name: this.name, age: this.age, gender: this.gender };
  }
}

const objectType5 = new Person(5, "Ankit", 27, "male");

// Using Factory Functions - A factory function is a function that returns a new object. Unlike constructor functions, factory functions do not require the new keyword.

function createPerson(id, name, age, gender) {
  return {
    id,
    name,
    age,
    gender,
    greet: function () {
      return {
        id: this.id,
        name: this.name,
        age: this.age,
        gender: this.gender,
      };
    },
  };
}

const objectType6 = createPerson(6, "Ankit", 27, "male");

// Object.assign
let objectType7a = {
  id: 7,
  name: "Ankit",
  age: 27,
  gender: "male",
};

const objectType7 = Object.assign(objectType7a);

// Using Singleton Pattern - The Singleton pattern ensures that only one instance of a particular object is created. This can be achieved using an IIFE (Immediately Invoked Function Expression).

const singleton = (function () {
  let instance;

  function createInstance() {
    return {
      id: 8,
      name: "Ankit",
      age: 27,
      gender: "male",
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

// instance1 === instance2 true
const instance1 = singleton.getInstance();
const instance2 = singleton.getInstance();

console.log("");
console.log("Logging Results....");
console.log("");
console.log("objectType1 - Object literal", objectType1);
console.log("");

console.log("objectType2 - Object Constructor", objectType2);
console.log("");
console.log(
  "objectType3 - Constructor functions",
  objectType3Instance1.greet(),
  objectType3Instance2.greet()
);
console.log("");
console.log("objectType4 - Object Create", objectType4);
console.log("");
console.log("objectType5 - Using ES6 class", objectType5.greet());
console.log("");
console.log("objectType6 - Using Factory Function", objectType6.greet());
console.log("");
console.log("objectType7 - Using Object Assign Function", objectType7);
console.log("");
console.log("objectType8 - Using Singleton Function", instance1);
