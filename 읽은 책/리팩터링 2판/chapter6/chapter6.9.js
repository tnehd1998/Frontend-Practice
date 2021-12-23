// 6.9 여러 함수를 클래스로 묶기

function base(aReading) {}
function taxableCharge(aReading) {}
function calculateBaseCharge(aReading) {}

class Reading {
  base(aReading) {}
  taxableCharge(aReading) {}
  calculateBaseCharge(aReading) {}
}

// 📌 배경

// 클래스로 묶으면 이 함수들이 공유하는 공통 환경을 더 명확하게 표현할 수 있고,
// 각 함수에 전달되는 인수를 줄여서 객체 안에서의 함수 호출을 간결하게 만들 수 있다.

// 📌 절차

// 1. 함수들이 공유하는 공통 데이터 레코드를 캡슐화한다.
// 2. 공통 레코드를 사용하는 함수 각각을 새 클래스로 옮긴다.
// 3. 데이터를 조작하는 로직들은 함수로 추출해서 새 클래스로 옮긴다.
