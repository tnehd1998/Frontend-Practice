// 8.5 인라인 코드를 함수 호출로 바꾸기

let appliesToMass = false;
for (const s of states) {
  if (s === "MA") appliesToMass = true;
}

appliesToMass = states.includes("MA");

// 📌 배경

// 함수의 이름이 코드의 동작 방식보다는 목적을 말해주기 때문에 함수를 활용하면 코드를 이해하기가 쉬워진다.
// 함수는 중복을 없애는 데도 효과적이다.

// 📌 절차

// 1. 인라인 코드를 함수 호출로 대체한다.
// 2. 테스트한다.
