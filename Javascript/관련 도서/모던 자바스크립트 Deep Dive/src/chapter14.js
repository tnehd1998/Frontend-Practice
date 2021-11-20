// Chapter 14) 전역 변수의 문제점

// 지역변수의 생명 주기 : 함수가 종료되면 소멸함
// 전역변수의 생명 주기 : 프로그램이 종료되면 소멸함
function foo() {
  var x = "local";
  console.log(x);
  return x;
}

foo();

// 함수가 호출되었을 때만 변수를 생성함

var x = "global";
function foo2() {
  console.log(x); // undefined
  var x = "local";
}
foo2();
console.log(x); // global

// 1) 전역변수의 문제점
// - 암묵적 결합
// - 긴 생명 주기
// - 스코프 체인 상에서 종점에 존재 : 전역 변수의 검색 속도가 가장 느림
// - 네임스페이스 오염 : 실수로 동일한 이름으로 생성시 예상치 못한 오류 발생

// 2) 전역 변수의 사용을 억제하는 방법
// - 즉시 실행 함수 : 모든 코드를 즉시 실행 함수로 감싸면 모든 변수는
// 즉시 실행 함수의 지역 변수가 됨
(function () {
  var foo = 10;
})();

// - 네임스페이스 객체 : 전역에 객체를 생성하고 전역 변수처럼 사용하고 싶은
// 변수를 프로퍼티로 추가하는 방법
var MYAPP = {};
MYAPP.name = "Lee";
console.log(MYAPP.name); // Lee

MYAPP.person = {
  name: "Lee",
  address: "Seoul",
};
console.log(MYAPP.person.address); // Seoul

// - 모듈 패턴 : 클래스를 모방해서 관련이 있는 변수와 함수를 모아 즉시
// 실행 함수로 감싸 하나의 모듈을 만드는 것

var Counter = (function () {
  var num = 0;
  return {
    increase() {
      return ++num;
    },
    decrease() {
      return --num;
    },
  };
})();
console.log(Counter.num); // undefined
console.log(Counter.increase()); // 1
console.log(Counter.increase()); // 2
console.log(Counter.decrease()); // 1
console.log(Counter.decrease()); // 0

// - ES6 모듈 : 전역 변수를 사용할 수 없게 함
