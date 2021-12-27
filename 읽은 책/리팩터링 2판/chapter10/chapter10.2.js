// 10.2 조건식 통합하기

if (anEmployee.seniority < 2) return 0;
if (anEmployee.monthsDisabled > 12) return 0;
if (anEmployee.isPartTime) return 0;

if (isNotEligibleForDisability()) return 0;

function isNotEligibleForDisability() {
  return (
    anEmployee.seniority < 2 ||
    anEmployee.monthsDisabled > 12 ||
    anEmployee.isPartTime
  );
}

// 📌 배경

// 비교하는 조건은 다르지만 그 결과로 수행하는 동작은 똑같은 코드들이 여러 있을 때, 어차피 같은 일을
// 할 거라면 조건 검사도 하나로 통합하는 게 낫다.
// 이럴 때 "and"연산자와 "or"연산자를 사용하면 여러 개의 비교 로직을 하나로 합칠 수 있다.

// 📌 절차

// 1. 해당 조건식들 모두에 부수효과가 없는지 확인한다.
// 2. 조건문 두 개를 선택하여 두 조건문의 조건식들을 논리 연산자로 결합한다.
// 3. 테스트한다.
// 4. 조건이 하나만 남을 때까지 2~3과정을 반복한다.
// 5. 하나로 합쳐진 조건식을 함수로 추출할지 고려해본다.
