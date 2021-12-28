// 12.1 메서드 올리기

class Employee {}
class SalePerson extends Employee {
  get name() {}
}
class Engineer extends Employee {
  get name() {}
}

class Employee {
  get name() {}
}
class SalePerson extends Employee {}
class Engineer extends Employee {}

// 📌 배경

// 중복 코드 제거는 중요하다.
// 중복된 두 메서드가 당장은 문제없이 동작할지라도 미래에는 버그가 꼬이는 코드로 전락할 수 있다.
// 일반적으로는 중복을 찾기가 그리 쉽지는 않다.

// 📌 절차

// 1. 똑같이 동작하는 메서드인지 면밀히 살펴본다.
// 2. 메서드 안에서 호출하는 다른 메서드와 참조하는 필드들을 슈퍼클래스에서도 호출하고 참조할 수 있는지 확인한다.
// 3. 메서드 시그니처가 다르다면 함수 선언 바꾸기로 슈퍼클래스에서 사용하고 싶은 형태로 통일한다.
// 4. 슈퍼클래스에 새로운 메서드를 생성하고, 대상 메서드의 코드를 복사해넣는다.
// 5. 정적 검사를 수행한다.
// 6. 서브클래스 중 하나의 메서드를 제거한다.
// 7. 테스트한다.
// 8. 모든 서브클래스의 메서드가 없어질 때까지 다른 서브클래스의 메서드를 하나씩 제거한다.
