// Objects
// one of the JavaScipt's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = {key : value};

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const billy = { name: "billy", age: 24 };
print(billy);

// with JavaScript magic (dynamically typed language)
// can add properties later
billy.hasJob = true;
console.log(billy.hasJob);

// can delete properties later
delete billy.hasJob;
console.log(billy.hasJob);

// 2. Computed properties
console.log(billy.name);
console.log(billy["name"]);
billy["hasJob"] = true;
console.log(billy.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(billy, "name");
printValue(billy, "age");

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = makePerson("billy", 24);
console.log(person4);
function makePerson(name, age) {
  return {
    name,
    age,
  };
}

// 4. Constructor function
const person5 = new Person("billy", 24);
console.log(person5);
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// 5. in operator: property existence check (key in obj)
console.log("name" in billy);
console.log("age" in billy);
console.log("random" in billy);
console.log(billy.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in billy) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 3, 4];
for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: "billy", age: 24 };
const user2 = user;
user2.name = "coder";
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
