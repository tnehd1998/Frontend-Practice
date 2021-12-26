// 9.1 변수 쪼개기

let temp = 2 * (height + width);
console.log(temp);
temp = height * width;
console.log(temp);

const perimeter = 2 * (height + width);
console.log(perimeter);
const area = height * width;
console.log(area);

// 📌 배경

// 역할 하나당 변수 하나를 사용한다.

// 📌 절차

// 1. 변수를 선언한 곳과 값을 처음 대입하는 곳에서 변수 이름을 바꾼다.
// 2. 가능하면 이때 불변으로 선언한다.
// 3. 이 변수에 두 번째로 값을 대입하는 곳 앞까지의 모든 참조를 새로운 변수 이름으로 바꾼다.
// 4. 두번째 대입 시 변수를 원래 이름으로 다시 선언한다.
// 5. 테스트한다.
// 6. 반복한다. 매 반복에서 변수를 새로운 이름으로 선언하고 다음번 대입 때까지의 모든 참조를
// 새 변수명으로 바꾼다. 이 과정을 마지막 대입까지 반복한다.
