// 1.2 리액트의 특징

// 1.2.1 Virtual DOM

// 1.2.1.1 DOM이란?

// DOM(Document Object Model) : 객체로 문서 구조를 표현하는 방법으로 XML이나 HTML로 작성함
// 웹 브라우저는 DOM을 활용해 자바스크립트와 CSS를 적용
// DOM은 트리형태라서 특정 노드를 찾아 수정하거나 제거하거나 원하는 곳에 삽입할 수 있음

// DOM에 대한 문제

// DOM은 동적 UI에 최적화되어 있지 않음
// HTML은 자체적으로는 정적임
// 자바스크립트를 사용하여 이를 동적으로 만드는 것

// DOM 자체는 빠르지만, 웹 브라우저 단에서 DOM에 변화가 일어나면
// 웹 브라우저가 CSS를 다시 연산하고
// 레이아웃을 구성하고
// 페이지를 리페인트함
// 이러한 과정에서 시간이 허비되어 느리다는 얘기가 나옴

// DOM의 문제에 대한 해결책

// DOM을 조작하는 것을 피할수는 없기 때문에 DOM을 최소한으로 조작하여 작업을 수행해야함
// 리액트는 Virtual DOM방식을 사용하여 DOM업데이트를 추상화하여 DOM 처리 횟수를 최소화하고 효율적으로 진행

// 1.2.1.2 Virtual DOM

// 실제 DOM에 접근하여 조작하는 대신, 이를 추상화한 자바스크립트 객체를 구성하여 사용함

// 리액트에서 데이터가 변하여 웹 브라우저에 실제 DOM을 업데이트할때의 3가지 절차
// 1. 데이터를 업데이트하면 전체 UI를 Virtual DOM에 리렌더링한다
// 2. 이전 Virtual DOM에 있던 내용과 현재 내용을 비교함
// 3. 바뀐 부분만 실제 DOM에 적용함

// 리액트에 대한 오해

// 리액트는 지속적으로 데이터가 변화하는 대규모 어플리케이션을 구축할 때 좋은 성능을 보임
// 작업이 매우 간단한 정적인 사이트는 오히려 리액트를 사용하지 않는 편이 더 나은 성능을 보이기도 함
// 모든 사이트를 리액트로 제작해야 되는것이 아니다

// 1.2.2 기타 특징

// 리액트는 오직 뷰만 담당하는 라이브러리이기 때문에 ajax, 데이터 모델링, 라우팅과 같은 기능을 내장하고 있지않음
// 하지만, 다른 개발자들이 만든 수많은 라이브러리를 활용해 해당 기능들을 대체 가능함
// 라우팅 => react-router
// ajax => axios, fetch
// 상태 관리 => redux, MobX
