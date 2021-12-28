// 11.11 수정된 값 반환하기

let totalAscent = 0;
calculateAscent();
function calculateAscent() {
  for (let i = 1; i < points.length; i++) {
    const verticalChange = points[i].elevation - points[i - 1].elevation;
    totalAscent += verticalChange > 0 ? verticalChange : 0;
  }
}

const totalAscent = calculateAscent();
function calculateAscent() {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    const verticalChange = points[i].elevation - points[i - 1].elevation;
    result += verticalChange > 0 ? verticalChange : 0;
  }
  return result;
}

// 📌 배경

// 변수를 갱신하는 함수라면 수정된 값을 반환하여 호출자가 그 값을 변수에 담아두도록 하는 것이다.
// 이 방식으로 코딩하면 호출자 코드를 읽을 때 변수가 갱신될 것임을 분명히 인지하게 된다.
// 해당 변수의 값을 단 한 번만 정하면 될 때 특히 유용하다.

// 📌 절차

// 1. 함수가 수정된 값을 반환하게 하여 호출자가 그 값을 자신의 변수에 저장하게 한다.
// 2. 테스트한다.
// 3. 피호출 함수 안에 반환할 값을 가리키는 새로운 변수를 선언한다.
// 4. 테스트한다.
// 5. 계산이 선언과 동시에 이뤄지도록 통합한다.
// 6. 테스트한다.
// 7. 피호출 함수의 변수 이름을 새 역할에 어울리도록 바꿔준다.
// 8. 테스트한다.
