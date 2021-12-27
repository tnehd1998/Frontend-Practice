// 10.4 조건부 로직을 다형성으로 바꾸기

switch (bird.type) {
  case "유럽 제비":
    return "보통이다";
  case "아프리카 제비":
    return bird.numberOfCoconuts > 2 ? "지쳤다" : "보통이다";
  case "노르웨이 파랑 앵무":
    return bird.voltage > 100 ? "그을렸다" : "예쁘다";
  default:
    return "알 수 없다";
}

class EuropeanSwallow {
  get plumage() {
    return "보통이다";
  }
}

class AfricanSwallow {
  get plumage() {
    return bird.numberOfCoconuts > 2 ? "지쳤다" : "보통이다";
  }
}

class NorwegianBlueParrot {
  get plumage() {
    return bird.voltage > 100 ? "그을렸다" : "예쁘다";
  }
}

// 📌 배경

// 개선할 수 있는 복잡한 조건부 로직을 발견하면 다형성이 막강한 도구다.

// 📌 절차

// 1. 다형적 동작을 표현하는 클래스들이 아직 없다면 만들어준다. 이왕이면 적합한 인스턴스를 알아서 만들어
// 반환하는 팩터리 함수도 함께 만든다.
// 2. 호출하는 코드에서 팩터리 함수를 사용하게 한다.
// 3. 조건부 로직 함수를 슈퍼클래스로 옮긴다.
// 4. 서브클래스 중 하나를 선택한다. 서브클래스에서 슈퍼클래스의 조건부 로직 메서드를 오버라이드한다.
// 조건부 문장 중 선택된 서브클래스에 해당하는 조건절을 서브클래스 메서드로 복사한 다음 적절히 수정한다.
