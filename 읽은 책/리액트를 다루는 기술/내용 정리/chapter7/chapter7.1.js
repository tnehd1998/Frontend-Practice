// 7.1 라이프사이클 메서드의 이해

// 라이프사이클 메서드의 종류는 총 아홉 가지가 있음
// Will 접두사가 붙은 메서드는 어떤 작업을 작동하기 전에 실행되는 메서드
// Did 접두사가 붙은 메서드는 어떤 작업을 작동한 후에 실행되는 메서드

// 라이프사이클은 총 세가지, Mount, Update, Unmount 카테고리로 나눔

// 1. Mount

// DOM이 생성되고 웹 브라우저상에 나타나는 것이며 호출되는 메서드의 순서
// - constructor: 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드
// - getDerivedStateFromProps: props에 있는 값을 state에 넣을 때 사용하는 메서드
// - render: 우리가 준비한 UI를 렌더링하는 메서드
// - componentDidMount: 컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메서드

// 2. Update
// 컴포넌트는 다음과 같은 총 네가지 경우에 업데이트를 함

// 1. props가 바뀔 때
// 2. state가 바뀔 때
// 3. 부모 컴포넌트가 리렌더링될 때
// 4. this.forceUpdate로 강제로 렌더링을 트리거할 때

// 컴포넌트를 업데이트할 때 호출되는 메서드의 순서
// - getDerivedStateFromProps: props의 변화에 따라 state값에도 변화를 주고 싶을 때 사용
// - shouldComponentUpdate: 컴포넌트가 리렌더링을 해야할지 말지를 결정하는 메서드
// - render: 컴포넌트를 리렌더링함
// - getSnapshotBeforeUpdate: 컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출하는 메서드
// - componentDidUpdate: 컴포넌트의 업데이트 작업이 끝난 후 호출하는 메서드

// 3. Unmount
// 마운트의 반대 과정, 즉 컴포넌트를 DOM에서 제거하는 것

// - componentWillUnmount: 컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는 메서드
