// 1. String concatenation
console.log("my" + " cat");
console.log("1" + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement: ${postIncrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
console.log(x);
x += y;
console.log(x);
x -= y;
console.log(x);
x *= y;
console.log(x);
x /= y;
console.log(x);

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;
const value3 = true;

// 6-1. || (or), 하나라도 true가 되면 거기까지만 확인을 함
console.log(`or: ${value1 || value2 || check()}`);
console.log(`or: ${value3 || value2 || check()}`);

// 6-2. && (and), 하나라도 false가 되면 거기까지만 확인을 함
console.log(`and: ${value1 && value2 && check()}`);

// 특정 값이 null인지 확인하는 방법
// nullableObject && nullableObject.something

// if (nullableObject != null) {
//   nullableObject.something;
// }
// 두 코드와 같은 의미임

// 6-3. ! (not)
console.log(!value1);

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log("😱");
  }
  return true;
}

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
// type을 고려하지 않고 해당 값으로만 비교를 함
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
// type을 고려하고 비교를 함, 해당 방법을 쓰는게 맞음
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const billy1 = { name: "Billy" };
const billy2 = { name: "Billy" };
const billy3 = billy1;
console.log(billy1 == billy2); // false
console.log(billy1 === billy2); // false
console.log(billy1 === billy3); // true

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == false); // true
console.log("" === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
const name = "billy";
if (name === "billy") {
  console.log("Welcome, Billy!");
} else if (name === "coder") {
  console.log("You are amazing coder");
} else {
  console.log("unknown");
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === "billy" ? "yes" : "no");

// 10. Switch statement
// Use for multiple if checks
// Use for enum-like value check
// Use for multiple type checks in TS
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("Go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("Love you!!");
    break;
  default:
    console.log("Same all!");
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  //inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers
// (using continue)
for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 0) continue;
  console.log(`i: ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until
// reaching 8 (use break)
for (let i = 0; i < 10; i++) {
  if (i > 8) break;
  console.log(`i: ${i}`);
}
