// 6.10 여러 함수를 변환 함수로 묶기

function base(aReading) {}
function taxableCharge(aReading) {}

function enrichReading(argReading) {
  const aReading = _.cloneDeep(argReading);
  aReading.baseCharge = base(aReading);
  aReading.taxableCharge = taxableCharge(aReading);
  return aReading;
}

// 📌 배경

// 도출 작업들을 한데로 모아두면 검색과 갱신을 일관된 장소에서 처리할 수 있고 로직 중복도 막을 수 있다.
// 변환 함수를 사용하여 원본 데이터를 입력받아서 필요한 정보를 모두 도출한 뒤,
// 각각을 출력 데이터의 필드에 넣어 반환한다.
// 이렇게해두면 도출 과정을 검토할 일이 생겼을 때 변환 함수만 살펴보면 된다.

// 📌 절차

// 1. 변환할 레크드를 입력받아서 값을 그대로 반환하는 변환 함수를 만든다.
// 2. 묶을 함수 중 함수 하나를 골라서 본문 코드를 변환 함수로 옮기고, 처리 결과를 레코드에 새 필드로 기록한다.
// 그런 다음 클라이언트 코드가 이 필드를 사용하도록 수정한다.
// 3. 테스트한다.
// 4. 나머지 관련 함수도 위 과정에 따라 처리한다.
