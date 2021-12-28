// 12.8 슈퍼클래스 추출하기

class Department {
  get totalAnnualCost() {}
  get name() {}
  get headCount() {}
}
class Employee {
  get annualCost() {}
  get name() {}
  get id() {}
}

class Party {
  get name() {}
  get annualCost() {}
}
class Department extends Party {
  get annualCost() {}
  get headCount() {}
}
class Employee extends Party {
  get annualCost() {}
  get id() {}
}

// 📌 배경

// 비슷한 일을 수행하는 두 클래스가 보이면 상속 메커니즘을 이용해서 비슷한 부분을 공통의 슈퍼클래스로 옮겨 담을수 있다.
// 공통된 부분이 데이터라면 필드 올리기를 활용하고, 동작이라면 메서드 올리기를 활용하면 된다.

// 📌 절차

// 1. 빈 슈퍼클래스를 만든다. 원래의 클래스들이 새 클래스를 상속하도록 한다.
// 2. 테스트한다.
// 3. 생성자 본문 올리기, 메서드 올리기, 필드 올리기를 차례로 적용하여 공통 원소를 슈퍼클래스로 옮긴다.
// 4. 서브클래스에 남은 메서드들을 검토한다. 공통되는 부분이 있다면 함수로 추출한 다음 메서드 올리기를 적용한다.
// 5. 원래 클래스들을 사용하는 코드를 검토하여 슈퍼클래스의 인터페이스를 사용하게 할지 고민해본다.
