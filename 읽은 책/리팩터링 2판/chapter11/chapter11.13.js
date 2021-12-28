// 11.13 예외를 사전확인으로 바꾸기

function getValueForPeriod(periodNumber) {
  try {
    return values[periodNumber];
  } catch (e) {
    return 0;
  }
}

function getValueForPeriod(periodNumber) {
  return periodNumber >= values.length ? 0 : values[periodNumber];
}

// 📌 배경

// 함수 수행 시 문제가 될 수 있는 조건을 함수 호출 전에 검사할 수 있다면, 예외를 던지는 대신 호출하는 곳에서
// 조건을 검사하도록 해야 한다.

// 📌 절차

// 1. 예외를 유발하는 상황을 검사할 수 있는 조건문을 추가한다. catch 블록의 코드를 조건문의 조건절중 하나로 옮기고,
// 남은 try 블록의 코드를 다른 조건절로 옮긴다.
// 2. catch 블록에 어서션을 추가하고 테스트한다.
// 3. try문과 catch 블록을 제거한다.
// 4. 테스트한다.
