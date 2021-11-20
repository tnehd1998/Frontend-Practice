// Chapter 12) 함수

// 다른 프로그래밍 언어와 구별되는 중요한 특징인 함수는 객체라는 개념 🔥

// 1) 함수 정의 방식

// 함수 선언문
function add(x, y) {
  return x + y;
}
console.dir(add); // f add(x, y)
console.log(add(2, 5)); // 7

// - 자바스크립트 엔진은 생성된 함수를 호출하기 위해 함수 이름과 동일한 이름의
// 식별자를 암묵적으로 생성하고, 거기에 함수 객체를 할당한다
// - 함수는 함수 이름으로 호출하는 것이 아니라 함수 객체를 가리키는 식별자로
// 호출한다

// 함수 표현식
var add2 = function (x, y) {
  return x + y;
};
console.log(add2(2, 5)); // 7

// 함수 생성 시점과 함수 호이스팅
console.dir(add3); // f add3(x, y)
console.dir(sub); // undefined
console.log(add(2, 5)); // 7
// console.log(sub(2, 5)); // error
function add3(x, y) {
  // 함수 호이스팅
  return x + y;
}
var sub = function (x, y) {
  return x - y;
};

// - 함수 표현식으로 함수를 정의하면 함수 호이스팅이 발생하는 것이 아니라
// - 변수 호이스팅이 발생함

// - 함수 선언문 대신 함수 표현식을 사용하는 것이 권장 됨 👻

// 화살표 함수 😍😍😍
// - ES6에 도입된 방법이며 항상 익명 함수로 정의함

const add4 = (x, y) => x + y;
console.log(add4(2, 5)); // 7

// 2) 함수 호출
// 함수는 매개변수의 개수와 인수의 개수가 일치하는지 확인하지 않음
// 인수가 부족한 경우에는 그냥 undefined값을 넣어버림
// 초과된 인수는 무시되지만 암묵적으로 arguments 객체의 프로퍼티로 보관됨

function adding(x, y) {
  console.log(arguments);
  return x + y;
}

console.log(adding(2)); // NaN
console.log(adding(3, 4, 5)); // 7

// 3) 인수 확인
console.log(add(2)); // NaN
console.log(add("a", "b")); // "ab"
// 다음과 같은 상황이 발생하여 타입스크립트가 코드의 안전성 부분에서 좋음

// 매개변수에 기본값을 할당하는 방법 (ES6)
function adding2(x = 0, y = 0) {
  return x + y;
}
console.log(adding2(2)); // 2
console.log(adding2()); // 0

// 4) 매개변수의 최대 갯수
// 함수의 매개변수의 갯수는 갯수가 적을수록 좋다
// 함수는 한가지 일만 해야하며 가급적 작게 만들어야 한다
// 매개변수는 최대 3개 이상을 넘지 않는 것을 권장함

// 5) 참조에 의한 전달과 외부 상태의 변경

function changeVal(primitive, obj) {
  primitive += 100;
  obj.name = "Kim";
}

var num = 100;
var person = { name: "Lee" };

console.log(num); // 100
console.log(person); // {name: "Lee"}

changeVal(num, person);

console.log(num); // 100
console.log(person); // {name: "Kim"}

// 6) 다양한 함수의 형태
// 즉시 실행 함수
var res = (function () {
  var a = 3;
  var b = 5;
  return a * b;
})();
console.log(res); // 15

res = (function (a, b) {
  return a * b;
})(3, 5);
console.log(res); // 15

// 재귀 함수
function countdown(n) {
  if (n < 0) return;
  console.log(n);
  countdown(n - 1);
}
countdown(10);

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(3)); // 3! = 1 * 2 * 3 = 6
console.log(factorial(5)); // 5! = 1 * 2 * 3 * 4 * 5 = 120

// 콜백 함수 🎉🎉🎉
// 함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수
// 고차함수 : 매개변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수
function repeat(n, f) {
  // 고차함수
  for (var i = 0; i < n; i++) {
    f(i);
  }
}
var logOdds = function (i) {
  // 콜백함수
  if (i % 2) console.log(i);
};
repeat(5, logOdds); // 1, 3

// 순수 함수 : 언제나 동일한 값을 반환하는 함수이며, 외부 상태를 변경하지 않음
var count = 0;
function increase(n) {
  return ++n;
}
count = increase(count);
console.log(count); // 1
count = increase(count);
console.log(count); // 2

// 비순수 함수 : 외부 상태에 따라 반환값이 달라지며 외부 상태를 변경함

var count2 = 0;
function increase2() {
  return ++count2;
}
increase2();
console.log(count2); // 1
increase2();
console.log(count2); // 2

// 최대한 순수 함수를 사용하고, 비순수 함수는 줄이는 것이 좋음
// 함수형 프로그래밍은 결국 순수 함수를 통해 최대한 억제를 하여 오류를
// 줄이고 프로그램의 안정성을 높히게 되어 요즘은 객체지향 프로그래밍뿐만
// 아니라 함수형 프로그래밍을 적극적으로 사용함
