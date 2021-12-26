// 9.3 파생 변수를 질의 함수로 바꾸기

class Market {
  get discountedTotal() {
    return this._discountedTotal;
  }
  set discount(aNumber) {
    const old = this._discount;
    this._discount = aNumber;
    this._discountedTotal += old - aNumber;
  }
}

class Market {
  get discountedTotal() {
    return this._baseTotal - this._discount;
  }
  set discount(aNumber) {
    this._discount = aNumber;
  }
}

// 📌 배경

// 가변 데이터를 완전히 배제하기란 현실적으로 불가능하지만 유효 범위를 가능한 좁혀야 한다

// 📌 절차

// 1. 변수 값이 갱신되는 지점을 모두 찾는다. 필요하면 변수 쪼개기를 활용해 각 갱신 지점에서 변수를 분리한다.
// 2. 해당 변수의 값을 계산해주는 함수를 만든다.
// 3. 해당 변수가 사용되는 모든 곳에 어서션을 추가하여 함수의 계산 결과가 변수의 값과 같은지 확인한다.
// 4. 테스트한다.
// 5. 변수를 읽는 코드를 모두 함수 호출로 대체한다.
// 6. 테스트한다.
// 7. 변수를 선언하고 갱신하는 코드를 죽은 코드 제거하기로 없앤다.
