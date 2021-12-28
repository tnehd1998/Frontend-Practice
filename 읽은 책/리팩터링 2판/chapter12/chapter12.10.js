// 12.10 서브클래스를 위임으로 바꾸기

class Order {
  get daysToShip() {
    return this._warehouse.daysToShip;
  }
}
class PriorityOrder extends Order {
  get daysToShip() {
    return this._priorityPlan.daysToShip;
  }
}

class Order {
  get daysToShip() {
    return this._priorityDelegate
      ? this._priorityDelegate.daysToShip
      : this._warehouse.daysToShip;
  }
}
class PriorityOrderDelegate {
  get daysToShip() {
    return this._priorityPlan.daysToShip;
  }
}

// 📌 배경

// 처음에는 상속으로 접근한 다음, 문제가 생기기 시작하면 위임으로 바꾼다.

// 📌 절차

// 1. 생성자를 호출하는 곳이 많다면 생성자를 팩터리 함수로 바꾼다.
// 2. 위임으로 활용할 빈 클래스를 만든다. 이 클래스의 생성자는 서브클래스에 특화된 데이터를 전부 받아야 하며,
// 보통은 슈퍼클래스를 가리키는 역참조도 필요하다.
// 3. 위임을 저장할 필드를 슈퍼클래스에 추가한다.
// 4. 서브클래스 생성 코드를 수정하여 위임 인스턴스를 생성하고 위임 필드에 대입해 초기화한다.
// 5. 서브클래스의 메서드 중 위임 클래스로 이동할 것을 고른다.
// 6. 함수 옮기기를 적용해 위임 클래스로 옮긴다. 원래 메서드에서 위임하는 코드는 지우지 않는다.
// 7. 서브클래스 외부에도 원래 메서드를 호출하는 코드가 있다면 서브클래스의 위임 코드를 슈퍼클래스로 옮긴다. 이때
// 위임이 존재하는지를 검사하는 보호 코드로 감싸야 한다. 호출하는 외부 코드가 없다면 원래 메서드는 죽은 코드가
// 되므로 제거한다.
// 8. 테스트한다.
// 9. 서브클래스의 모든 메서드가 옮겨질 때까지 5~8과정을 반복한다.
// 10. 서브클래스들의 생성자를 호출하는 코드를 찾아서 슈퍼클래스의 생성자를 사용하도록 수정한다.
// 11. 테스트한다.
// 12. 서브클래스를 삭제한다.
