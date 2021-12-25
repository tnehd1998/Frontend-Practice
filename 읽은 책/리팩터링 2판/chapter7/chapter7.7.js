// 7.7 위임 숨기기

manager = aPerson.department.manager;

fixedManager = aPerson.manager;

class Person {
  get manager() {
    return this.department.manager;
  }
}

// 📌 배경

// 모듈화 설계를 제대로 하는 핵심은 캡슐화다.
// 캡슐화가 잘 되어 있다면 무언가를 변경해야 할 때 함께 고려해야 할 모듈 수가 적어져서
// 코드를 변경하기가 훨씬 쉬워진다.

// 📌 절차

// 1. 위임 객체의 각 메서드에 해당하는 위임 메서드를 서버에 저장한다.
// 2. 클라이언트가 위임 객체 대신 서버를 호출하도록 수정한다. 하나씩 바꿀 때마다 테스트한다.
// 3. 모두 수정했다면, 서버로부터 위임 객체를 얻는 접근자를 제거한다.
// 4. 테스트한다.
