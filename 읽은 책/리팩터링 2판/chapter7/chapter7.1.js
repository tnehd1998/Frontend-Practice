// 7.1 레코드 캡슐화하기

const organization = { name: "Billy", country: "Korea" };

class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }
  get name() {
    return this._name;
  }
  set name(arg) {
    this._name = arg;
  }
  get country() {
    return this._country;
  }
  set country(arg) {
    this._country = arg;
  }
}

// 📌 배경

// 객체를 사용하면 어떻게 저장했는지를 숨긴 채 세 가지 값을 각각의 메서드로 제공할 수 있다.

// 코드를 작성하다 보면 중첩된 리스트나 해시맵을 받아서 JSON이나 XML 같은 포맷으로
// 직렬화할 때가 많다. 이런 구조 역시 캡슐화할 수 있는데, 그러면 나중에 포맷을 바꾸너나
// 추적하기 어려운 데이터를 수정하기가 수월해진다.

// 📌 절차

// 1. 레코드를 담은 변수를 캡슐화한다.
// 2. 레코드를 감싼 단순한 클래스로 해당 변수의 내용을 교체한다. 이 클래스에 원본 레코드를
// 반환하는 접근자도 정의하고, 변수를 캡슐화하는 함수들이 이 접근자를 사용하도록 수정한다.
// 3. 테스트한다.
// 4. 원본 레코드 대신 새로 정의한 클래스 타입의 객체를 반환하는 함수들을 새로 만든다.
// 5. 레코드를 반환하는 예전 함수를 사용하는 코드를 4에서 만든 새 함수를 사용하도록 바꾼다.
// 필드에 접근할 때는 객체의 접근자를 사용한다. 적절한 접근자가 없다면 추가한다.
// 한 부분을 바꿀 때마다 테스트한다.
// 6. 클래스에서 원본 데이터를 반환하는 접근자와 원본 레코드를 반환하는 함수들을 제거한다.
// 7. 테스트한다.
// 8. 레코드의 필드도 데이터 구조인 중첩 구조라면 레코드 캡슐화하기와 컬렉션 캡슐화하기를
// 재귀적으로 적용한다.
