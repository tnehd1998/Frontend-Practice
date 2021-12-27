// 10.6 어서션 추가하기

if (this.discountRate) {
  base = base - this.discountRate * base;
}

assert(this.discountRate >= 0);
if (this.discountRate) {
  base = base - this.discountRate * base;
}

// 📌 배경

// 어서션은 프로그램이 어떤 상태임을 가정한 채 실행되는지를 다른 개발자에게 알려주는 훌륭한 소통 도구이다.
// 하지만, 테스트 코드가 있다면 어서션의 디버깅 용도로서의 효용은 줄어든다.
// 소통 측면에서는 매력적이지만, 단위 테스트를 꾸준히 추가하여 사각을 좁히면 어서션보다 나을 때가 많다.

// 📌 절차

// 1. 참이라고 가정하는 조건이 보이면 그 조건을 명시하는 어서션을 추가한다.
