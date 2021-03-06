// 5.1 ref는 어떤 상황에서 사용해야 할까?

// HTML에서 id를 사용하여 DOM에 이름을 다는 것처럼 리액트 프로젝트 내부에서 DOM에 이름을 달때 ref를 사용
// DOM을 꼭 직접적으로 건드려야 할 때 ref를 사용한다

// state를 사용하여 필요한 기능을 구현할 수 있지만 가끔 state만으로 해결할 수 없는 기능이 있음
// 1. 특정 input에 포커스 주기
// 2. 스크롤 박스 조작하기
// 3. Canvas 요소에 그림 그리기

// 이러한 경우 어쩔수 없이 DOM에 직접적으로 접근하여 ref를 사용
