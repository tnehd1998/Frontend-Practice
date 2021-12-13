// 3. 배열 요소에 접근하기

// React Hook의 useState를 사용할 때 사용하는 원리와 같음

// Example 1

function printArray(input) {
  console.log(input[0]);
  console.log(input[1]);
}

function fixedPrintArray(input) {
  const [firstInput, secondInput] = input;
  console.log(firstInput);
  console.log(secondInput);
}

// Example 2

function formatDate(targetDate) {
  const date = targetDate.toISOString().split("T")[0];
  const [year, month, day] = date.split("-");
  return `${year}년 ${month}월 ${day}일`;
}

function fixedFormatDate(targetDate) {
  const [date] = targetDate.toISOString().split("T");
  const [year, month, day] = date.split("-");
  return `${year}년 ${month}월 ${day}일`;
}
