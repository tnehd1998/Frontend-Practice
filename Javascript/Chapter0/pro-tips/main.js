// 1. Ternary Operator
// ❌ Bad Code
function badGetResult(score) {
  let result;
  if (score > 5) {
    result = "👍";
  } else if (score <= 5) {
    result = "👎";
  }
  return result;
}

// ✅ Good Code
function goodGetResult(score) {
  return score > 5 ? "👍" : "👎";
}

// 2. Nullish Coalescing Operator
// ❌ Bad Code
function badPrintMessage(text) {
  let message = text;
  if (text === null || text === undefined) {
    message = "Nothing to display 👻";
  }
  console.log(message);
}

// ✅ Good Code
function goodPrintMessage(text) {
  const message = text ?? "Nothing to display 👻";
  console.log(message);
}

// default를 설정하는 경우는 undefined만 처리함
function defaultPrintMessage(text = "Nothing to display 👻") {
  const message = text;
  console.log(message);
}

// default를 설정하는 경우는 undefined만 처리함
function orPrintMessage(text) {
  const message = text || "Nothing to display 👻";
  console.log(message);
}

// 3. Object Destructuring
const person = {
  name: "Billy",
  age: 20,
  phone: "01012345678",
};
// ❌ Bad Code
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

// ✅ Good Code
function goodDisplayPerson(person) {
  const { name, age } = person;
  displayAvatar(name);
  displayName(name);
  displayProfile(name, age);
}

// 4-1. Spread Syntax - Object
const item = { type: "shirt", size: "M" };
const detail = { price: 20, made: "Korea", gender: "M" };

// ❌ Bad Code
item["price"] = detail.price;

// ✅ Good Code
const shirt = { ...item, ...detail, price: 40 };

// 4-2. Spread Syntax - Array
let fruits = ["🍎", "🍇"];

// fruits.push('🍓')
fruits = [...fruits, "🍓"];

// fruits.unshift("🫐")
fruits = ["🫐", ...fruits];

const fruits2 = ["🥥", "🍍"];
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

// ❌ Bad Code
function badDisplayJobTitle(person) {
  if (person.job && person.job.title) {
    console.log(person.job.title);
  }
}

// ✅ Good Code
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

// ❌ Bad Code
console.log(
  "Hello " + student.name + ", Your current score is: " + student.score
);

// ✅ Good Code
console.log(`Hello ${student.name}, Your current score is: ${student.score}`);

function greeting(sutdent) {
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

// ❌ Bad Code
function badDisplayUser() {
  fetchUser() //
    .then((user) => {
      fetchProfile(user) //
        .then((profile) => {
          updateUI(user, profile);
        });
    });
}

// ✅ Good Code
async function goodDisplayUser() {
  const user = await fetchUser();
  const profile = await fetchProfile(user);
  updateUI(user, profile);
}

// Remove Duplicates!
const array = ["🐶", "🐱", "🐨", "🐼", "🐱", "🐨"];
console.log(array);
console.log([...new Set(array)]);
