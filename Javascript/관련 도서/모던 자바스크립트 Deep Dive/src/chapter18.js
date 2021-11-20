// Chapter 18) 함수와 일급 객체

// 1. 일급 객체
// 다음 조건을 만족하는 객체를 일급 객체라고 한다
// 조건 1) 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능함
// 조건 2) 변수나 자료구조(객체, 배열 ...)에 저장할 수 있다
// 조건 3) 함수의 매개변수에 전달할 수 있다
// 조건 4) 함수의 반환값으로 사용할 수 있다

// 자바스크립스 함수는 위의 조건을 모두 만족하기 때문에 일급 객체다

// 조건 1
const increase = function (num) {
  return ++num;
};

const decrease = function (num) {
  return --num;
};

// 조건 2
const predicates = { increase, decrease };

// 조건 3
function makeCounter(predicate) {
  let num = 0;
  // 조건 4
  return function () {
    num = predicate(num);
    return num;
  };
}

const increaser = makeCounter(predicates.increase);
console.log(increaser()); // 1
console.log(increaser()); // 2

const decreaser = makeCounter(predicates.decrease);
console.log(decreaser()); // -1
console.log(decreaser()); // -2

// 함수가 일급 객체라는 것은 함수를 객체와 동일하게 사용할 수 있다는 의미
// 함수형 프로그래밍을 가능케 하는 자바스크립트의 장점 중 하나

// 2. 함수 객체의 프로퍼티

function square(number) {
  return number * number;
}

console.dir(square); // f square(number)

// 함수 객체 고유의 프로퍼티인 arguments, caller, length, name,
// prototype 프로퍼티를 가지고 있음

// ✅ arguments 프로퍼티
// 자바스크립트는 함수의 매개변수와 인수의 개수가 일치하는 지 확인하지 않음

function multiply(x, y) {
  console.log(arguments);
  return x * y;
}

console.log(multiply()); // NaN
console.log(multiply(1)); // NaN
console.log(multiply(1, 2)); // 2
console.log(multiply(1, 2, 3)); // 2

// 선언된 매개변수의 개수보다 인수를 적게 전달하는 경우 undefined를 유지
// 선언된 매개변수의 개수보다 인수를 많이 전달하는 경우 초과된 인수는 무시함
// 초과된 인수를 버리지는 않고 arguments 객체의 프로퍼티로 보관함

// arguments 객체는 매개변수 개수를 확정할 수 없는 가변 인자 함수를
// 구현할 때 유용하다

function sum() {
  let res = 0;
  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i];
  }

  return res;
}

console.log(sum()); // 0
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3)); // 6

// arguments 객체는 배열 형태로 인자 정보를 담고 있지만 실제 배열이 아닌
// 유사 배열 객체로 작동함

// 유사 배열 객체 : length 프로퍼티를 가진 객체로 for문으로 순회할 수
// 있는 객체를 의미함

function sum2() {
  const array = Array.prototype.slice.call(arguments);
  return array.reduce(function (pre, cur) {
    return pre + cur;
  }, 0);
}

console.log(sum2(1, 2)); // 3
console.log(sum2(1, 2, 3, 4, 5)); // 15

// 위와 같은 번거로움을 해결하기 위해 ES6에서는 Rest 파라미터를 도입함

function sum3(...args) {
  return args.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum3(1, 2)); // 3
console.log(sum3(1, 2, 3, 4, 5)); // 15

// ✅ length 프로퍼티
// 함수를 정의할 때 선언한 매개변수의 개수를 가리킨다

function foo() {}
console.log(foo.length); // 0

// ✅ name 프로퍼티 : 함수의 이름이 아닌 함수 객체의 이름을 나타냄

const hi = function bar() {};
console.log(hi.name); // bar

// ✅ __proto__ 접근자 프로퍼티
// [[Prototype]] 내부 슬롯이 가리키는 프로토타입 객체에 접근하기 위해
// 사용하는 접근자 프로퍼티이며, 간접적으로 프로토타입 객체에 접근 가능

const obj = { a: 1 };

console.log(obj.__proto__ === Object.prototype); // true

console.log(obj.hasOwnProperty("a")); // true
console.log(obj.hasOwnProperty("__proto__")); // false

// ✅ prototype 프로퍼티 : constructor만이 소유하는 프로퍼티

console.log(function () {}.hasOwnProperty("prototype"));
// true

console.log({}.hasOwnProperty("prototype")); // false
