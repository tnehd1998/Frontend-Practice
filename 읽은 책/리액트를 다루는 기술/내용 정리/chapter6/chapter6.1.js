// 6.1 자바스크립트 배열의 map() 함수

// map 함수는 파라미터로 전달된 함수를 사용해서
// 배열 내 각 요소를 원하는 규칙에 따라 변환한 후 그 결과로 새로운 배열을 생성함

// 6.1.1 문법

// arr.map(callback, [thisArg])

// callback: 파라미터는 다음 세가지를 가지고 있음
// 1. currentValue: 현재 처리하고 있는 요소
// 2. index: 현재 처리하고 있는 요소의 index 값
// 3. array: 현재 처리하고 있는 원본 배열

// thisArg: callback 함수 내부에서 사용할 this 레퍼런스
