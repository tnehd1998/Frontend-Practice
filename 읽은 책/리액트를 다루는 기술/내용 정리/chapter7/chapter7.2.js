// 7.2 라이프사이클 메서드 살펴보기

// 7.2.1 render()함수
// 컴포넌트의 모양새를 정의하며 가장 중요한 메서드

// 7.2.2 constructor 메서드
// 컴포넌트를 만들 때 처음으로 실행되며 초기 state를 정할 수 있음

// 7.2.3 getDerivedStateFromProps 메서드
// props로 받아 온 값을 state에 동기화시키는 용도로 사용하며, 컴포넌트가 마운트될 때와 업데이트될 때 호출됨

// 7.2.4 componentDidMount 메서드
// 컴포넌트를 만들고, 첫 렌더링을 다 마친 후 실행함

// 7.2.5 shouldComponentUpdate 메서드
// props또는 state를 번경했을 때, 리렌더링을 시작할지 여부를 지정하는 메서드

// 7.2.6 getSnapshotBeforeUpdate 메서드
// render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출됨

// 7.2.7 componentDidUpdate 메서드
// 리렌더링을 완료한 후 실행됨

// 7.2.8 componentWillUnmount 메서드
// 컴포넌트를 DOM에서 제거할 때 실행, componentDidMount에서 직접 생성한 DOM이 있다면 여기서 제거 작업을 해야함

// 7.2.9 componentDidCatch 메서드
// 컴포넌트 렌더링 도중에 에러가 발생했을 때 어플리케이션이 먹통이 되지 않고 오류 UI를 보여줌
