// Chapter 23) 실행 컨텍스트
// 실행 컨텍스트 : 자바스크립트의 동작 원리를 담고 있는 핵심 개념

// 1) 소스코드의 타입
// 소스코드는 4가지 타입으로 구분되며, 4가지 타입의 소스코드는 실행 컨텍스트를
// 생성한다
// - 전역 코드 : 전역에 존재하는 소스코드
// - 함수 코드 : 함수 내부에 존재하는 소스코드
// - eval 코드 : 빌트인 전역 함수인 eval함수에 인수로 전달되어 실행되는
// 소스코드
// - 모듈 코드 : 모듈 내부에 존재하는 소스코드

// 2) 소스코드의 평가와 실행
// 자바스크립트 엔진은 소스코드를 2개의 과정인 "소스코드의 평가"와
// "소스코드의 실행"과정으로 나누어 처리함

// 3) 실행 컨텍스트의 역할
// - 코드가 실행되려면 스코프, 식별자, 코드 실행 순서등의 관리가 필요함
// - 실행 컨텍스트는 소스코드를 실행하는 데 필요한 환경을 제공하고 코드의
// 실행 결과를 실제로 관리하는 영역이다
// - 쉽게 말해 모든 코드는 실행 컨텍스트를 통해 실행되고 관리된다

// 4) 실행 컨텍스트 스택
// 생성된 실행 컨텍스트를 스택 자료구조로 관리하는 것
// 실행 컨텍스트 스택은 코드의 실행순서를 관리하며, 스택의 최상위에 존재하는
// 실행 컨텍스트는 언제나 실행 중인 코드의 실행 컨텍스트다

// 5) 렉시컬 환경
// 식별자와 식별자에 바인딩된 값, 그리고 상위 스코프에 대한 참조를 기록하는
// 자료구조로 실행 컨텍스트를 구성하는 컴포넌트
