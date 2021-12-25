// 8.2 필드 옮기기

class Customer {
  get plan() {
    return this._plan;
  }
  get discountRate() {
    return this._discountRate;
  }
}

class FixedCustomer {
  get plan() {
    return this._plan;
  }
  get discountRate() {
    return this.plan.discountRate;
  }
}

// 📌 배경

// 데이터 구조가 적절치 않음을 깨닫게 되면 곧바로 수정해야 한다.
// 고치지 않고 데이터 구조에 남겨진 흠들은 우리 머릿속을 혼란스럽게 하고 훗날 작성하게 될 코드를
// 더욱 복잡하게 만들어버린다.

// 📌 절차

// 1. 소스 필드가 캡슐화되어 있지 않다면 캡슐화한다.
// 2. 테스트한다.
// 3. 타깃 객체에 필드를 생성한다.
// 4. 정적 검사를 수행한다.
// 5. 소스 객체에서 타깃 객체를 참조할 수 있는지 확인한다.
// 6. 접근자들이 타깃 필드를 사용하도록 수정한다.
// 7. 테스트한다.
// 8. 소스 필드를 제거한다.
// 9. 테스트한다.
