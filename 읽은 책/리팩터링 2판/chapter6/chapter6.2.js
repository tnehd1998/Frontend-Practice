// 6.2 함수 인라인하기

function getRating(driver) {
  return moreThanFiveLateDeliveries(driver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(driver) {
  return driver.numberOfLateDeliveries > 5;
}

function fixedGetRating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

// 📌 배경

// 간접 호출은 유용할 수도 있지만 쓸데없는 간접 호출은 거슬릴 뿐이다.

// 함수 인라인하기를 활용하면 유용한 것만 남기고 나머지는 제거할 수 있다.

// 📌 절차

// 1. 다형 메서드인지 확인한다.
// 2. 인라인할 함수를 호출하는 곳을 모두 찾는다.
// 3. 각 호출문을 함수 본문으로 교체한다.
// 4. 하나씩 교체할 때마다 테스트한다.
// 5. 함수 정의를 삭제한다.
