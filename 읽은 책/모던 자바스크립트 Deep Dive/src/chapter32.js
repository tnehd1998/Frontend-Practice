// Chapter 32) String

// 1) String 생성자 함수

const strObj = new String();
console.log(strObj); // String {""}

// 2) length 프로퍼티

console.log("Hello".length); // 5

// 3) String 메서드 : 읽기 전용 객체로 제공됨

console.log(Object.getOwnPropertyDescriptors("Hi"));
// {
//      "0" : { value: "H", writable: false,
//              enumerable: false, configurable: false}
//      "1" : { value: "i", writable: false,
//              enumerable: false, configurable: false}
//      length : { value: 2, writable: false,
//              enumerable: false, configurable: false}
// }

// ✅ String.prototype.indexOf

const str = "Hello World";
console.log(str.indexOf("1")); // -1
console.log(str.indexOf("l")); // 2
console.log(str.indexOf("or")); // 7

// ✅ String.prototype.search

console.log(str.search(/o/)); // 4
console.log(str.search(/x/)); // -1

// ✅ String.prototype.includes

console.log(str.includes("Hello")); // true
console.log(str.includes(" ")); // true
console.log(str.includes("X")); // false

// ✅ String.prototype.startsWith

console.log(str.startsWith("He")); // true
console.log(str.startsWith("x")); // false

// ✅ String.prototype.endsWith

console.log(str.endsWith("ld")); // true
console.log(str.endsWith("x")); // false

// ✅ String.prototype.charAt

const str1 = "Hello";
for (let i = 0; i < str1.length; i++) {
  console.log(str1.charAt(i)); // H e l l o
}

// ✅ String.prototype.substring

console.log(str.substring(1, 4)); // ello
console.log(str.substring(1)); // ello World

// ✅ String.prototype.slice

console.log(str.slice(0, 5)); // Hello
console.log(str.slice(-4)); // orld

// ✅ String.prototype.toUpperCase

console.log(str.toUpperCase()); // HELLO WORLD

// ✅ String.prototype.toLowerCase

console.log(str.toLowerCase()); // hello world

// ✅ String.prototype.trim : 공백 제거

const str2 = "    foo    ";
console.log(str2.trim()); // "foo"
console.log(str2.trimStart()); // "foo     "
console.log(str2.trimEnd()); // "     foo"

// ✅ String.prototype.repeat

const str3 = "abc";

console.log(str3.repeat(2)); // "abcabc"
console.log(str3.repeat(1)); // "abc"

// ✅ String.prototype.replace

console.log(str.replace("World", "Lee")); // Hello Lee

// ✅ String.prototype.split

const str4 = "How are you doing?";
console.log(str4.split(" "));
// ["How", "are", "you", "doing?"]
console.log(str4.split(" ", 3));
// ["How", "are", "you"]
