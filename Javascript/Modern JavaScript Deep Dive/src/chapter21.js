// Chapter 21) 빌트인 객체

// 1) 자바스크립트 객체의 분류
// - 표준 빌트인 객체 : ECMAScript 사양에 정의된 객체
// - 호스트 객체 : 자바스크립트 실행 환경에서 추가로 제공하는 객체
// - 사용자 정의 객체 : 사용자가 직접 정의한 객체

// 2) 표준 빌트인 객체
// - 자바스크립트는 Object, String, Number, Boolean... 등 40여개의
// 표준 빌트인 객체를 제공한다
// - Math, Reflect, JSON을 제외한 표준 빌트인 객체는 모두 인스턴스를
// 생성할 수 있는 생성자 함수 객체이며 프로토타입 메서드와 정적 메서드를
// 제공하고 생성자 함수 객체가 아닌 표준 빌트인 객체는 정적 메서드만 제공함

const strObj = new String("Lee");
console.log(typeof strObj); // object

console.log(Object.getPrototypeOf(strObj) === String.prototype);
// true

const numObj = new Number(1.5);
console.log(numObj.toFixed()); // 2
console.log(Number.isInteger(numObj)); // false

// 3. 원시값과 래퍼 객체
// 래퍼 객체 : 문자열, 숫자, 불리언 값에 대해 객체처럼 접근하면 생성되는
// 임시 객체

const str = "hi";
console.log(str.length); // 2
console.log(str.toUpperCase()); // HI

console.log(typeof str); // string

// 4. 전역 객체
// 어떤 객체에도 속하지 않은 최상위 객체
// 브라우저 환경 : window(self, this, frames)
// Node.js : global
// 전역 객체의 프로퍼티를 참조할 때 window를 생략할 수 있다

console.log(window.parseInt("F", 16)); // 15
console.log(parseInt("F", 16)); // 15
console.log(window.parseInt === parseInt); // true

// ✅ 빌트인 전역 프로퍼티

// - Infinity : 무한대를 나타내는 숫자값
console.log(window.Infinity === Infinity); // true
console.log(3 / 0); // Infinity
console.log(-3 / 0); // -Infinity
console.log(typeof Infinity); // number

// - NaN : 숫자가 아닌 (Not-a-Number)를 의미함
console.log(window.NaN); // NaN
console.log(Number("xyz")); // NaN
console.log(1 * "string"); // NaN
console.log(typeof NaN); // number

// undefined
console.log(window.undefined); // undefined
let foo;
console.log(foo); // undefined
console.log(typeof undefined); // undefined

// ✅ 빌트인 전역 변수
// 어플리케이션 전역에서 호출할 수 있는 빌트인 함수로서 전역 객체의 메서드

// - eval : 자바스크립트 코드를 나타내는 문자열을 인수로 전달받음
console.log(eval("1+2;")); // 3
console.log(eval("var x = 5;")); // undefined
console.log(x); // 5

const o = eval("({a:1})");
console.log(o); // {a: 1}

const f = eval("(function() { return 1; })");
console.log(f()); // 1

// eval 함수는 기존의 스코프를 런타임에 동적으로 수정함

const x1 = 1;
function foo1() {
  "use strict";
  eval("var x1 = 2; console.log(x1);"); // 2
  console.log(x1); // 1
}
foo1();
console.log(x1); // 1

// eval 함수는 보안에 매우 취약하고 최적화 및 수행속도가 느려 사용을 금지해야함

// - isFinite : 유한수인지 검사를 통해 불리언 값으로 반환

console.log(isFinite(0)); // true
console.log(isFinite(Infinity)); // false

// - isNaN : NaN인지 검사를 하여 불리언 값으로 반환
console.log(isNaN(NaN)); // true
console.log(isNaN(10)); // false

// - parseFloat : 문자열을 실수로 반환
console.log(parseFloat("3.14")); // 3.14

// - parseInt : 문자열을 정수로 반환
console.log(parseInt("10")); // 10

// - encodeURI / decodeURI : 문자열을 URI주소로 반환함
const uri = "https://www.naver.com";
console.log(encodeURI(uri)); // https://www.naver.com

// - encodeURIComponent / decodeURIComponent
// URI 구성요소를 인수로 전달받아 인코딩함

// ✅ 암묵적 전역
var x = 10;
function foo4() {
  y = 20;
  console.log(x + y);
}
foo4(); // 30

console.log(window.x); // 10
console.log(window.y); // 20

delete x;
delete y;

console.log(window.x); // 10
console.log(window.y); // undefined
