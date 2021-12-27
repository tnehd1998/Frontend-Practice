// 10.1 조건문 분해하기

if (!aDate.isBefore(plan.summerStart) && !aDate.isAfter(plan.summerEnd)) {
  charge = quantity * plan.summerRate;
} else {
  charge = quantity * plan.regularRate + plan.regularServiceCharge;
}

if (summer()) {
  charge = summerCharge();
} else {
  charge = regularCharge();
}

// 📌 배경

// 복잡한 조건부 로직은 프로그램을 복잡하게 만드는 가장 흔한 원흉에 속한다.
// 거대한 코드 블록이 주어지면 코드를 부위별로 분해한 다음 해체된 코드 덩어리들을 각 덩어리의 의도를 살린
// 이름의 함수 호출로 바꿔주자.

// 📌 절차

// 1. 조건식과 그 조건에 딸린 조건절 각각을 함수로 추출한다.
