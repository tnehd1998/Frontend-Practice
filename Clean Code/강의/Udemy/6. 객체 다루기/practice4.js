// 4. Object Destructuring

// Example 1

function Person(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;
}

const billy = new Person("billy", 24, "korea ");

function FixedPerson(name, { age, location }) {
  this.name = name;
  this.age = age;
  this.location = location;
}

const davidOptions = {
  age: 20,
  location: "canada",
};

const david = new Person("david", davidOptions);
