// Chapter 16) 프로퍼티 어트리뷰트

// ✅ 내부 슬롯과 내부 메서드
// - 자바스크립트는 내부 슬롯과 내부 메서드에 직접적으로 접근하거나
// 호출할 수 있는 방법을 제공하지 않는다
// - 일부 내부 슬롯과 내부 메서드에 한해서 간접적으로 접근하게 함

const o = {};
// o[[Prototype]]; // error
console.log(o.__proto__); // Object.prototype

// ✅ 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체
// - 프로퍼티 어트리뷰트는 자바스크립트 엔진이 관리하는 내부 상태 값인
// 내부 슬롯이며 직접적으로 접근할 수 없지만 간접적으로 확인은 가능하다

const person = {
  name: "Lee",
};
console.log(Object.getOwnPropertyDescriptor(person, "name"));
// {value: "Lee", writable: true,
//  enumerable: true, configurable: true}

// ES8 : 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티
// 디스크립터 객체들을 반환

person.age = 20;
console.log(Object.getOwnPropertyDescriptors(person));
// {
// name : {value: "Lee", writable: true,
//  enumerable: true, configurable: true},
// age : {value: 20, writable: true,
//  enumerable: true, configurable: true}
// }

// ✅ 데이터 프로퍼티와 접근자 프로퍼티
// 데이터 프로퍼티 : 키와 값으로 구성된 일반적인 프로퍼티
// 접근자 프로퍼티 : 자체적으로 값을 갖지 않고 다른 데이터 프로퍼티의 값을
// 읽거나 저장할 때 호출되는 접근자 함수로 구성된 프로퍼티

// 1. 데이터 프로퍼티
// value: 프로퍼티 키를 통해 프로퍼티 값에 접근하면 반환되는 값
// writable: 프로퍼티 값의 변경 가능 여부
// enumerable: 프로퍼티의 열거 가능 여부
// configurable: 프로퍼티의 재정의 가능 여부

console.log(Object.getOwnPropertyDescriptor(person, "name"));
// {value: "Lee", writable: true,
//  enumerable: true, configurable: true}

// 2. 접근자 프로퍼티
// get: 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 읽을 때 사용
// set: 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 저장할 때 사용
// enumerable: 데이터 프로퍼티와 동일한 기능
// configurable: 데이터 프로퍼티와 동일한 기능

const person2 = {
  firstName: "Billy",
  lastName: "Lee",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
};

console.log(person2.firstName + " " + person2.lastName);
// Billy Lee

person2.fullName = "Brian Kim";
console.log(person2); // {firstName: "Brian", lastName: "Kim"}
console.log(person2.fullName); // Brian Kim

let descriptor = Object.getOwnPropertyDescriptor(person2, "firstName");
console.log(descriptor);
// {value: "Brian", writable: true,
//  enumerable: true, configurable: true}

descriptor = Object.getOwnPropertyDescriptor(person2, "fullName");
console.log(descriptor);
// {enumerable: true, configurable: true, get: f, set: f}

// 프로토타입 : 어떤 객체의 상위(부모) 객체의 역할을 하는 객체
// 프로토타입은 하위(자식) 객체에게 자신의 프로퍼티와 메서드를 상속함

// 접근자 프로퍼티와 데이터 프로퍼티의 구별 방법

console.log(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"));
// {enumerable: false, configurable: true, get: f, set: f}
console.log(Object.getOwnPropertyDescriptor(function () {}, "prototype"));
// {value: {...}, writable: true, enumerable: false,
// configurable: false}

// 3. 프로퍼티 정의
// 새로운 프로퍼티를 추가하면서 프로퍼티 어트리뷰트를 명시적으로 정의하거나,
// 기존 프로퍼티의 프로퍼티 어트리뷰트를 재정의 하는 것

const person3 = {};

Object.defineProperty(person3, "firstName", {
  value: "Billy",
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(person3, "lastName", {
  value: "Lee",
});

let descriptor3 = Object.getOwnPropertyDescriptor(person3, "firstName");
console.log("firstname", descriptor3);
// firstname {value: "Billy", writable: true,
// enumerable: true, configurable: true}

descriptor3 = Object.getOwnPropertyDescriptor(person3, "lastName");
console.log("lastName", descriptor3);
// lastname {value: "Lee", writable: false,
// enumerable: false, configurable: false}

console.log(Object.keys(person3)); // ["firstName"]

person3.lastName = "Kim";

delete person3.lastName;

descriptor3 = Object.getOwnPropertyDescriptor(person3, "lastName");
console.log("lastName", descriptor3);
// lastname {value: "Lee", writable: false,
// enumerable: false, configurable: false}

Object.defineProperty(person3, "fullName", {
  get() {
    return `${this.firstName} ${this.lastName}`;
  },
  set(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
  enumerable: true,
  configurable: true,
});

descriptor3 = Object.getOwnPropertyDescriptor(person3, "fullName");
console.log("fullName", descriptor3);
// fullName {enumerable: true, configurable: true, get: f,
// set: f}

person3.fullName = "Brian Kim";
console.log(person3); // {firstName: "Brian", lastName: "Lee"}

// 4. 객체 변경 방지

// ✅ 객체 확장 금지 : 프로퍼티 추가 금지를 의미

const person4 = { name: "Lee" };
console.log(Object.isExtensible(person4)); // true

Object.preventExtensions(person4);
console.log(Object.isExtensible(person4)); // false

person4.age = 20;
console.log(person4); // {name: "Lee"}

delete person4.name;
console.log(person4); // {}

// Object.defineProperty(person4, "age", { value: 20 });
// error

// ✅ 객체 밀봉 : 읽기와 쓰기만 가능

const person5 = { name: "Lee" };
console.log(Object.isSealed(person5)); // false

Object.seal(person5);
console.log(Object.isSealed(person5)); // true

console.log(Object.getOwnPropertyDescriptors(person5));
//{
// name : {value: "Lee", writable: true,
//  enumerable: true, configurable: false}
//}

person5.age = 20;
console.log(person5); // {name: "Lee"}

delete person5.name;
console.log(person5); // {name: "Lee"}

person5.name = "Kim";
console.log(person5); // {name: "Kim"}

// Object.defineProperty(person5, "name", { configurable: true });
// error

// ✅ 객체 동결 : 읽기만 가능

const person6 = { name: "Lee" };
console.log(Object.isFrozen(person6)); // false

Object.freeze(person6);
console.log(Object.isFrozen(person6)); // true

console.log(Object.getOwnPropertyDescriptors(person6));
//{
// name : {value: "Lee", writable: false,
//  enumerable: true, configurable: false}
//}

person6.age = 20;
console.log(person6); // {name: "Lee"}

delete person6.name;
console.log(person6); // {name: "Lee"}

person6.name = "Kim";
console.log(person6); // {name: "Lee"}

// Object.defineProperty(person6, "name", { configurable: true });
// error

// ✅ 불변 객체 : 중첩 객체까지 동결하여 변경이 불가능하게 함

// freeze 사용하는 경우
const person7 = {
  name: "Lee",
  address: { city: "Seoul" },
};

Object.freeze(person7);
console.log(Object.isFrozen(person7)); // true
console.log(Object.isFrozen(person7.address)); // false

person7.address.city = "Busan";
console.log(person7); // {name: "Lee", address: {city: "Busan"}}

// 모든 프로퍼티에 대해 재귀적으로 Object.freeze 메서드를 호출해야 함

function deepFreeze(target) {
  if (target && typeof target === "object" && !Object.isFrozen(target)) {
    Object.freeze(target);
    Object.keys(target).forEach((key) => deepFreeze(target[key]));
  }
  return target;
}

const person8 = {
  name: "Lee",
  address: { city: "Seoul" },
};

deepFreeze(person8);

console.log(Object.isFrozen(person8)); // true
console.log(Object.isFrozen(person8.address)); // true

person8.address.city = "Busan";
console.log(person8); // {name: "Lee", address: {city: "Seoul"}}
