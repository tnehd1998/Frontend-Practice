// 10.3 중첩 조건문을 보호 구문으로 바꾸기

function getPayAmount() {
  let result;
  if (isDead) result = deadAmount();
  else {
    if (isSeperated) result = seperatedAmount();
    else {
      if (isRetired) result = retiredAmount();
      else result = normalPayAmount();
    }
  }
  return result;
}

function fixedGetPayAmount() {
  if (isDead) return deadAmount();
  if (isSeperated) return seperatedAmount();
  if (isRetired) return retiredAmount();
  return normalPayAmount();
}

// 📌 배경

// 진입점이 하나라는 조건은 맞지만 반환점이 하나여야 한다는 규칙은 유용하지 않다.
// 코드에서는 명확함이 핵심이며 함수의 로직이 명백해지는 것을 기준으로 반환점을 설정한다.

// 📌 절차

// 1. 교체해야 할 조건 중 가장 바깥 것을 선택하여 보호 구문으로 바꾼다.
// 2. 테스트한다.
// 3. 1~2 과정을 필요한 만큼 반복한다.
// 4. 모든 보호 구문이 같은 결과를 반환한다면 보호 구문들의 조건식을 통합한다.
