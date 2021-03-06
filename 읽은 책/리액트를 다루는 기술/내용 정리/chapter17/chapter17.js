// 17 리덕스를 사용하여 리액트 어플리케이션 상태 관리하기

// 리액트 어플리케이션에서 리덕스를 사용하면, 상태 업데이트에 관한 로직을 모듈로 따로 분리하여
// 컴포넌트 파일과 별개로 관리할 수 있으므로 코드를 유지 보수하는 데 도움이 된다

// 여러 컴포넌트에서 동일한 상태를 공유해야 할 때 매우 유용하며,
// 실제 업데이트가 필요한 컴포넌트만 리렌더링되도록 쉽게 최적화해 줄 수도 있음

// 바닐라 자바스크립트 환경에서 리덕스를 사용할 때
// 스토어의 내장 함수인 store.dispatch와 store.subscribe를 사용함
// 리액트 어플리케이션에서 리덕스를 사용할 때는 store 인스턴스를 직접 사용하기보다는
// 주로 react-redux라는 라이브러리에서 제공하는 유틸 함수 (connect)와 컴포넌트(Provider)를 사용함
