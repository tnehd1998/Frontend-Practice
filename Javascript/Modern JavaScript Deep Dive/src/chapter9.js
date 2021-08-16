// Chapter 9) 타입 변환과 단축 평가

// 명시적 타입 변환, 타입 캐스팅 : 개발자가 의도적으로 값의 타입을
// 변환하는 것 😅
const x = 10;
const str = x.toString();
console.log(x, typeof x);
console.log(str, typeof str);

// 암묵적 타입 변환, 타입 강제 변환 : 자바스크립트 엔진에 의해 암묵적으로
// 타입이 자동으로 변환되는 것 😍
const x2 = 10;
const str2 = x + "";
console.log(x2, typeof x2);
console.log(str2, typeof str2);

// 가독성 면에서 암묵적 타입 변환이 명시적 타입 변환보다 좋음

// 1) 암묵적 타입 변환의 예시 : 코드의 흐름상 맞는 타입으로 자바스크립트가
// 자동적으로 타입을 변환함

// 문자열 타입으로 변환
console.log(1 + "2"); // "12"
console.log(0 + ""); // "0"
console.log(NaN + ""); // "NaN"

// 숫자 타입으로 변환
console.log("1" > 0); // true
console.log(+"1"); // 1
console.log(+"string"); // NaN
console.log(+true); // 1

// 불리언 타입으로 변환
const x3 = 10;
if ("") console.log(x3); // 출력 X
if (true) console.log(x3); // 10
if (0) console.log(x3); // 출력 X
if ("str") console.log(x3); // 10
if (null) console.log(x3); // 출력 X

// 2) 명시적 타입 변환의 예시: 개발자의 의도에 따라 명시적으로 타입을 변환 시킴

// 문자열 타입으로 변환
console.log(String(1)); // "1"
console.log(String(NaN)); // "NaN"
console.log(Infinity.toString()); // "Infinity"
console.log(true.toString()); // "true"
console.log(false + ""); // "false"

// 숫자 타입으로 변환
console.log(Number("13")); // 13
console.log(Number(true)); // 1
console.log(parseInt("-1")); // -1
console.log(+"10.53"); // 10.53
console.log(false * 1); // 0

// 불리언 타입으로 변환
console.log(Boolean("x")); // true
console.log(Boolean("")); // false
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(!!NaN); // false
console.log(!!1); // true

// 단축 평가 😍
// 한줄로 if문을 대체하여 사용이 가능함

// 3) 논리 연산자를 사용한 단축 평가
// 논리곱 연산자 (&&)
console.log("Cat" && "Dog"); // Dog
// &&연산자는 두개의 피연산자가 모두 true일때 true를 반환하는데,
// 첫번째 피연산자인 "Cat"는 평가를 하자면 true로 평가가 된다.
// 하지만 두번째 피연산자까지 고려를 하게되면 두번째 피연산자와
// 값이 다르기 때문에 문자열 "Dog"를 그대로 반환한다

// 논리합 연산자 (||)
console.log("Cat" || "Dog"); // Cat
// ||연산자는 두개의 피연산자 중 하나만 true여도 true를 반환하는데,
// 첫번째 피연산자인 "Cat"는 평가를 하자면 true로 평가가 된다.
// 하지만 두번째 피연산자까지 고려를 하게되면 두번째 피연산자와
// 값이 다르기 때문에 문자열 "Cat"을 반환한다.

console.log(false || "Dog"); // Dog
console.log(true || "Dog"); // true
console.log("Cat" || false); // Cat
console.log(false && "Dog"); // false
console.log("Cat" && false); // false
console.log(true && "Dog"); // Dog

const elem = null;
// console.log(elem.value);  에러 발생
console.log(elem && elem.value); // null출력

function getStringLength(str) {
  str = str || "";
  return console.log(str.length);
}
getStringLength(); // 0
getStringLength("hi"); // 2

function getStringLength2(str = "") {
  return console.log(str.length);
}
getStringLength2(); // 0
getStringLength2("hi"); // 2

// 4) 옵셔널 체이닝 연산자 (?.)😍😍😍
// ES11에서 도입된 방법, 좌항의 피연산자가 null 또는 undefined인 경우,
// undefined를 반환하고 그렇지 않으면 우항의 프로퍼티의 참조를 이어감

const ex = null;
const exValue = ex?.value;
console.log(exValue); // undefined

// 도입되기 전에는 &&로 대체하여 사용함

const exValueOld = ex && ex.value;
console.log(exValueOld); // null

// 논리 연산자 &&는 좌항 피연산자가 false로 평가되는 경우에 좌항 피연산자를
// 그대로 반환함

const exStr = "";
const exStrLengthOld = exStr && exStr.length;
console.log(exStrLengthOld); // ""

// 옵셔널 체이닝의 경우 좌항 피연산자가 false여도 우항의 값이 null이나
// undefined가 아닌 이상 해당 값을 참조함

const exStrLength = exStr?.length;
console.log(exStrLength); // 0

// 5) null병합 연산자 (??)
// ES11에 도입된 방법, 좌항의 피연산자가 null또는 undefined인 경우
// 우항의 피연산자를 반환, 그렇지 않으면 좌항의 피연산자를 반환함

const foo = null ?? "default string";
console.log(foo); // 'default string'

// 변수에 초기화 작업을 할때 매우 유용하게 쓰임
// 도입되기 전에는 논리 연산자 ||로 대체하여 쓰임

const fooOld = "" || "default string";
console.log(fooOld); // "default string"

// 좌항의 값이 null이나 undefined인 경우만 제외하고 무조건 좌항의
// 피연산자를 그대로 반환함

const foo2 = "" ?? "default string";
console.log(foo2); // ""
