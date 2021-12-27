// 11.3 플래그 인수 제거하기

function setDimension(name, value) {
  if (name === "height") {
    this._height = value;
    return;
  }
  if (name === "width") {
    this._width = value;
    return;
  }
}

function setHeight(value) {
  this._height = value;
}
function setWidth(value) {
  this._width = value;
}

// 📌 배경

// 플래그 인수를 제거하면 코드가 깔끔해짐은 물론 프로그래밍 도구에도 도움을 준다.
// 플래그 인수가 둘 이상이면 함수 하나가 너무 많은 일을 처리하고 있다는 신호이기도 하다.
// 그러니 같은 로직을 조합해내는 더 간단한 함수를 만들 방법을 고민해봐야 한다.

// 📌 절차

// 1. 매개변수로 주어질 수 있는 값 각각에 대응하는 명시적 함수들을 생성한다.
// 2. 원래 함수를 호출하는 코드들을 모두 찾아서 각 리터럴 값에 대응되는 명시적 함수를 호출하도록 수정한다.
