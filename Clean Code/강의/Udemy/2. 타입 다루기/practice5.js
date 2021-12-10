// 5. isNaN

// isNaN: is Not a Number을 의미함, 느슨한 검사
// Number.isNaN: 엄격한 검사를 함, NaN가 맞는지 확인함

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

console.log(isNaN(123)); // false
console.log(isNaN(123 + "테스트")); // true
console.log(Number.isNaN(123 + "테스트")); // false
console.log(Number.isNaN(NaN)); // true
