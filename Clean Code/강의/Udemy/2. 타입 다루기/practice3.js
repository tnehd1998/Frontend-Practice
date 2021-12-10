// 3. eqeq 줄이기

// == : 타입은 무시하고 값만 비교, 현업에서 사용하기 너무 위험 (eqeq)
// === : 타입과 값을 모두 비교 (eqeqeq)

console.log("1" == 1); // true
console.log(1 == true); // true

console.log("1" === 1); // false
console.log(1 === true); // false
