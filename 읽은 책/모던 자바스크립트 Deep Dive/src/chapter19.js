// Chapter 19) 프로토타입
// 자바스크립트는 클래스 기반 객체지향 프로그래밍 언어보다 효율적이며
// 더 강력한 객체지향 프로그래밍 능력을 가진 프로토타입 기반의
// 객체지향 프로그래밍 언어다

// 원시 타입의 값을 제외하고 자바스크립트를 이루고 있는 "모든 것"이 객체다

// 1. 객체지향 프로그래밍
// 객체의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임

const person = {
  name: "Lee",
  address: "Seoul",
};

console.log(person); // {name: "Lee", address: "Seoul"}

// 객체 : 속성을 통해 여러 개의 값을 하나의 단위로 구성한 복합적인 자료구조

const circle = {
  radius: 5,
  getDiameter() {
    return 2 * this.radius;
  },
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  },
  getArea() {
    return Math.PI * this.radius ** 2;
  },
};

console.log(circle);
// {radius: 5, getDiameter: f, getPerimeter: f, getArea: f}

console.log(circle.getDiameter()); // 10
console.log(circle.getPerimeter()); // 31.4149...
console.log(circle.getArea()); // 78.5398...

// 객체지향 프로그래밍은 객체의 상태를 나타내는 데이터와 상태 데이터를
// 조작할 수 있는 동작을 하나의 논리적인 단위로 묶어서 생각함

// 객체 : 상태 데이터와 동작을 하나의 논리적인 단위로 묶은 복합적인 자료구조
// 프로퍼티 : 객체의 상태 데이터
// 메서드 : 객체의 동작

// 2. 상속과 프로토타입
// 어떤 객체의 프로퍼티 또는 메서드를 다른 객체가 상속받아 그대로 사용하는 것
// 불필요한 중복을 제거하여 구현을 하며 프로토타입을 기반으로 상속을 구현함

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};

const circle1 = new Circle(1);
const circle2 = new Circle(2);

console.log(circle1.getArea === circle2.getArea); // true
console.log(circle1.getArea()); // 3.141592...
console.log(circle2.getArea()); // 12.5663...

// 상속은 코드의 재사용이란 관점에서 매유 유용하다

// 3. 프로토타입 객체
// 모든 객체는 하나의 프로토타입을 가지며 생성자 함수와 연결되어 있음

// ✅ __proto__ 접근자 프로퍼티
// [[Prototype]] 내부 슬롯에 간접적으로 접근할 수 있다

// 모든 객체가 __proto__ 접근자 프로퍼티를 사용할수 있는 것이 아니기 때문에
// 프로토타입의 참조를 얻고 싶은 경우에는 Object.getPrototypeOf,
// 프로토타입을 교체하고 싶은 경우에는 Object.setPrototypeOf 메서드를
// 사용하는 것이 권장됨

// ✅ 함수 객체의 prototype 프로퍼티
// 함수 객체만이 소유하는 prototype 프로퍼티는 생성자 함수가 생성할
// 인스턴스의 프로토타입을 가리킨다

// non-constructor인 화살표 함수와 ES6 메서드 축약 표현으로 정의한
// 메서드는 prototype 프로퍼티를 소유하지 않으며 생성하지 않음

const Person = (name) => {
  this.name = name;
};

console.log(Person.hasOwnProperty("prototype")); // false
console.log(Person.prototype); // undefined

const obj = {
  foo() {},
};

console.log(obj.foo.hasOwnProperty("prototype")); // false
console.log(obj.foo.prototype); // undefined

// 모든 객체가 가지고 있는 __proto__ 접근자 프로퍼티와 함수 객체만이
// 가지고 있는 prototype 프로퍼티는 결국 동일한 프로토타입을 가리킨다

function Person2(name) {
  this.name = name;
}

const me = new Person2("Lee");
console.log(Person2.prototype === me.__proto__); // true

// ✅ 프로토타입의 constructor 프로퍼티와 생성자 함수
// 모든 프로토타입은 constructor 프로퍼티를 가지고 있음

console.log(me.constructor === Person2); // true

// 4. 리터럴 표기법에 의해 생성된 객체의 생성자 함수와 프로토타입
// 프로토타입과 생성자 함수는 단독으로 존재할 수 없고 언제나 쌍으로 존재함

// 5. 프로토타입의 생성 시점
// 프로토타입은 생성자 함수가 생성되는 시점에 더불어 생성됨

// ✅ 사용자 정의 생성자 함수와 프로토타입 생성시점
// constructor는 함수 정의가 평가되어 함수 객체를 생성하는 시점에
// 프토토타입도 더불어 생성된다

console.log(Person3.prototype); // {constructor: f}
function Person3(name) {
  this.name = name;
}

const Person4 = (name) => {
  this.name = name;
};
console.log(Person4.prototype); // undefined

// 6. 객체 생성 방식과 프로토타입의 결정

// ✅ 객체 리터럴에 의해 생성된 객체의 프로토타입

const obj2 = { x: 1 };
console.log(obj2.constructor === Object); // true
console.log(obj2.hasOwnProperty("x")); // true

// ✅ Object 생성자 함수에 의해 생성된 객체의 프로토타입
const obj3 = new Object();
obj3.x = 1;

console.log(obj3.constructor === Object); // true
console.log(obj3.hasOwnProperty("x")); // true

// ✅ 생성자 함수에 의해 생성된 객체의 프로토타입

function Person5(name) {
  this.name = name;
}

Person5.prototype.sayHello = function () {
  console.log(`Hi! My name is ${this.name}`);
};

const me2 = new Person5("Lee");
const you = new Person5("Kim");

me2.sayHello(); // Hi! My name is Lee
you.sayHello(); // Hi! My name is Kim

// 7. 프로토타입 체인
// 프로토타입 체인 : 상속과 프로퍼티 검색을 위한 메커니즘
// 스코프 체인 : 식별자 검색을 위한 메커니즘
// 스코프 체인과 프로토타입 체인은 서로 연관없이 별도로 동작하는 것이 아니라
// 서로 협력하여 식별자와 프로퍼티를 검색하는 데 사용된다

// 8. 오버라이딩과 프로퍼티 섀도잉

const Person6 = (function () {
  function Person6(name) {
    this.name = name;
  }
  Person6.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}`);
  };
  return Person6;
})();

const me3 = new Person6("Lee");

me3.sayHello = function () {
  console.log(`Hey! My name is ${this.name}`);
};

me3.sayHello(); // Hey! My name is Lee

// 프로토타입 프로퍼티와 같은 이름의 프로퍼티를 인스턴스에 추가하면 프로토타입
// 체인을 따라 프로토타입 프로퍼티를 검색하여 프로토타입 프로퍼티를 덮어쓰는
// 것이 아니라 인스턴스 프로퍼티로 추가한다
// 프로퍼티 섀도잉 : 상속 관계에 의해 프로퍼티가 가려지는 현상

// 오버라이딩 : 상위 클래스가 가지고 있는 메서드를 하위 클래스가 재정의하는 것

delete me3.sayHello;
me3.sayHello(); // Hi! My name is Lee

// 프로토타입 메서드가 아닌 인스턴스 메서드 sayHello가 삭제됨

delete me3.sayHello;
me3.sayHello(); // Hi! My name is Lee

// 하위 객체를 통해 프로토타입의 프로퍼티를 변경 또는 삭제하는 것은 불가능함
// 하위 객체를 통해 프로토타입에 get 엑세스는 가능하나 set 엑세스는 안됨

// 프로토타입 프로퍼티를 변경 또는 삭제하려면 프로토타입에 직접 접근해야 한다

Person6.prototype.sayHello = function () {
  console.log(`Hey! My name is ${this.name}`);
};

me3.sayHello(); // Hey! My name is Lee

delete Person6.prototype.sayHello;
// me3.sayHello(); // error

// 9. 프로토타입의 교체
// 프로로타입은 생성자 함수 또는 인스턴스에 의해 교체가 가능함

// ✅ 생성자 함수에 의한 프로토타입의 교체

const Person7 = (function () {
  function Person7(name) {
    this.name = name;
  }
  Person7.prototype = {
    sayHello() {
      console.log(`Hi! My name is ${this.name}`);
    },
  };
  return Person7;
})();

const me4 = new Person7("Lee");

console.log(me4.constructor === Person7); // false
console.log(me4.constructor === Object); // true

// constructor 프로퍼티를 추가하여 프로토타입의 constructor 프로퍼티를
// 되살린다

const Person8 = (function () {
  function Person8(name) {
    this.name = name;
  }
  Person8.prototype = {
    constructor: Person8,
    sayHello() {
      console.log(`Hi! My name is ${this.name}`);
    },
  };
  return Person8;
})();

const me5 = new Person8("Lee");

console.log(me5.constructor === Person8); // true
console.log(me5.constructor === Object); // false

// ✅ 인스턴스에 의한 프로토타입의 교체
// 인스턴스의 __proto__ 접근자 프로퍼티를 통해 프로토타입을 교체할 수 있다

function Person9(name) {
  this.name = name;
}

const me6 = new Person9("Lee");

const parent = {
  sayHello() {
    console.log(`Hi! My name is ${this.name}`);
  },
};

Object.setPrototypeOf(me6, parent);
me6.sayHello(); // Hi! My name is Lee

console.log(me6.constructor == Person9); // false
console.log(me6.constructor == Object); // true

// constructor 프로퍼티를 추가하여 파괴된 생성자 함수와 프로토타입을 연결

function Person10(name) {
  this.name = name;
}

const me7 = new Person10("Lee");

const parent2 = {
  constructor: Person10,
  sayHello() {
    console.log(`Hi! My name is ${this.name}`);
  },
};

Person10.prototype = parent2;

Object.setPrototypeOf(me7, parent2);

me7.sayHello(); // Hi! My name is Lee

console.log(me7.constructor === Person10); // true
console.log(me7.constructor === Object); // false

console.log(Person10.prototype == Object.getPrototypeOf(me7));
// true

// 10. instanceof 연산자
// 우변의 생성자 함수의 prototype에 바인딩된 객체가 좌변의 객체의 프로토타입
// 체인 상에 존재하면 true로 평가되고, 그렇지 않으면 false로 평가됨

console.log(me7 instanceof Person10); // true
console.log(me7 instanceof Object); // true

const parent3 = {};
Object.setPrototypeOf(me7, parent);

console.log(Person10.prototype === parent3); // false
console.log(parent3.constructor === Person10); // false

console.log(me7 instanceof Person10); // false
console.log(me7 instanceof Object); // true

// instanceof 연산자는 생성자 함수의 prototype에 바인딩된 객체가
// 프로토타입 체인 상에 존재하는지 확인한다

// 11. 직접 상속

// ✅ Object.create에 의한 직접 상속
// - new 연산자가 없이도 객체를 생성 가능
// - 프로토타입을 지정하면서 객체를 생성 가능
// - 객체 리터럴에 의해 생성된 객체도 상속받을 수 있다

// ✅ 객체 리터럴 내부에서 __proto__에 의한 직접 상속

const myProto = { x: 10 };

const obj4 = {
  y: 20,
  __proto__: myProto,
};

console.log(obj4.x, obj4.y); // 10 20
console.log(Object.getPrototypeOf(obj4) === myProto); // true

// 12. 정적 프로퍼티 / 메서드
// 생성자 함수로 인스턴스를 생성하지 않아도 참조/호출할 수 있는 프로퍼티/메서드

function Person11(name) {
  this.name = name;
}

Person11.prototype.sayHello = function () {
  console.log(`Hi! My name is ${this.name}`);
};
Person11.staticProp = "static prop";
Person11.staticMethod = function () {
  console.log("staticMethod");
};

const me8 = new Person11("Lee");

Person11.staticMethod(); // staticMethod
// me8.staticMethod(); // error

// 13. 프로퍼티 존재 확인

// ✅ in 연산자 : 객체 내에 특정 프로퍼티가 존재하는지 여부를 확인

const person12 = {
  name: "Lee",
  address: "Seoul",
};

console.log("name" in person12); // true
console.log("address" in person12); // true
console.log("age" in person12); // false

// ES6에서 도입된 Reflect.has 메서드 사용 가능

console.log(Reflect.has(person12, "name")); // true
console.log(Reflect.has(person12, "toString")); // true

// ✅ Object.prototype.hasOwnProperty 메서드
console.log(person12.hasOwnProperty("name")); //true
console.log(person12.hasOwnProperty("age")); // false

console.log(person12.hasOwnProperty("toString")); // false

// 14. 프로퍼티 열거

// ✅ for ... in 문

for (const key in person12) {
  console.log(key + ": " + person12[key]);
}
// name: Lee
// address: Seoul

// [[Enumerable]]의 값이 false이기 때문에
// toString과 같은 Object.prototype의 프로퍼티는 열거되지 않음

// for...in문은 상속받은 프로퍼티도 열거하기 때문에
// 배열에는 for...in문을 사용하지 말고 일반적인 for문이나 for...of문
// 또는 Array.prototype.forEach메서드를 사용하기를 권장함

// ✅ Object.keys/values/entries 메서드

const person13 = {
  name: "Lee",
  address: "Seoul",
  __proto__: { age: 20 },
};

console.log(Object.keys(person13)); // ["name", "address"]

// ES8에서 도입된 Object.values 메서드는 객체 자신의 열거 가능한 프로퍼티
// 값을 배열로 반환한다

console.log(Object.values(person13)); // ["Lee", "Seoul"]

// ES8에서 도입된 Object.entries 메서드는 객체 자신의 열거 가능한 프로퍼티
// 키와 값의 쌍의 배열을 배열에 담아 반환한다

console.log(Object.entries(person13));
// [["name", "Lee"], ["address", "Seoul"]]

Object.entries(person13).forEach(([key, value]) => console.log(key, value));
// name Lee
// address Seoul
