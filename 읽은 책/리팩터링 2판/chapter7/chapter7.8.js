// 7.8 중개자 제거하기

manager = aPerson.manager;

class Person {
  get manager() {
    return this.department.manager;
  }
}

fixedManager = aPerson.department.manager;

// 📌 배경

// 클라이언트 위임 객체의 또 다른 기능을 사용하고 싶을 때마다 서버에 위임 메서드를 추가해야 하는데,
// 이렇게 기능을 추가하다 보면 단순히 전달만 하는 위임 메서드들이 점점 성가셔진다.
// 그러면 서버 클래스는 그저 중개자 역할로 전략하여, 차라리 클라이언트가 위임 객체를 직접 호출하는게
// 나을수 있다.

// 📌 절차

// 1. 위임 객체를 얻는 게터를 만든다.
// 2. 위임 메서드를 호출하는 클라이언트가 모두 이 게터를 거치도록 수정한다. 하나씩 바꿀때마다 테스트한다.
// 3. 모두 수정했다면 위임 메서드를 삭제한다.
