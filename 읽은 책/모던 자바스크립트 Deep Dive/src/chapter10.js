// Chapter 10) 객체 리터럴

// 1) 객체 리터럴: 중괄호 내에 0개 이상의 프로퍼티를 정의하여 만드는 것
// 장점 : 객체를 생성하는 원리인 클래스를 먼저 정의하고 new 연산자와 함께
//       생성자를 호출할 필요가 없음
const person = {
  name: "Lee",
  sayHello: function () {
    console.log(`Hello! My name is ${this.name}.`);
  },
};

console.log(typeof person); // object
console.log(person); // {name: "Lee", sayHello: f}

// 2) 프로퍼티 : 키와 값으로 구성되고, 객체는 프로퍼티의 집합이다

const me = {
  name: "Lee", // 프로퍼티 키 : name, 프로퍼티 값 : "Lee"
  age: 18,
};

// 3) 메서드 : 프로퍼티 값이 함수인 경우
const circle = {
  radius: 5, // 프로퍼티
  getDiameter: function () {
    // 메서드
    return 2 * this.radius;
  },
};
console.log(circle.getDiameter()); // 10

// 4) 프로퍼티 접근 방법 : 마침표 표기법(.), 대괄호 표기법([...])
console.log(person.name); // 마침표 표기법
console.log(person["name"]); // 대괄호 표기법

// 대괄호 표기법 사용 시 반드시 키값을 ""로 감싸줘야함

// 객체에 존재하지 않는 프로퍼티에 접근을 해도 오류가 뜨지않고
// undefined를 반환하기 때문에 유의해서 사용해야함
console.log(person.age); // undefined

// 5) 프로퍼티 값 갱신, 동적 생성, 삭제
person.name = "Kim";
console.log(person); // {name: "Kim"}

person.age = 20;
console.log(person); // {name: "Kim", age: 20}

delete person.age;
console.log(person); // {name: "Kim"}

// 6) 객체 리터럴의 확장 기능 😍😍😍
// ES6부터 추가된 더욱 간편한 객체 리터럴의 확장 기능

// 프로퍼티 축약 표현
// ES5
const oldX = 1;
const oldY = 2;
const oldObj = {
  oldX: oldX,
  oldY: oldY,
};
console.log(oldObj); // {oldX:1, oldY:2}

// ES6 : 변수 이름과 프로퍼티 키가 동일한 이름일 때 생략 가능 😍
let x = 1;
let y = 2;
const obj = { x, y };
console.log(obj); // {x:1, y:2}

// 계산된 프로퍼티 이름
// ES5
const oldPrefix = "prop";
let oldI = 0;

const oldObj2 = {};

oldObj2[oldPrefix + "-" + ++oldI] = oldI;
oldObj2[oldPrefix + "-" + ++oldI] = oldI;
oldObj2[oldPrefix + "-" + ++oldI] = oldI;

console.log(oldObj2); // {prop-1: 1, prop-2: 2, prop-3: 3}

// ES6 : 내부에서 ``를 사용하여 바로 생성 가능
const prefix = "prop";
let i = 0;

const obj2 = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
};

console.log(obj2); // {prop-1: 1, prop-2: 2, prop-3: 3}

// 메서드 축약 표현
// ES5
const oldYou = {
  name: "Lee",
  sayHi: function () {
    console.log("Hi! " + this.name);
  },
};

oldYou.sayHi(); // Hi! Lee

// ES6 : 메서드를 정의할 때 function 키워드 생략 가능
const you = {
  name: "Lee",
  sayHi() {
    console.log(`Hi! ${this.name}`);
  },
};

you.sayHi(); // Hi! Lee
