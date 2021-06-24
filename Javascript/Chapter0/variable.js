// Use Strict
// VanillaJS를 사용할 때 상식적인 에러를 잡아주는 기능
"use strict";

// Variable : 데이터 타입, rw(read/write)
// 1. let (added in ES6) : 변수형 데이터 타입
let globalName = "global name";
{
  let name = "Billy";
  console.log(name);
  name = "Soo Dong";
  console.log(name);
}
console.log(name);
console.log(globalName);

// 2. var : 이제 절대 쓰지 않음

// 이유 1 : var hoisting
// 어디에서 선언했던가에 상관없이
// 가장 위로 끌어 올려 선언해주는 것

console.log(age);
age = 4;
console.log(age);
var age;

// 이유 2 : has no block scope
// 특정 {}안에서 사용한 변수도 외부에서 사용이 가능해져버림

{
  year = 2021;
  var year;
}
console.log(year);

// var은 이런 말도 안되는 코드들도 실행이 되버림
// let대신 var을 큰 프로그램에서 사용하면 답이 없어짐

// 3. const : 상수형 데이터 타입 r(read only)
// 보안상으로 좋음
// 다중스레드 작동에 안정적임
// 개발자의 실수를 방지해줌

const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

// Variable types
// 4. primitive: single item(number, string, boolean, null,
//                        undefined, symbol)
// 5. object: box container
// 6. function: first-class function

// 4-1-1. number
const count = 17; // integer
const size = 17.1; // decimal number(float, double)
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// 4-1-2. number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// 4-1-3. bigInt (새로 추가된 기능)
const bigInt = 123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// 4-2. string
const char = "c";
const brendan = "brendan";
const greeting = "hello " + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// 4-3. boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// 4-4. null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// 4-5. undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// 4-6. symbol, create unique identifiers for objects
// 고유한 식별자를 생성하는 기능
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// 5. object, real-life object, data structure
const billy = { name: "Billy", age: 24 };
console.log(billy);
billy.age = 25;
console.log(billy);

// 7. Dynamic typing: dynamically typed language
// 다음과 같이 변수의 형태가 유연하게 변하여 문제가 발생함
// 해당 문제를 해결하기 위해 TypeScript가 만들어짐
let text = "hello";
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`);
