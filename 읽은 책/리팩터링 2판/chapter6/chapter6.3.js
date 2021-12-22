// 6.3 변수 추출하기

function result() {
  return (
    order.quantity * order.itemPrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100)
  );
}

function fixedResult() {
  const basePrice = order.quantity * order.itemPrice;
  const quantityDiscount =
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shipping = Math.min(basePrice * 0.1, 100);
  return basePrice - quantityDiscount + shipping;
}

// 📌 배경

// 표현식이 너무 복잡해서 이해하기 어려울 때가 있다.
// 이럴 때 지역 변수를 활용하면 표현식을 쪼개 관리하기 더 쉽게 만들 수 있다.
// 그러면 복잡한 로직을 구성하는 단계마다 이름을 붙일 수 있어서 코드의 목적을 훨씬 명확하게 드러낼 수 있다.

// 📌 절차

// 1. 추출하려는 표현식에 부작용은 없는지 확인한다.
// 2. 불변 변수를 하나 선언하고 이름을 붙일 표현식의 복제본을 대입한다.
// 3. 원본 표현식을 새로 만든 변수로 교체한다.
// 4. 테스트한다.
// 5. 표현식을 여러 곳에서 사용한다면 각각을 새로 만든 변수로 교체한다. 하나 교체할 때마다 테스트한다.
