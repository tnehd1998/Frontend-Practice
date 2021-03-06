// 1. Ternary Operator
// โ Bad Code
function badGetResult(score) {
  let result;
  if (score > 5) {
    result = "๐";
  } else if (score <= 5) {
    result = "๐";
  }
  return result;
}

// โ Good Code
function goodGetResult(score) {
  return score > 5 ? "๐" : "๐";
}

// 2. Nullish Coalescing Operator
// โ Bad Code
function badPrintMessage(text) {
  let message = text;
  if (text === null || text === undefined) {
    message = "Nothing to display ๐ป";
  }
  console.log(message);
}

// โ Good Code
function goodPrintMessage(text) {
  const message = text ?? "Nothing to display ๐ป";
  console.log(message);
}

// default๋ฅผ ์ค์ ํ๋ ๊ฒฝ์ฐ๋ undefined๋ง ์ฒ๋ฆฌํจ
function defaultPrintMessage(text = "Nothing to display ๐ป") {
  const message = text;
  console.log(message);
}

// default๋ฅผ ์ค์ ํ๋ ๊ฒฝ์ฐ๋ undefined๋ง ์ฒ๋ฆฌํจ
function orPrintMessage(text) {
  const message = text || "Nothing to display ๐ป";
  console.log(message);
}

// 3. Object Destructuring
const person = {
  name: "Billy",
  age: 20,
  phone: "01012345678",
};
// โ Bad Code
function badDisplayPerson(person) {
  displayAvatar(person.name);
  displayName(person.name);
  displayProfile(person.name, person.age);
}

function badDisplayPerson2(person) {
  const name = person.name;
  const age = person.age;
  displayAvatar(name);
  displayName(name);
  displayProfile(name, age);
}

// โ Good Code
function goodDisplayPerson(person) {
  const { name, age } = person;
  displayAvatar(name);
  displayName(name);
  displayProfile(name, age);
}

// 4-1. Spread Syntax - Object
const item = { type: "shirt", size: "M" };
const detail = { price: 20, made: "Korea", gender: "M" };

// โ Bad Code
item["price"] = detail.price;

// โ Good Code
const shirt = { ...item, ...detail, price: 40 };

// 4-2. Spread Syntax - Array
let fruits = ["๐", "๐"];

// fruits.push('๐')
fruits = [...fruits, "๐"];

// fruits.unshift("๐ซ")
fruits = ["๐ซ", ...fruits];

const fruits2 = ["๐ฅฅ", "๐"];
let combined = [...fruits, ...fruits2];

// 5. Optional Chaining
const bob = {
  name: "Billy",
  age: 20,
};
const mary = {
  name: "Steve",
  age: 20,
  job: {
    title: "Designer",
  },
};

// โ Bad Code
function badDisplayJobTitle(person) {
  if (person.job && person.job.title) {
    console.log(person.job.title);
  }
}

// โ Good Code
function goodDisplayJobTitle(person) {
  if (person.job?.title) {
    console.log(person.job.title);
  }
}

function goodDisplayJobTitle2(person) {
  const title = person.job?.title ?? "No Job Yet;;";
  console.log(title);
}

// 6. Template Literals (Template String)
const student = {
  name: "Billy",
  score: 5,
};

// โ Bad Code
console.log(
  "Hello " + student.name + ", Your current score is: " + student.score
);

// โ Good Code
console.log(`Hello ${student.name}, Your current score is: ${student.score}`);

function greeting(student) {
  const { name, score } = student;
  console.log(`Hello ${name}, Your current score is: ${score}`);
}

// 7. Looping
const items = [1, 2, 3, 4, 5, 6];

const evens = items.filter((item) => item % 2 === 0);
const multiple = evens.map((item) => item * 4);
const sum = multiple.reduce((prev, curr) => prev + curr, 0);
console.log(sum);

const result = items
  .filter((item) => item % 2 === 0)
  .map((item) => item * 4)
  .reduce((prev, curr) => prev + curr, 0);
console.log(result);

// 8. Async/Await

// โ Bad Code
function badDisplayUser() {
  fetchUser() //
    .then((user) => {
      fetchProfile(user) //
        .then((profile) => {
          updateUI(user, profile);
        });
    });
}

// โ Good Code
async function goodDisplayUser() {
  const user = await fetchUser();
  const profile = await fetchProfile(user);
  updateUI(user, profile);
}

// Remove Duplicates! Set์ ์ฌ์ฉํ์ฌ ์ค๋ณต์ ๋ฐฉ์งํจ
const array = ["๐ถ", "๐ฑ", "๐จ", "๐ผ", "๐ฑ", "๐จ"];
console.log(array);
console.log([...new Set(array)]);
