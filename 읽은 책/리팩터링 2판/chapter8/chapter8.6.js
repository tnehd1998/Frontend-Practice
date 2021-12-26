// 8.6 문장 슬라이드하기

const pricingPlan = retrievePricingPlan();
const order = retrieveOrder();
let charge;
const chargePerUnit = pricingPlan.unit;

const fixedPricingPlan = retrievePricingPlan();
const fixedChargePerUnit = pricingPlan.unit;
const order = retrieveOrder();
let charge;

// 📌 배경

// 관련된 코드들이 가까이 모여 있다면 이해하기가 더 쉽다.
// 관련 코드끼리 모으는 작업은 다른 리팩터링의 준비 단계로 자주 행해진다.

// 📌 절차

// 1. 코드 조각을 이동할 목표 위치를 찾는다. 코드 조각의 원래 위치와 목표 위치 사이의 코드들을 훑어보면서,
// 조각을 모으고 나면 동작이 달라지는 코드가 있는지 살핀다.
// 2. 코드 조각을 원래 위치에서 잘라내어 목표 위치에 붙여 넣는다.
// 3. 테스트한다.
