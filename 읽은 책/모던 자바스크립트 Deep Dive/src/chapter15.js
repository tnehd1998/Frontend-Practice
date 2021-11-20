// Chapter 15) let, const 키워드와 블록 레벨 스코프

// 1) var 키워드로 선언한 변수의 문제점
// - 변수 중복 선언 허용

var x = 1;
var y = 1;
var x = 100;
var y = 100;
console.log(x, y); // 100 100

// - 함수 레벨 스코프 : 의도치 않게 변수값이 변경되는 부작용이 발생

var x = 1;
if (true) {
  var x = 10;
}
console.log(x); // 10

var i = 10;
for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i); // 5

// - 변수 호이스팅 : 변수 선언 전에 참조가 가능해짐

console.log(foo); // undefined
foo = 123;
console.log(foo); // 123
var foo;

// 2) let 키워드
// - 변수 중복 선언 금지

var foo = 123;
var foo = 456;
let bar = 123;
// let bar = 456; // error

// - 블록 레벨 스코프 : 블록 내의 모든 변수를 지역 스코프에만 따르게 함

let boo = 1;
{
  let bar2 = 1;
  let boo = 3;
}
console.log(boo); // 1
// console.log(bar2); // error

// - 변수 호이스팅 : 변수 호이스팅이 발생하지 않는 것처럼 동작함
// -> let 키워드로 선언한 변수는 스코프의 시작 지점부터 초기화 단계
// 시작 지점까지 변수를 참조할 수 없다
// -> 스코프 시작 지점부터 초기화 시작 지점까지 변수를 참조할 수 없는 구간을
// 일시적 사각지대라고 부른다

// console.log(hi); // error
let hi;
console.log(hi); // undefined
hi = 1;
console.log(hi); // 1

// let 키워드는 호이스팅이 발생하지 않는 것처럼 보이지만 그렇지 않다 🔥🔥

let hoist = 1;
{
  //   console.log(hoist); // error
  let hoist = 2;
}

// 자바스크립트는 ES6에서 도입된 let, const를 포함하여 모든 선언
// (var, let, const, function, function*, class ...)을
// 호이스팅한다. 단 ES6에서 도입된 let, const, class를 사용한
// 선언문은 호이스팅이 발생하지 않는 것처럼 동작한다

// - 전역 객체와 let : var 키워드로 선언한 전역 변수와 전역 함수는
// 전역 객체인 window의 프로퍼티가 되어버림

var i = 1;
var j = 2;
function fool() {}

console.log(window.i); // 1
console.log(i); // 1
console.log(window.j); // 2
console.log(j); // 2
console.log(window.fool); // f fool() {}
console.log(fool); // f fool() {}

// let 키워드로 선언한 전역 변수는 전역 객체의 프로퍼티가 아님

let ex = 1;
console.log(window.ex); // undefined
console.log(ex); // 1

// 3) const 키워드 : 상수를 선언하기 위해 사용하지만 상수만을 위해
// 사용하지는 않음
// - 선언과 초기화 : const 키워드로 선언한 변수는 반드시 초기화를 해야함
const e = 1;
// const f;  // error

// const역시 호이스팅이 발생하지 않는 것처럼 작동함

{
  //   console.log(h); // error
  const h = 10;
  console.log(h); // 10
}
// console.log(h); // error

// - 재할당 금지 : const 키워드로 선언한 변수는 재할당이 불가능
const t = 10;
// t = 20; // error

// - 상수 : 재할당이 금지된 변수를 의미, 유지보수의 편의를 위해 적극적으로
// 사용해야 한다

let oldPreTaxPrice = 100;
let oldAfterTaxPrice = oldPreTaxPrice + oldPreTaxPrice * 0.1;
console.log(oldAfterTaxPrice); // 110

const TAX_RATE = 0.1;
let preTaxPrice = 100;
let afterTaxPrice = preTaxPrice + preTaxPrice * TAX_RATE;
console.log(afterTaxPrice); // 110

// - const 키워드와 객체 : const 키워드로 선언된 변수에 원시 값을
// 할당한 경우 값을 변경할 수 없지만, 객체는 값을 변경할 수 있음

const person = {
  name: "Lee",
};
person.name = "Kim";
console.log(person); // {name: "Kim"}

// const 키워드는 재할당을 금지할 뿐 "불변"을 의미하지는 않는다

// 일단은 const 키워드를 우선적으로 사용하고 재할당이 필요하다면
// 그시점에 let 키워드로 변경해도 늦지 않는다 😍😍😍
