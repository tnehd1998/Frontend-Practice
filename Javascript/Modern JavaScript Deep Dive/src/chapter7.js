// Chapter 7) 연산자

// 피연산자: 연산의 대상을 의미

// 1) 산술 연산자: 피연산자를 대상으로 수학적 계산을 수행해 새로운 값을 만듬

// 이항 산술 연산자: 2개의 피연산자를 통해 숫자 값을 만듬
console.log(5 + 2);

// 단항 산술 연산자: 1개의 피연산자를 산술 연산하여 숫자 값을 만듬
// 피연산자의 값을 변경하는 부수적인 효과가 있어 암묵적 할당이 이뤄짐
let num = 4;
console.log(++num);

// 숫자 타입이 아닌 피연산자에 +, - 단항 연산자를 사용하면 숫자 타입으로 변경
let x = "1";
console.log(typeof +x, +x);
x = true;
console.log(typeof +x, +x);
x = false;
console.log(typeof +x, +x);
x = "Hello";
console.log(typeof +x, +x);

// 2) 할당 연산자: 우항에 있는 피연산자의 평가 결과를 좌항에 있는 변수에
// 할당하여 변수 값이 변하는 효과가 있음
let y;
y = 10;
console.log(y);
y += 5;
console.log(y);
y -= 5;
console.log(y);

let str = "My name is ";
str += "Lee";
console.log(str);

let a;
console.log((a = 10));

let h1, h2, h3;
h1 = h2 = h3 = 5;
console.log(h1, h2, h3);

// 3) 비교 연산자
// 동등, 부동등 비교 (==, !=) : 해당 값이 같거나 다른지 비교
// 암묵적으로 동등, 부동등 (==, !=) 연산자는 먼저 암묵적 타입 변환을 통해
// 타입을 일치시킨 후 같은 값인지 비교
console.log(5 == 5);
console.log(5 == "5"); // true

// 일치, 불일치 비교 (===, !==) : 해당 값과 "타입이" 같거나 다른지 비교
console.log(5 === "5"); // false

// NaN를 확인할 때는 isNaN함수를 사용해야함
console.log(NaN === NaN); // false
console.log(isNaN(NaN)); // true

// 0은 음수 양수의 영향을 받지 않음
console.log(0 === -0); // true
console.log(0 == -0); // true
console.log(-0 === +0); // true

// ES6에서 도입된 Object.is를 사용하면 정확한 비교결과가 가능함
console.log(Object.is(-0, +0)); // false
console.log(Object.is(NaN, NaN)); // true

// 4) 삼항 조건 연산자 😍
// 조건식 ? 조건식이 true일 때 반환할 값 : 조건식이 false일 때 반환할 값
// 장점 : 값으로 평가할 수 있는 표현식인 문
// 단점 : if...else보다 가독성이 떨어짐
const even = 2;
const result = even % 2 ? "홀수" : "짝수";
console.log(result); // 짝수

// 5) 지수 연산자
// **(ES7에 도입된 방법)
console.log(2 ** 2); // 4

// Math.pow(지수 연산자가 도입되기 전에 쓰인 방법)
console.log(Math.pow(2, 2)); // 4

// 지수 연산자가 가독성 부분에서 훨씬 뛰어남
console.log(2 ** (2 ** 2)); // 16
console.log(Math.pow(Math.pow(2, 2), 2)); // 16

// 음수의 경우 무조건 괄호로 묶어서 사용해야함
console.log((-5) ** 2); // 25

// 할당 연산자와도 사용 가능
let five = 5;
five **= 2;
console.log(five);

// 이항 연산자중 우선순위가 가장 높음
console.log(2 * 5 ** 2); // 50
