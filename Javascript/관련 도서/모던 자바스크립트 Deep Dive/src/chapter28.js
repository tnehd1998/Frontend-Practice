// Chapter 28) Number

// 1) Number 생성자 함수

const numObj = new Number();
console.log(numObj); // Number {[[PrimitiveValue]]: 0}

const numObj1 = new Number(10);
console.log(numObj1); // Number {[[PrimitiveValue]]: 10}

const numObj2 = new Number("Hello");
console.log(numObj2); // Number {[[PrimitiveValue]]: NaN}

// 2) Number 프로퍼티

// ✅ Number.EPSILON : ES6에서 도입되어 1과 1보다 큰 숫자 중에서
// 가장 작은 숫자와의 차이와 같다, 매우 작은 실수

function isEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}
console.log(isEqual(0.1 + 0.2, 0.3)); // true

// ✅ Number.MAX_VALUE : 자바스크립트에서 표현할 수 있는 가장 큰
// 양수 값, Number.MAX_VALUE보다 큰 수는 Infinity다

// ✅ Number.MIN_VALUE : 자바스크립트에서 표현할 수 있는 가장 작은
// 양수 값, Number.MIN_VALUE보다 작은 수는 0이다

// ✅ Number.MAX_SAFE_INTEGER : 안전하게 표현할 수 있는 가장 큰
// 정수 값

// ✅ Number.MIN_SAFE_INTEGER : 안전하게 표현할 수 있는 가장 작은
// 정수 값

// ✅ Number.POSITIVE_INFINITY : 양의 무한대, Infinity와 동일

// ✅ Number.NEGATIVE_INFINITY : 음의 무한대, -Infinity와 동일

// ✅ Number.NaN : 숫자가 아님을 나타내는 숫자 값
