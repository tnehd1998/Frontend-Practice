// 11.12 오류 코드를 예외로 바꾸기

if (data) {
  return new ShippingRules(data);
} else {
  return -23;
}

if (data) {
  return new ShippingRules(data);
} else {
  throw new OrderProcessingError(-23);
}

// 📌 배경

// 예외는 프로그래밍 언어에서 제공하는 독립적인 오류 처리 메커니즘이다.
// 예외에는 독자적인 흐름이 있어서 프로그램의 나머지에서는 오류 발생에 따른 복잡한 상황에 대처하는 코드를 작성하거나
// 읽을 일이 없게 해준다.

// 📌 절차

// 1. 콜스택 상위에 해당 예외를 처리할 예외 핸들러를 작성한다.
// 2. 테스트한다.
// 3. 해당 오류 코드를 대체할 예외와 그 밖의 예외를 구분할 식별 방법을 찾는다.
// 4. 정적 검사를 수행한다.
// 5. catch절을 수정하여 직접 처리할 수 있는 예외는 적절히 대처하고 그렇지 않은 예외는 다시 던진다.
// 6. 테스트한다.
// 7. 오류 코드를 반환하는 곳 모두에서 예외를 던지도록 수정한다. 하나씩 수정할 때마다 테스트한다.
// 8. 모두 수정했다면 그 오류 코드를 콜스택 위로 전달하는 코드를 모두 제거한다. 하나씩 수정할 때마다 테스트한다.
