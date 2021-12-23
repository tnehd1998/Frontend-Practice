// 6.11 단계 쪼개기

const orderData = orderString.split(/\s+/);
const productPrice = priceList[orderData[0].split("-")[1]];
const orderPrice = parseInt(orderData[1]) * productPrice;

const fixedOrderRecord = parseOrder(order);
const fixedOrderPrice = price(orderRecord, priceList);

function parseOrder(aString) {
  const values = aString.split("/s+/");
  return {
    productID: values[0].split("-")[1],
    quantity: parseInt(values[1]),
  };
}
function price(order, priceList) {
  return order.quantity * priceList[order.productID];
}

// 📌 배경

// 분리하는 가장 간편한 방법 하나는 동작을 연이은 두 단계로 쪼개는 것이다.
// 코드 영역들을 별도 모듈로 분리하면 그 차이를 코드에서 훨씬 분명하게 드러낼 수 있다.

// 📌 절차

// 1. 두 번째 단계에 해당하는 코드를 독립 함수로 추출한다.
// 2. 테스트한다.
// 3. 중간 데이터 구조를 만들어서 앞에서 추출한 함수의 인수로 추가한다.
// 4. 테스트한다.
// 5. 추출한 두 번째 단계 함수의 매개변수를 하나씩 검토한다. 그중 첫 번째 단계에서 사용되는 것은
// 중간 데이터 구조로 옮긴다. 하나씩 옮길 때마다 테스트한다.
// 6. 첫 번째 단계 코드를 함수로 추출하면서 중간 데이터 구조를 반환하도록 만든다.
