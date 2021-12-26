// 8.7 반복문 쪼개기

let averageAge = 0;
let totalSalary = 0;
for (const p of people) {
  averageAge += p.age;
  totalSalary += p.salary;
}
averageAge = averageAge / people.length;

let fixedTotalSalary = 0;
for (const p of people) {
  fixedTotalSalary += p.salary;
}

let fixedAverageAge = 0;
for (const p of people) {
  fixedAverageAge += p.age;
}
fixedAverageAge = fixedAverageAge / people.length;

// 📌 배경

// 반복문을 분리하면 사용하기도 쉬워진다.
// 한가지 값만 계산하는 반복문이라면 그 값만 곧바로 반환할 수 있다.

// 📌 절차

// 1. 반복문을 복제해 두 개로 만든다.
// 2. 반복문이 중복되어 생기는 부수효과를 파악해서 제거한다.
// 3. 테스트한다.
// 4. 완료됐으면, 각 반복문을 함수로 추출할지 고민해본다.
