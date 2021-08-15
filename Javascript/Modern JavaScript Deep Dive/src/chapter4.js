// Chapter 4) 변수

// 1) var 문제점
// hoisting의 성질로 인해 아래와 같은 코드가 실행 가능해짐
console.log(hello);

hello = 80;
var hello;

console.log(hello);

// 2) 유용한 네이밍 컨벤션
// 1. camelCase 😍
var firstName;

// 2. snake_case 🙂
var first_name;

// 3. PascalCase 😅
var FirstName;

// 4. typeHungrianCase 🥶
var strFirstName;
var $elem = document.getElementById("hi");
var observable$ = fromEvent(document, "click");
