// 12.2 필드 올리기

class Employee {}
class SalePerson extends Employee {
  constructor() {
    this.name;
  }
}
class Engineer extends Employee {
  constructor() {
    this.name;
  }
}

class Employee {
  constructor() {
    this.name;
  }
}
class SalePerson extends Employee {}
class Engineer extends Employee {}

// 📌 배경

// 서브클래스드링 독립적으로 개발되었거나 뒤늦게 하나의 계층구조로 리팩터링된 경우라면 일부 기능이 중복되는 경우가 빈번하다.
// 분석 결과 필드들이 비슷한 방식으로 쓰인다고 판단되면 슈퍼클래스로 끌어올리자.

// 📌 절차

// 1. 후보 필드들을 사용하는 곳 모두가 그 필드들을 똑같은 방식으로 사용하는지 면밀히 살핀다.
// 2. 필드들의 이름이 각기 다르다면 똑같은 이름으로 바꾼다.
// 3. 슈퍼클래스에 새로운 필드를 생성한다.
// 4. 서브클래스의 필드들을 제거한다.
// 5. 테스트한다.
