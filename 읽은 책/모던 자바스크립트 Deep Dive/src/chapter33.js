// Chapter 33) 7번째 데이터 타입 Symbol

// 1) 심벌이란?
// 심벌은 ES6에서 도입된 7번째 데이터 타입으로 변경 불가능한 원시 타입의
// 값이다. 심벌 값은 다른 값과 중복되지 않는 유일무이한 값이다

// 2) 심벌 값의 생성

// ✅ Symbol 함수 : 다른 값과 절대 중복되지 않는 유일무이한 값

let mySymbol = Symbol();
console.log(typeof mySymbol); // symbol
console.log(mySymbol); // Symbol()

const mySymbol1 = Symbol("mySymbol");
const mySymbol2 = Symbol("mySymbol");

console.log(mySymbol1 === mySymbol2); // false

mySymbol = Symbol("mySymbol");

console.log(mySymbol.description); // mySymbol
console.log(mySymbol.toString()); // Symbol(mySymbol)

// 심벌 값은 암묵적으로 문자열이나 숫자 타입으로 변환되지 않는다
// 단, 불리언 타입으로는 암묵적으로 타입 변환된다

// ✅ Symbol.for / Symbol.keyFor 메서드

const s1 = Symbol.for("mySymbol");
const s2 = Symbol.for("mySymbol");

console.log(s1 === s2); // true

console.log(Symbol.keyFor(s1)); // mySymbol

// 3) 심벌과 상수

const Direction = {
  UP: Symbol("up"),
  DOWN: Symbol("down"),
  LEFT: Symbol("left"),
  RIGHT: Symbol("right"),
};

const myDirection = Direction.UP;

if (myDirection === Direction.UP) {
  console.log("You are going UP");
}

// 4) 심벌과 프로퍼티 키

const obj = {
  [Symbol.for("mySymbol")]: 1,
};

console.log(obj[Symbol.for("mySymbol")]); // 1

// 심벌 값은 유일무이한 값이므로 심벌 값으로 프로퍼티 키를 만들면 다른
// 프로퍼티 키와 절대 충돌하지 않는다

// 5) 심벌과 프로퍼티 은닉

for (const key in obj) {
  console.log(key);
}

console.log(Object.keys(obj)); // []
console.log(Object.getOwnPropertyNames(obj)); // []

console.log(Object.getOwnPropertySymbols(obj));
// [Symbol(mySymbol)]

const symbolKey1 = Object.getOwnPropertySymbols(obj)[0];
console.log(obj[symbolKey1]); // 1

// 6) 심벌과 표준 빌트인 객체 확장
// 표준 빌트인 객체에 사용자 정의 메서드를 직접 추가하여 확장하는 것은
// 권장되지 않음
// 심벌 값으로 프로퍼티 키를 생성하여 표준 빌트인 객체를 확장하면
// 어떤 프로퍼티 키와도 충돌할 위험이 없어 안전하게 사용이 가능함

Array.prototype[Symbol.for("sum")] = function () {
  return this.reduce((acc, cur) => acc + cur, 0);
};

console.log([1, 2][Symbol.for("sum")]()); // 3

// 7) Well-known Symbol : 자바스크립트가 기존 제공하는 빌트인 심벌 값

const iterable = {
  [Symbol.iterator]() {
    let cur = 1;
    const max = 5;
    return {
      next() {
        return { value: cur++, done: cur > max + 1 };
      },
    };
  },
};

for (const num of iterable) {
  console.log(num); // 1 2 3 4 5
}
