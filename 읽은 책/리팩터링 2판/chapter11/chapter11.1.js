// 11.1 질의 함수와 변경 함수 분리하기

function getTotalOutstandingAndSendBill() {
  const result = customer.invoices.reduce(
    (total, each) => each.amount + total,
    0
  );
  sendBill();
  return result;
}

function totalOutstanding() {
  return customer.invoices.reduce((total, each) => each.amount + total, 0);
}
function sendBill() {
  emailGateway.send(formatBill(customer));
}

// 📌 배경

// 값을 반환하면서 부수효과도 있는 함수를 발견하면 상태를 변경하는 부분과 질의하는 부분을 분리해야 한다.

// 📌 절차

// 1. 대상 함수를 복제하고 질의 목적에 충실한 이름을 짓는다.
// 2. 새 질의 함수에서 부수효과를 모두 제거한다.
// 3. 정적 검사를 수행한다.
// 4. 원래 함수를 호출하는 곳을 모두 찾아낸다. 호출하는 곳에서 반환 값을 사용한다면 질의 함수를 호출하도록
// 바꾸고, 원래 함수를 호출하는 코드를 바로 아래 줄에 새로 추가한다. 하나 수정할때마다 테스트한다.
// 5. 원래 함수에서 질의 관련 코드를 제거한다.
// 6. 테스트한다.
