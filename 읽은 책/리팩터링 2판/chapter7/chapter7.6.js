// 7.6  클래스 인라인하기

class Person {
  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }
  get officeNumber() {
    return this._telephoneNumber.number;
  }
}
class TelephoneNumber {
  get areaCode() {
    return this._areaCode;
  }
  get number() {
    return this._number;
  }
}

class FixedPerson {
  get officeAreaCode() {
    return this._officeAreaCode;
  }
  get officeNumber() {
    return this._officeNumber;
  }
}

// 📌 배경

// 더 이상 제 역할을 못 해서 그대로 두면 안되는 클래스는 인라인해버린다.

// 📌 절차

// 1. 소스 클래스의 각 public 메서드에 대응하는 메서드들을 타깃 클래스에 생성한다.
// 이 메서드들은 단순히 작업을 소스 클래스로 위임해야 한다.
// 2. 소스 클래스의 메서드를 사용하는 코드를 모두 타깃 클래스의 위임 메서드를 사용하도록 바꾼다.
// 하나씩 바꿀 때마다 테스트한다.
// 3. 소스 클래스의 메서드와 필드를 모두 타깃 클래스로 옮긴다. 하나씩 옮길 때마다 테스트한다.
// 4. 소스 클래스를 삭제하고 조의를 표한다.
