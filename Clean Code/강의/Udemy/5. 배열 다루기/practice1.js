// 1. JavaScript의 배열은 객체다

// 자바스크립트에서 배열은 key값이 0부터 오름차순 순으로 이뤄진 객체다

// Example 1

const arr = [1, 2, 3];

arr[3] = "test";
arr["property"] = "string value";
arr["func"] = function () {
  return "hello";
};

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  // 1
  // 2
  // 3
  // test
}

console.log(arr);
// [
// 1,
// 2,
// 3,
// 'test',
// property: 'string value',
// func: [Function (anonymous)]
// ]

console.log(Array instanceof Object); // true

// Example 2

const arr1 = [1, 2, 3];
const arr2 = "[1, 2, 3]";

console.log(Array.isArray(arr1)); // true
console.log(Array.isArray(arr2)); // false
