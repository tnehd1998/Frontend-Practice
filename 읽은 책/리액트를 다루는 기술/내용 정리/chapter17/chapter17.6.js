// 17.6 리덕스 더 편하게 사용하기

// 액션 생성 함수, 리듀서를 작성할 때 redux-actions라는 라이브러리를 활용하면 리덕스를 훨씬 편하게 사용 가능

// 17.6.1 redux-actions

// redux-actions를 사용하면 액션 생성 함수를 더 짧은 코드로 작성할 수 있음
// 리듀서를 작성할 때도 switch/case문이 아닌 handleActions라는 함수를 사용하여
// 각 액션마다 업데이트 함수를 설정하는 형식으로 작성 가능

// createAction으로 액션을 만들면 액션에 필요한 추가 데이터는 payload라는 이름을 사용함
