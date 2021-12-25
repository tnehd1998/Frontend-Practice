// 7.4 임시 변수를 질의 함수로 바꾸기

const basePrice = this._quantity * this._itemPrice;
if (basePrice > 1000) {
  return basePrice * 0.95;
} else {
  return basePrice * 0.98;
}

class Price {
  get basePrice() {
    return this._quantity * this._itemPrice;
  }
}

const price = new Price();

if (price.basePrice > 1000) {
  return this.basePrice * 0.95;
} else {
  return this.basePrice * 0.98;
}

// 📌 배경

// 긴 함수의 한 부분을 별도 함수로 추출하고자 할 때 먼저 변수들을 각각의 함수로 만들면 일이 수월해진다.
// 변수를 따로 전달할 필요가 없어지며 추출한 함수와 원래 함수의 경계가 더 분명해지기도 하는데,
// 그러면 부자연스러운 의존 관계나 부수효과를 찾고 제거하는 데 도움이 된다.

// 📌 절차

// 1. 변수가 사용되기 전에 값이 확실히 결정되는지, 변수를 사용할 때마다 계산 로직이 매번 다른
// 결과를 내지는 않는지 확인한다.
// 2. 읽기전용으로 만들 수 있는 변수는 읽기전용으로 만든다.
// 3. 테스트한다.
// 4. 변수 대입문을 함수로 추출한다.
// 5. 테스트한다.
// 6. 변수 인라인하기로 임시 변수를 제거한다.
