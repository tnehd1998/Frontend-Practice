// 9.6 매직 리터럴 바꾸기

function potentialEnergy(mass, height) {
  return mass * 9.81 * height;
}

const STANDARD_GRAVITY = 9.81;
function fixedPotentialEnergy(mass, height) {
  return mass * STANDARD_GRAVITY * height;
}

// 📌 배경

// 코드 자체가 뜻이 분명하게 드러내는 게 좋다.
// 상수를 정의하고 숫자 대신 상수를 사용하도록 바꾼다.

// 📌 방법

// 1. 상수를 선언하고 매직 리터럴을 대입한다.
// 2. 해당 리터럴이 사용되는 곳을 모두 찾는다.
// 3. 찾은 곳 각각에서 리터럴이 새 상수와 똑같은 의미로 쓰였는지 확인하며, 같은 의미라면 상수로 대체한 후
// 테스트한다.
