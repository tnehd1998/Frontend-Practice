// Chapter 17) 생성자 함수에 의한 객체 생성

// 1. Object 생성자 함수

const person = new Object();

person.name = "Lee";
person.sayHello = function () {
  console.log("Hi! My name is " + this.name);
};

console.log(person); // {name: "Lee", sayHello: f}
person.sayHello(); // Hi! My name is Lee

// Object외에도 String, Number, Boolean, Function, Array,
// Date, RegExp, Promise도 생성자 함수로 생성 가능

// 생성자 함수를 사용해 객체를 생성하는 방식은 그다지 유용하지 않음 🤮

// 2. 생성자 함수
// ✅ 객체 리터럴에 의한 객체 생성 방식의 문제점
// - 직관적이며 간편하지만 단 하나의 객체만 생성할 수 있음

const circle1 = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius;
  },
};

console.log(circle1.getDiameter()); // 10

const circle2 = {
  radius: 10,
  getDiameter() {
    return 2 * this.radius;
  },
};

console.log(circle2.getDiameter()); // 20

// 같은 수행을 반복하여 비효율적임 🤮

// ✅ 생성자 함수에 의한 객체 생성 방식의 장점
// - 프로퍼티 구조가 동일한 객체 여러개를 간편하게 생성 가능

function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

const fCircle1 = new Circle(5);
const fCircle2 = new Circle(10);

console.log(fCircle1.getDiameter()); // 10
console.log(fCircle2.getDiameter()); // 20

// - this가 가리키는 값의 경우 🔥🔥🔥
// 1. 일반 함수로서 호출 : 전역 객체
// 2. 메서드로서 호출 : 메서드를 호출한 객체(마침표 앞의 객체)
// 3. 생성자 함수로서 호출 : 생성자 함수가 (미래에) 생성할 인스턴스

function foo() {
  console.log(this);
}
foo(); // window

const obj = { foo };
obj.foo(); // obj

const inst = new foo(); // inst

// - new 연산자와 함께 호출하면 해당 함수는 생성자 함수로 동작한다
// new 연산자와 함께 함수를 호출하지 않으면 일반 함수로 동작함

const circle3 = Circle(15);
console.log(circle3); // undefined
console.log(radius); // 15

// ✅ 생성자 함수의 인스턴스 생성 과정
// 자바스크립트 엔진은 인스턴스를 생성하고 반환하는 코드를 작성하지 않아도
// new 연산자와 함께 생성자 함수를 호출하면 암묵적인 처리를 통해
// 인스턴스를 생성하고 반환함

// 1. 인스턴스 생성과 this 바인딩 : 암묵적으로 생성된 빈 객체인 인스턴스는
// this에 바인딩된다
// 바인딩 : 식별자와 값을 연결하는 과정

// 2. 인스턴스 초기화 : this에 바인딩되어 있는 인스턴스를 초기화함

// 3. 인스턴스 반환 : 생성자 함수 내부의 모든 처리가 끝나면 완성된
// 인스턴스가 바인딩된 this가 암묵적으로 반환됨

// ⭐️ this가 아닌 다른 객체를 명시적으로 반환하면 this가 반환되지
// 못하고 return문에 명시한 객체가 반환되기 때문에 생성자 함수
// 내부에서 return문을 반드시 생략해야 한다

// ✅ 내부 메서드 [[Call]]과 [[Construct]]
// 함수는 객체이지만 일반 객체와 다르게 호출이 가능함
// 일반 객체가 가지고 있는 내부 슬롯과 내부 메서드는 물론, 함수로서 동작하기
// 위해 함수 객체만을 위한 [[Environment]], [[FormalParameters]]
// 등의 내부 슬롯과 [[Call]], [[Construct]] 같은 내부 메서드를
// 추가로 가지고 있음

function foo2() {}
foo(); // [[Call]]호출
new foo(); // [[Construct]]호출

// 모든 함수 객체는 내부 메서드 [[Call]]을 가지고 있지만 [[Construct]]를
// 갖는 것은 아님

// ✅ constructor와 non-constructor의 구분
// constructor : 함수 선언문, 함수 표현식, 클래스
// non-constructor : 메서드, 화살표 함수

function foo3() {}
const bar = function () {};
const baz = {
  x: function () {},
};

new foo(); // foo{}
new bar(); // bar{}
new baz.x(); // x {}

const arrow = () => {};

// new arrow(); // X

const obj3 = {
  x() {},
};

// new obj.x(); // X

// constructor 함수만 new 연산자와 함께 생성을 한다.

// ✅ new 연산자

function add(x, y) {
  return x + y;
}

let inst2 = new add();

console.log(inst2); // {}

function createUser(name, role) {
  return { name, role };
}

inst2 = new createUser("Lee", "admin");
console.log(inst2); // {name: "Lee", role: "admin"}

// ✅ new.target
// ES6부터 도입된 방법으로, new 연산자와 함께 생성자 함수로서 호출되면
// 함수 내부의 new.target은 함수 자신을 가리키고 new 연산자 없이
// 일반 함수로서 호출된 함수 내부의 new.target은 undefined다

function NewCircle(radius) {
  if (!new.target) {
    return new Circle(radius);
  }
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

const newCircle = NewCircle(5);
console.log(newCircle.getDiameter()); // 10
