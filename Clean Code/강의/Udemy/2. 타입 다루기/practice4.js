// 4. 형변환 주의하기

// 명시적인 형변환 : 사용자가 형변환을 하는 것
// 암묵적인 형변환 : 자바스크립트가 알아서 형변환을 하는 것
// 명시적인 형변환을 하는것이 매우 중요함

// 암묵적인 형변환의 예시

console.log(11 + " 문자와 결합"); // "11 문자와 결합"

console.log(!!"문자열"); // true
console.log(!!""); // false

console.log(parseInt("9.9999", 10)); // 9

// 명시적인 형변환의 예시

console.log(String(11 + " 문자와 결합")); // "11 문자와 결합"

console.log(Boolean("문자열")); // true
console.log(Boolean("")); // false

console.log(Number("11")); // 11
