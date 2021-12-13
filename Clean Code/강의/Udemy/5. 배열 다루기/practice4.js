// 4. 유사 배열 객체

// 말 그대로 배열과 같은 형태를 띄고 있는 객체를 의미한다

// Example 1

const arrayLikeObject = {
  0: "Hello",
  1: "World",
  length: 2,
};

const arr = Array.from(arrayLikeObject);

console.log(arr); // ["Hello", "World"]
console.log(arr.length); // 2

console.log(Array.isArray(arrayLikeObject)); // false
console.log(Array.isArray(arr)); // true
