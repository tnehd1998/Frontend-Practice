// 12.6 타입 코드를 서브클래스로 바꾸기

function createEmployee(name, type) {
  return new Employee(name, type);
}

function createEmployee(name, type) {
  switch (type) {
    case "engineer":
      return new Engineer(name);
    case "salesperson":
      return new SalesPerson(name);
    case "manager":
      return new Manager(name);
  }
}

// 📌 배경

// 서브 클래스로 분리함으로써 조건에 따라 다르게 동작하도록 해주는 다형성을 제공하고, 특정 타입에서만 의미가 있는 값을
// 사용하는 필드나 메서드가 있을 때 발현된다.

// 📌 절차

// 1. 타입 코드 필드를 자가 캡슐화한다.
// 2. 타입 코드 값 하나를 선택하여 그 값에 해당하는 서브클래스를 만든다. 타입 코드 게터 메서드를 오버라이드하여 해당
// 타입 코드의 리터럴 값을 반환하게 한다.
// 3. 매개변수로 받은 타입 코드와 방금 만든 서브클래스를 매핑하는 선택 로직을 만든다.
// 4. 테스트한다.
// 5. 타입 코드 값 각각에 대해 서브클래스 생성과 선택 로직 추가를 반복한다. 클래스 하나가 완성도리 때마다 테스트한다.
// 6. 타입 코드 필드를 제거한다.
// 7. 테스트한다.
// 8. 타입 코드 접근자를 이용하는 메서드 모두에 메서드 내리기와 조건부 로직을 다형성으로 바꾸기를 적용한다.
