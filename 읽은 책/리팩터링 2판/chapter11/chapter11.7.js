// 11.7 세터 제거하기

class Person {
  get name() {}
  set name(aString) {}
}

class Person {
  get name() {}
}

// 📌 배경

// 세터 메서드가 있다는 것은 필드가 수정도리 수 있다는 뜻이다.
// 객체 생성 후 수정되지 않길 원하면 세터 함수를 제공하지 말아야 한다.

// 📌 절차

// 1. 설정해야 할 값을 생성자에서 받지 않는다면 그 값을 받을 매개변수를 생성자에 추가한다. 그런 다음
// 생성자 안에서 적절한 세터를 호출한다.
// 2. 생성자 밖에서 세터를 호출하는 곳을 찾아 제거하고, 대신 새로운 생성자를 사용하도록 한다.
// 하나 수정할 때마다 테스트한다.
// 3. 세터 메서드를 인라인한다. 가능하다면 해당 필드를 불변으로 만든다.
// 4. 테스트한다.
