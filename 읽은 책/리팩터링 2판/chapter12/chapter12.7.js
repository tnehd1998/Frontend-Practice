// 12.7 서브클래스 제거하기

class Person {
  get genderCode() {
    return "X";
  }
}
class Male extends Person {
  get genderCode() {
    return "M";
  }
}
class Female extends Person {
  get genderCode() {
    return "F";
  }
}

class Person {
  get genderCode() {
    return this._genderCode;
  }
}

// 📌 배경

// 더 이상 쓰이지 않는 서브클래스와 마주하는 프로그래머는 가치 없는 것을 이해하느라 에너지를 낭비할 것이다.
// 이런 정도까지 되면 서브클래스를 슈퍼클래스의 필드로 대체해 제거하는 게 최선이다.

// 📌 절차

// 1. 서브클래스의 생성자를 팩터리 함수로 바꾼다.
// 2. 서브클래스의 타입을 검사하는 코드가 있다면 그 검사 코드에 함수 추출하기와 함수 옮기기를 차례로 적용하여
// 슈퍼클래스로 옮긴다. 하나 변경할 때마다 테스트한다.
// 3. 서브클래스의 타입을 나타내는 필드를 슈퍼클래스에 만든다.
// 4. 서브클래스를 참조하는 메서드가 방금 만든 타입 필드를 이용하도록 수정한다.
// 5. 서브클래스를 지운다.
// 6. 테스트한다.
