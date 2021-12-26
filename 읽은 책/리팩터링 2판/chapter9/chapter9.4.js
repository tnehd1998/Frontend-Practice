// 9.4 참조를 값으로 바꾸기

class Product {
  applyDiscount(arg) {
    this._price.amount -= arg;
  }
}

class Product {
  applyDiscount(arg) {
    this._price = new Money(this._price.amount - arg, this._price.currenct);
  }
}

// 📌 배경

// 필드를 값으로 다룬다면 내부 객체의 클래스를 수정하여 값 객체로 만들 수 있다.
// 값 객체는 불변이기 때문에 대체로 자유롭게 활용하기 좋다.

// 📌 절차

// 1. 후보 클래스가 불변이지, 혹은 불변이 될 수 있는지 확인한다.
// 2. 각각의 세터를 하나씩 제거한다.
// 3. 이 값 객체의 필드들을 사용하는 동치성 비교 메서드를 만든다.
