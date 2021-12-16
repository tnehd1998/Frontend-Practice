// 5. Object.freeze

// Object를 동결시켜 값을 변경하지 못함
// shallow copy로 작동됨
// TypeScript의 경우 readonly를 사용

// Example 1

const STATUS = Object.freeze({
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  FAIL: "FAIL",
});

STATUS.PENDING = "PENDING2";
console.log(STATUS.PENDING); // "PENDING"
Object.isFrozen(STATUS); // true

// Example 2

function deepFreeze(targetObj) {
  // 1. 객체를 순회
  // 2. 값이 객체인지 확인
  // 3. 객체이면 재귀
  // 4. 그렇지 않으면 Object.freeze
  return Object.freeze(targetObj);
}
