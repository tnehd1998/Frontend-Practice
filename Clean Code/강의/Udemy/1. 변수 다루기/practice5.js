// 5. 호이스팅 주의하기

// 개발자가 코드를 작성할 때 예상하는 스코프대로 런타임 환경에서는 돌아가지 않는 호이스팅 상황이 발생함

// 호이스팅 : 런타임 환경에서 선언이 최상단으로 끌어올리는 것

// 호이스팅의 문제점
// - 코드 작성 시 예측하지 못한 실행이 일어남

// 호이스팅에 대한 해결책
// - var을 사용하지 않고, let과 const를 지향하여 사용한다
// - 함수를 조심하며, 함수 표현식을 사용한다

// Example 1
// 선언 전에 호이스팅으로 인해 오류가 아닌 undefined가 출력됨

var global = 0;

function outer() {
  console.log(global); // undefined
  var global = 5;
  function inner() {
    var global = 10;
    console.log(global); // 10
  }
  inner();
  global = 1;
  console.log(global); // 1
}

outer();

// Example 2
// 중복 선언해도 오류 없이 출력됨

function duplicatedVar() {
  var a;
  console.log(a); // undefined
  var a = 100;
  console.log(a); // 100
}

// Example 3
// 함수도 호이스팅이 됨

var sum;

console.log(sum()); // 10

function sum() {
  return 1 + 2;
}

function sum() {
  return 1 + 2 + 3;
}

function sum() {
  return 1 + 2 + 3 + 4;
}

// 함수 표현식으로 만드는 것이 추천됨

const sum1 = function () {
  return 1 + 2;
};

console.log(sum1()); // 3
