// 11.9 함수를 명령으로 바꾸기

function score(candidate, medicalExam, scoringGuide) {
  let result = 0;
  let healthLevel = 0;
}

class Scorer {
  constructor(candidate, medicalExam, scoringGuide) {
    this._candidate = candidate;
    this._medicalExam = medicalExam;
    this._scoringGuide = scoringGuide;
  }

  execute() {
    this._result = 0;
    this._healthLevel = 0;
  }
}

// 📌 배경

// 명령은 평범한 함수 메커니즘보다 훨씬 유연하게 함수를 제어하고 표현할 수 있다.
// 명령을 사용해 얻는 이점이 많지만, 해당 유연성은 복잡성을 키우고 얻는 대가다.
// 명령을 선택할 때는 명령보다 더 간단한 방식으로는 얻을 수 없는 기능이 필요할 때뿐이다.

// 📌 절차

// 1. 대상 함수의 기능을 옮길 빈 클래스를 만든다. 클래스 이름은 함수 이름에 기초해 짓는다.
// 2. 방금 생성한 빈 클래스로 함수를 옮긴다.
// 3. 함수의 인수들 각각은 명령의 필드로 만들어 생성자를 통해 설정할지 고민해본다.
