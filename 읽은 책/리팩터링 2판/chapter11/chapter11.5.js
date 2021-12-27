// 11.5 매개변수를 질의 함수로 바꾸기

availableVacation(anEmployee, anEmployee.grade);
function availableVacation(anEmployee, grade) {}

availableVacation(anEmployee);
function availableVacation(anEmployee) {
  const grade = anEmployee.grade;
}

// 📌 배경

// 매개변수 역시 중복은 피하는 게 좋으며 짧을수록 이해하기 쉽다.

// 📌 절차

// 1. 필요하다면 대상 매개변수의 값을 계산하는 코드를 별도 함수로 추출해놓는다.
// 2. 함수 본문에서 대상 매개변수로의 참조를 모두 찾아서 그 매개변수의 값을 만들어주는 표현식을
// 참조하도록 바꾼다. 하나 수정할 때마다 테스트한다.
// 3. 함수 선언 바꾸기로 대상 매개변수를 없앤다.
