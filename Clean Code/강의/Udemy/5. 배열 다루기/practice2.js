// 2. Array.length

// 자바스크립트에서 array.length는 배열의 길이가 아닌
// 배열의 마지막 인덱스를 나타내는 것

// Example 1

const arr = [1, 2, 3];
console.log(arr.length); // 3
arr.length = 10;
console.log(arr.length); // 10

// Example 2

const arr1 = [1, 2, 3];
arr1[3] = 4;
console.log(arr1.length); // 4
arr1[9] = 10;
console.log(arr1.length); // 10

// Example 3

const arr2 = [1, 2, 3];
arr2.length = 0;
console.log(arr2); // []
