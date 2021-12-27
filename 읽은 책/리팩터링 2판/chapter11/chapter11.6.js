// 11.6 질의 함수를 매개변수로 바꾸기

targetTemperature(aPlan);
function targetTemperature(aPlan) {
  currentTemperature = thermostat.currentTemperature;
}

targetTemperature(aPlan, thermostat.currentTemperature);
function targetTemperature(aPlan, currentTemperature) {}

// 📌 배경

// 함수가 더 이상 특정 원소에 의존하길 원치 않을 때 일어난다.

// 📌 절차

// 1. 변수 추출하기로 질의 코드를 함수 본문의 나머지 코드와 분리한다.
// 2. 함수 본문 중 해당 질의를 호출하지 않는 코드들을 별도 함수로 추출한다.
// 3. 방금 만든 변수를 인라인하여 제거한다.
// 4. 원래 함수도 인라인한다.
// 5. 새 함수의 이름을 원래 함수의 이름으로 고쳐준다.
