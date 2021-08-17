// Chapter 13) 스코프

// 스코프 : 모든 식별자는 자신이 선언된 위치에 의해 다른 코드가 식별자
// 자신을 참조할 수 있는 유효 범위가 결정되는 것, 즉 식별자가 유효한
// 범위를 의미함

let x1 = "global";
function foo() {
  let x1 = "local";
  console.log(x1); // local
}
foo();
console.log(x1); // global

// 스코프의 종류
// 전역 : 코드의 가장 바깥 영역
// 지역 : 함수 몸체 내부

var x = "global x";
var y = "global y";

function outer() {
  var z = "outer's local z";
  console.log(x); // global x
  console.log(y); // global y
  console.log(z); // outer's local z

  function inner() {
    var x = "inner's local x";
    console.log(x); // inner's local x
    console.log(y); // global y
    console.log(z); // outer's local z
  }

  inner();
}

outer();

console.log(x); // global x
// console.log(z); // error

// 스코프 체인
// - 스코프가 계층적으로 연결된 것
// -변수를 참조할 때 자바스크립트 엔진은 스코프 체인을 통해 변수를 참조하는
// 코드의 스코프에서 시작하여 상위 스코프 방향으로 이동하며 선언된 변수를 검색
// - 스코프의 계층적 구조는 부자 관계로 이루어진 상속과 유사함
// 부모의 자산을 자식은 사용할 수 있지만, 부모는 자식의 자신을 사용할 수 없음

// 스코프 체인에 의한 함수 검색

function foo() {
  console.log("global function foo");
}

function bar() {
  function foo() {
    console.log("local function foo");
  }
  foo(); // local function foo
}
bar();

// 렉시컬 스코프
var a = 1;
function foo2() {
  var a = 10;
  bar2();
}
function bar2() {
  console.log(a);
}

foo2(); // 1
bar2(); // 1

// - 자바스크립트는 렉시컬 스코프(정적 스코프)를 따르므로 함수를 어디서
// 호출했는지가 아니라 함수를 어디서 정의했는지에 따라 상위 스코프를 결정
// - 함수가 호출된 위치는 상위 스코프 결정에 어떠한 영향도 주지 않음
